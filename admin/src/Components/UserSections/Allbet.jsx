import React, { useEffect, useRef, useState } from "react";
// import './UserDataSection.css'
import "../Sidebar/Sidebar.css";
import { Fade } from "react-reveal";
import { fetchData, formatDateString } from "../../Api/Clientfunctions";

const Allbet = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [betData, setBetData] = useState([]);
  const [totalPages, setTotalPage] = useState(1);
  useEffect(() => {
    async function getBetData() {
      try {
        const res = await fetchData(
          `/admin/allbetdata?page=${currentPage}&limit=10`
        );
        if (res.status) {
          setBetData(res.data);
          setTotalPage(Math.ceil(res.length / 10));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getBetData();
  }, [currentPage]);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const filteredData = betData.filter(
    (row) =>
      (row.withdrawTime &&
        row?.withdrawTime
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (row.phone &&
        row?.phone
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (row.withdrawAmount &&
        row?.withdrawAmount
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (row.id &&
        row?.id.toString().toLowerCase().includes(searchTerm.toLowerCase())) ||
      (row.multiplier &&
        row?.multiplier
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (row.betTime &&
        formatDateString(row.betTime)
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (row.betAmount &&
        row?.betAmount
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase()))
  );

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
          {/*page-wrapper*/}
          <div className="page-wrapper">
            {/*page-content-wrapper*/}
            <div className="page-content-wrapper">
              <div className="page-content">
                {/*breadcrumb*/}
                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                  <div className="breadcrumb-title pe-3">All Bet History</div>
                </div>
                {/*end breadcrumb*/}
                <div className="card">
                  <div className="cards-body">
                    <div
                      className="card-title"
                      style={{ justifyContent: "space-between" }}
                    >
                      <h4 className="mb-0">All Bet</h4>
                    </div>

                    {/*  */}
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
                    {/*  */}

                    <hr />
                    <div className="table-responsive">
                      <div className="card">
                        <div className="cards-body">
                          <div className="card-title">
                            <h4 className="mb-0">All Bet History</h4>
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
                                  <th> ID</th>
                                  <th>Phone no.</th>
                                  <th>Bet Amount</th>
                                  <th>Bet Time</th>

                                  <th> Withdraw Amount</th>
                                  <th>multiplier</th>
                                  <th>Withdraw Time</th>
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
                                    <td>{row.phone}</td>
                                    <td>{row.betAmount}</td>
                                    <td>{formatDateString(row.betTime)}</td>
                                    <td>{row.withdrawAmount}</td>
                                    <td>{row.multiplier}</td>
                                    <td>
                                      {formatDateString(row.withdrawTime)}
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
            {/*end page-content-wrapper*/}
          </div>
          {/*end page-wrapper*/}
          {/*start overlay*/}
          <div className="overlay toggle-btn-mobile" />
          {/*end overlay*/}
          {/*Start Back To Top Button*/}
          <a href="#" className="back-to-top">
            <i className="bx bxs-up-arrow-alt" />
          </a>
          {/*End Back To Top Button*/}
        </div>
      </Fade>
    </>
  );
};

export default Allbet;
