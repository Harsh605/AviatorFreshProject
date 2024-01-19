import React, { useRef, useState, useEffect } from "react";
// import './UserDataSection.css'
import "../Sidebar/Sidebar.css";
import { fetchData, postData } from "../../Api/Clientfunctions";
import { Fade } from "react-reveal";
import { formatStatusCode, formatTimestamp } from "../../Api/Clientfunctions";
import { mutate } from "swr";
import { toast } from "react-toastify";
import useSWR from "swr";
const Withdraw = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  // const tableRef = useRef();
  const [withdrawData, setWithdrawData] = useState([]);
  const { data, error } = useSWR(
    `/admin/allwithdrawalrequest?page=${currentPage}&limit=10`,
    fetchData // Use your custom fetcher function here
  );
  useEffect(() => {
    if (data && data.data && data.length) {
      setWithdrawData(data.data);
      setTotalPages(Math.ceil(data.length / 10));
    }
  }, [data]);
  if (error) {
    console.error("Error fetching data:", error);
  }

  const changeStatus = async (userId, status, phone, money) => {
    try {
      const res = await postData(`/admin/acceptwithdraw`, {
        id: userId,
        status,
        money,
        phone,
      });
      if (res.status) {
        toast.success("successfully updated!...");
        mutate(`/admin/allwithdrawalrequest?page=${currentPage}&limit=10`);
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const selectFilterItems = withdrawData.filter((item) => {
    const selectedFilterText = selectedFilter.toString().toLowerCase().trim();
    const isKycVerified = item?.status?.toString().toLowerCase()?.trim();

    // Check if selectedFilter is empty, return true for all items
    if (selectedFilterText === "") {
      return true;
    }

    // Check if the isKycVerified value matches the selected filter
    return isKycVerified.includes(selectedFilterText);
  });

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  const filteredData = withdrawData.filter(
    (row) =>
      (row.id &&
        row.id.toString().toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.name &&
        row.name.toString().toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.phone &&
        row.phone
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (row.account &&
        row.account
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (row.ifsc &&
        row.ifsc.toString().toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.stk &&
        row.stk.toString().toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.money &&
        row.money
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (row.status &&
        formatStatusCode(row.status)
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (row.name_bank &&
        row.name_bank
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (row.time &&
        formatTimestamp(row.time)
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (row.email &&
        row.email
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (row.name_user &&
        row.name_user
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (row.date &&
        row.date.toString().toLowerCase().includes(searchTerm.toLowerCase()))
  );
  const finalData =
    selectedFilter || selectedFilter === "0" ? selectFilterItems : filteredData;
  const handlePrint = () => {
    window.print();
  };

  const tableRef = useRef(null);

  const copyTable = () => {
    const range = document.createRange();
    range.selectNode(tableRef.current);
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    //   alert('Table copied to clipboard!');
  };

  const downloadTableAsCSV = () => {
    const table = document.getElementById("myTable"); // Assuming your table has an id 'myTable'

    if (!table) {
      console.error("Table not found");
      return;
    }

    const rows = table.querySelectorAll("tr");
    const csvData = [];

    rows.forEach((row) => {
      const rowData = [];
      const cells = row.querySelectorAll("td, th");

      cells.forEach((cell) => {
        rowData.push(cell.innerText);
      });

      csvData.push(rowData.join(","));
    });

    const csvContent = csvData.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "table_data.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Fade top distance="2%" duration={700}>
        <div className="wrapper">
          <div className="page-wrapper">
            <div className="page-content-wrapper">
              <div className="page-content">
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                  <div className="breadcrumb-title pe-3">
                    Withdrawal History
                  </div>
                </div>
                <div className="card">
                  <div className="cards-body">
                    <div
                      className="card-title"
                      style={{ justifyContent: "space-between" }}
                    >
                      <h4 className="mb-0"> Withdrawal User</h4>
                    </div>

                    <div
                      className="search-and-button d-flex mt-4"
                      style={{ justifyContent: "space-between" }}
                    >
                      <div className="buttons">
                        <button onClick={copyTable}>Copy</button>
                        <button onClick={downloadTableAsCSV}>CSV</button>
                        <button onClick={downloadTableAsCSV}>Excel</button>
                        <button>PDF</button>
                        <button onClick={handlePrint}>Print</button>
                      </div>
                      <div>
                        Search:-
                        <input
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                    </div>

                    <hr />
                    <div className="table-responsive">
                      <div className="card">
                        <div className="cards-body">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div className="card-title">
                              <h4 className="mb-0"> Withdrawal History</h4>
                            </div>
                            <select
                              value={selectedFilter}
                              onChange={(e) =>
                                setSelectedFilter(e.target.value)
                              }
                              style={{ borderRadius: "5px" }}
                              name=""
                              id=""
                            >
                              <option value="">Status</option>
                              <option value="1">Approved</option>
                              <option value="0">Pending</option>
                              <option value="2">Rejected</option>
                            </select>
                          </div>
                          <hr />
                          <div className="table-responsive">
                            <table
                              ref={tableRef}
                              id="myTable"
                              className="table table-striped table-bordered"
                              style={{ width: "100%" }}
                            >
                              <thead>
                                <tr
                                  style={{
                                    fontFamily: "ubuntu-medium,sans-serif",
                                  }}
                                >
                                  <th>User ID</th>
                                  <th>Name</th>
                                  <th>Phone no.</th>
                                  <th>Withdrawal Amount</th>
                                  <th>Account no.</th>
                                  <th>ISFC Code</th>
                                  <th>UPI Id</th>
                                  <th>Bank Name</th>
                                  <th>Account Holder Name</th>
                                  <th>Status</th>
                                  <th>Created</th>
                                  <th>Email</th>

                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody
                                style={{
                                  fontFamily: "ubuntu-medium,sans-serif",
                                }}
                              >
                                {finalData.map((row, index) => (
                                  <tr key={index}>
                                    <td>{row?.id}</td>
                                    <td>{row?.name}</td>
                                    <td>{row?.phone}</td>
                                    <td>{row?.money}</td>
                                    <td>{row?.account}</td>
                                    <td>{row?.ifsc}</td>
                                    <td>{row?.stk}</td>
                                    <td>{row?.name_bank}</td>
                                    <td>{row?.name_user}</td>
                                    <td>{formatStatusCode(row?.status)}</td>
                                    <td>{formatTimestamp(row?.time)}</td>
                                    <td>{row?.email}</td>

                                    <td>
                                      {row.status === 0 && (
                                        <>
                                          <abbr title="Rejected">
                                            <i
                                              onClick={() =>
                                                changeStatus(
                                                  row.id,
                                                  "2",
                                                  row.phone,
                                                  row.money
                                                )
                                              }
                                              style={{
                                                color: "red",
                                                paddingLeft: "5px",
                                                fontSize: "20px",
                                              }}
                                              className="bx bx-x"
                                            ></i>
                                          </abbr>
                                          <abbr title="Approved">
                                            <i
                                              onClick={() =>
                                                changeStatus(
                                                  row.id,
                                                  "1",
                                                  row.phone,
                                                  row.money
                                                )
                                              }
                                              style={{
                                                color: "green",
                                                paddingLeft: "5px",
                                                fontSize: "20px",
                                              }}
                                              className="bx bx-check"
                                            ></i>
                                          </abbr>
                                        </>
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                              <tfoot></tfoot>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="paginations">
                        <button
                          onClick={() => paginate(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          <i className="bx bx-chevron-left"></i>
                          Previous
                        </button>
                        <div>{currentPage}</div>
                        <button onClick={() => paginate(currentPage + 1)}>
                          Next
                          <i className="bx bx-chevron-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlay toggle-btn-mobile" />
          <a href="#" className="back-to-top">
            <i className="bx bxs-up-arrow-alt" />
          </a>
        </div>
      </Fade>
    </>
  );
};

export default Withdraw;
