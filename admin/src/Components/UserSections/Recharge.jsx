import React, { useRef, useState, useEffect } from "react";
import "../Sidebar/Sidebar.css";
import { Fade } from "react-reveal";
import { formatDateString, formatTime } from "../../Api/Clientfunctions";
import useSWR from "swr";
import { fetchData } from "../../Api/Clientfunctions";
const Recharge = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // const tableRef = useRef();
  const [reachargeData, setReachargeData] = useState([]);
  const { data, error } = useSWR(
    `/admin/getallrecharge?page=${currentPage}&limit=10`,
    fetchData // Use your custom fetcher function here
  );
  console.log(reachargeData);
  useEffect(() => {
    if (data && data.data && data.length) {
      setReachargeData(data.data);
      setTotalPages(Math.ceil(data.length / 10));
    }
  }, [data]);
  if (error) {
    console.error("Error fetching data:", error);
  }
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  const filteredData = reachargeData.filter((row) => {
    const idString = String(row.id);

    return (
      idString.toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(row.transectionId)
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (row.Amount &&
        String(row.Amount).toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.name_user &&
        row.name_user.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.phone &&
        row.phone.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.sr && row.sr.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.time &&
        String(row.time).toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.money &&
        String(row.money).toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

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
                  <div className="breadcrumb-title pe-3">Recharge History</div>
                </div>
                <div className="card">
                  <div className="cards-body">
                    <div
                      className="card-title"
                      style={{ justifyContent: "space-between" }}
                    >
                      <h4 className="mb-0">All Recharge</h4>
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
                          <div className="card-title">
                            <h4 className="mb-0">Recharge History</h4>
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
                                  <th>User Name</th>
                                  <th>UPI</th>
                                  <th>Email</th>
                                  <th>Phone no.</th>
                                  <th>Time</th>
                                  <th>Amount</th>
                                  <th>Transaction Id</th>
                                  <th>Status</th>
                                  <th>Order ID</th>
                                  <th>IP Address</th>
                                  <th>Created At</th>
                                  <th>UPI Transaction ID</th>
                                </tr>
                              </thead>
                              <tbody
                                style={{
                                  fontFamily: "ubuntu-medium,sans-serif",
                                }}
                              >
                                {filteredData.map((row, index) => (
                                  <tr key={index}>
                                    <td>{row.id}</td>
                                    <td>{row.customer_name}</td>
                                    <td>{row.customer_vpa}</td>
                                    <td>{row.customer_email}</td>
                                    <td>{row.customer_mobile}</td>
                                    <td>{formatTime(row?.createdAt)}</td>
                                    <td>{row.amount}</td>
                                    <td>{row.client_txn_id}</td>
                                    <td>{row.status}</td>
                                    <td>{row.orderId}</td>
                                    <td>{row.ip}</td>
                                    <td>{formatDateString(row?.createdAt)}</td>
                                    <td>{row.upi_txn_id}</td>
                                  </tr>
                                ))}
                              </tbody>
                              <tfoot></tfoot>
                            </table>
                          </div>
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
                      <div>1</div>
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
          <div className="overlay toggle-btn-mobile" />
          <a href="#" className="back-to-top">
            <i className="bx bxs-up-arrow-alt" />
          </a>
        </div>
      </Fade>
    </>
  );
};

export default Recharge;
