import React, { useRef, useState } from 'react';
// import './UserDataSection.css'
import '../Sidebar/Sidebar.css'
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-reveal';



const Recharge = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()

    // const tableRef = useRef();

  const handleEditClick = (row) => {
    // Handle the edit action for the specific row
    console.log(`Edit clicked for row: ${row.name}`);
    // Add your edit logic here
    // For example, you could open a modal for editing
  };


    const data = [
        {sr:'1',userid:'46736', name: 'Tiger Nixon', phone: '82784726376', email: 'sjhjh@gmail.com',status:'approved',   Amount: '	$320.00' , transaction:'85357784'  },
        {sr:'2',userid:'46736', name: 'Hermione Butler',phone: '83784726376', email: 'dssdhyc@gmail.com',status:'pending',  Amount: '	$327.00', transaction:'85357784' },
        { sr:'3',userid:'46736',name: 'Hermione Jonshan',phone: '82784726376',email: 'sjhjh@gmail.com',status:'rejected',   Amount: '	$234.00' , transaction:'85357784' },
        {sr:'4',userid:'46736', name: 'Hermione Butler',phone: '83784726376', email: 'dssdhyc@gmail.com',status:'pending',  Amount: '	$327.00',transaction:'85357784'   },
        { sr:'5',userid:'46736', name: 'Hermione Jonshan',phone: '82784726376',email: 'sjhjh@gmail.com',status:'rejected',   Amount: '	$234.00' , transaction:'85357784'}
    ]

    const filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase()) || row.phone.toLowerCase().includes(searchTerm.toLowerCase()) || row.Amount.toLowerCase().includes(searchTerm.toLowerCase())
    || row.transaction.toLowerCase().includes(searchTerm.toLowerCase())|| row.status.toLowerCase().includes(searchTerm.toLowerCase())|| row.sr.toLowerCase().includes(searchTerm.toLowerCase())
    || row.userid.toLowerCase().includes(searchTerm.toLowerCase())|| row.email.toLowerCase().includes(searchTerm.toLowerCase()) 
    );


    const handlePrint = () => {
        window.print();
    };


    const tableRef = useRef(null);

    const copyTable = () => {
        const range = document.createRange();
        range.selectNode(tableRef.current);
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        //   alert('Table copied to clipboard!');
    };


    const downloadTableAsCSV = () => {
        const table = document.getElementById('myTable'); // Assuming your table has an id 'myTable'

        if (!table) {
            console.error('Table not found');
            return;
        }

        const rows = table.querySelectorAll('tr');
        const csvData = [];

        rows.forEach((row) => {
            const rowData = [];
            const cells = row.querySelectorAll('td, th');

            cells.forEach((cell) => {
                rowData.push(cell.innerText);
            });

            csvData.push(rowData.join(','));
        });

        const csvContent = csvData.join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv' });

        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'table_data.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    

    return (
        <>
            <Fade top distance='2%' duration={700}>


                <div className="wrapper">
                    {/*page-wrapper*/}
                    <div className="page-wrapper">
                        {/*page-content-wrapper*/}
                        <div className="page-content-wrapper">
                            <div className="page-content">
                                {/*breadcrumb*/}
                                <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                                    <div className="breadcrumb-title pe-3">Recharge History</div>
                                    {/* <div className="ps-3">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb mb-0 p-0" style={{ alignItems: 'center', display: 'flex' }}>
                                                <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt" /></a>
                                                </li>
                                                <li><ChevronRightIcon />  {'Data Table'}</li>
                                            </ol>
                                        </nav>
                                    </div> */}
                                    {/* <div className="ms-auto">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-primary">Settings</button>
                                            <button type="button" className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span className="visually-hidden">Toggle Dropdown</span>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end"> <a className="dropdown-item" href="javascript:;">Action</a>
                                                <a className="dropdown-item" href="javascript:;">Another action</a>
                                                <a className="dropdown-item" href="javascript:;">Something else here</a>
                                                <div className="dropdown-divider" /> <a className="dropdown-item" href="javascript:;">Separated link</a>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                {/*end breadcrumb*/}
                                <div className="card">
                                    <div className="cards-body">
                                        <div className="card-title" style={{ justifyContent: 'space-between' }}  >
                                            <h4 className="mb-0">All Recharge</h4>
                                        </div>

                                        {/*  */}
                                        <div className='search-and-button d-flex mt-4' style={{ justifyContent: 'space-between' }}>
                                            <div className='buttons'>
                                                <button onClick={copyTable}>Copy</button>
                                                <button onClick={downloadTableAsCSV}>CSV</button>
                                                <button onClick={downloadTableAsCSV}>Excel</button>
                                                <button>PDF</button>
                                                <button onClick={handlePrint}>Print</button>
                                                {/* <select name="visiblity" id=""> visiblity
                                                <option value="">Name</option>
                                                <option value="">Position</option>
                                                <option value="">id</option>
                                            </select> */}
                                            </div>
                                            <div>
                                                Search:-
                                                <input type="text" value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)} />
                                            </div>
                                        </div>
                                        {/*  */}


                                        <hr />
                                        <div className="table-responsive">


                                            <div className="card">
                                                <div className="cards-body">
                                                    <div className="card-title">
                                                        <h4 className="mb-0">Recharge History</h4>
                                                    </div>
                                                    <hr />
                                                    <div className="table-responsive">
                                                        <table ref={tableRef} id="myTable" className="table table-striped table-bordered" style={{ width: '100%' }}>
                                                            <thead>
                                                                <tr style={{fontFamily: "ubuntu-medium,sans-serif"}}>
                                                                    <th>Sr. No.</th>
                                                                    <th>User ID</th>
                                                                    <th>Name</th>
                                                                    <th>Phone no.</th>
                                                                    <th>Email</th>
                                                                    <th>Status</th>
                                                                    <th>Created</th>
                                                                    <th>Amount</th>
                                                                    <th>Transaction No.</th>
                                                                    <th>Action</th>

                                                                </tr>
                                                            </thead>
                                                            <tbody style={{fontFamily: "ubuntu-medium,sans-serif"}}>
                                                                {filteredData.map((row, index) => (
                                                                    <tr key={index}>
                                                                        <td>{row.sr}</td>
                                                                        <td>{row.userid}</td>
                                                                        <td>{row.name}</td>
                                                                        <td>{row.phone}</td>
                                                                        <td>{row.email}</td>
                                                                        <td>{row.status}</td>
                                                                        <td>2011/04/25</td>
                                                                        <td>{row.Amount}</td>
                                                                        <td>{row.transaction}</td>
                                                                       

                                                                        <td>
                                                                            <abbr title='Edit' onClick={() => handleEditClick(row)}>
                                                                                <EditNoteIcon style={{ color: 'blue', cursor: 'pointer'  }} />
                                                                            </abbr>
                                                                            <abbr title='Rejected'>
                                                                            <i  style={{color:"red",paddingLeft:"5px",fontSize:'20px' }}  class='bx bx-x'></i>
                                                                            </abbr>
                                                                            <abbr title='Approved'>
                                                                            <i style={{color:"green",paddingLeft:"5px",fontSize:'20px' }} class='bx bx-check'></i>
                                                                            </abbr>
                                                                             
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                            <tfoot>
                                                               
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>


                                            {/* <table ref={tableRef} id="myTable" className="table table-striped table-bordered" style={{ width: '100%' }}>
                                            <thead ref={tableRef}>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Position</th>
                                                    <th>Office</th>
                                                    <th>Age</th>
                                                    <th>Start date</th>
                                                    <th>Salary</th>
                                                    <th>Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredData.map((row) => (
                                                    <tr>
                                                        <td>{row.name}</td>
                                                        <td>{row.position}</td>
                                                        <td>{row.office}</td>
                                                        <td>61</td>
                                                        <td>2011/04/25</td>
                                                        <td>$320,800</td>
                                                        <td > <abbr title='Edit'><     EditNoteIcon style={{ color: 'blue' }} /> </abbr> <abbr title='Delete'><DeleteForeverIcon style={{ color: 'red' }} /></abbr>  <abbr title='User'> <PersonIcon style={{ color: 'hotpink' }} /></abbr> <abbr title='Group'> <GroupIcon style={{ color: 'hotpink' }} /></abbr> </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Position</th>
                                                    <th>Office</th>
                                                    <th>Age</th>
                                                    <th>Start date</th>
                                                    <th>Salary</th>
                                                    <th>Action</th>
                                                </tr>
                                            </tfoot>
                                        </table> */}
                                        </div>
                                <div className="paginations">
        <button ><i class='bx bx-chevron-left'></i>
          Previous
        </button>
        <div>1</div>
        <button>
          Next
          <i class='bx bx-chevron-right'></i>
        </button>
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
                    {/*Start Back To Top Button*/}<a href="javaScript:;" className="back-to-top"><i className="bx bxs-up-arrow-alt" /></a>
                    {/*End Back To Top Button*/}
                </div>

            </Fade>

        </>
    )
}

export default  Recharge;
