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




const SingleUser = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()


    const data = [
        { name: 'Tiger Nixon', position: '	System Architect', office: '	Edinburgh', age: '61', selery: '	$320,800' },
        { name: 'Hermione Butler', position: 'Regional Director', office: '	London', age: '64', selery: '	$327,800' },
        { name: 'Hermione Jonshan', position: 'Regional Director', office: '	New York', age: '64', selery: '	$234,800' }
    ]

    const filteredData = data.filter((row) =>
        row.name.toLowerCase().includes(searchTerm.toLowerCase()) || row.position.toLowerCase().includes(searchTerm.toLowerCase())
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
                                    <div className="breadcrumb-title pe-3">Tables</div>
                                    <div className="ps-3">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb mb-0 p-0" style={{ alignItems: 'center', display: 'flex' }}>
                                                <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt" /></a>
                                                </li>
                                                <li><ChevronRightIcon />  {'Single User'}</li>
                                            </ol>
                                        </nav>
                                    </div>
                                    <div className="ms-auto">
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
                                    </div>
                                </div>
                                {/*end breadcrumb*/}
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title" style={{ justifyContent: 'space-between' }}  >
                                            <h4 className="mb-0">Single User</h4>
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
                                                <div className="card-body">
                                                    <div className="card-title">
                                                        <h4 className="mb-0">DataTable Import</h4>
                                                    </div>
                                                    <hr />
                                                    <div className="table-responsive">
                                                        <table ref={tableRef} id="myTable" className="table table-striped table-bordered" style={{ width: '100%' }}>
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
                                                                        <td>{row.age}</td>
                                                                        <td>2011/04/25</td>
                                                                        <td>{row.selery}</td>
                                                                        <td >  <abbr title='User'>  <PersonIcon style={{ color: 'hotpink' }} /></abbr> <abbr onClick={() => navigate('/GroupUser')} title='Group'> <GroupIcon style={{ color: 'hotpink' }} /></abbr> </td>
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

export default SingleUser
