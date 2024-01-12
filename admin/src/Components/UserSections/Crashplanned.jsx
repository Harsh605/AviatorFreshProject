import React, { useState ,useRef } from 'react';
import '../Sidebar/Sidebar.css';
import "./Crashplanned.css"
import { Fade } from 'react-reveal'
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { useNavigate } from 'react-router-dom';
 

const Crashplanned = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [leftSearchTerm, setLeftSearchTerm] = useState('');
  const [rightSearchTerm, setRightSearchTerm] = useState('');
  const navigate = useNavigate()

  // const tableRef = useRef();

const handleEditClick = (row) => {
  // Handle the edit action for the specific row
  console.log(`Edit clicked for row: ${row.name}`);
  // Add your edit logic here
  // For example, you could open a modal for editing
};


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

  const [formData, setFormData] = useState({
    bankName: '',
    accountNo: '',
    accountHolderName: '',
    ifscCode: '',
    mobileNo: '',
    upiId: '',
    barcodeFile: null,
});

const handleChange = (e) => {
const { name, value, type, files } = e.target;

// If the input is a file input, update the state with the file
if (type === 'file') {
  setFormData({
    ...formData,
    [name]: files[0],
  });
} else {
  setFormData({
    ...formData,
    [name]: value,
  });
}
};

const handleSubmit = (e) => {
e.preventDefault();
// Add your logic for handling form submission
console.log('Form data submitted:', formData);
};

   

  return (
     <div>
      <Fade top distance='2%' duration={700}>


<div className="page-wrapper">
  {/*page-content-wrapper*/}
  <div className="page-content-wrapper">
    <div className="page-content">
      <div className="row">
      <div className='Bank-heading'>
        <i style={{background:"#009688"}} class='bx bxs-home'></i>
    <h2>Crashplanned</h2>
    </div>
      <div style={{marginTop:'20px'}} className="col-12 col-lg-3">
                <div className="card radius-15 bg-primary">
                  <div className="cards-body">
                    <div className="d-flex align-items-center">
                      <div className>
                        <h4 className="mb-0 font-weight-bold text-white">845</h4>
                        <p className="mb-0 text-white">Total Profit / Loss</p>
                      </div>
                      <div className="font-35 text-white ms-auto"><i class='bx bx-wallet' ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

      </div>
      <div className='Bank-heading'>
        <SportsEsportsIcon  sx={{background:"#009688",color:"white"}} />
    <h2>Live Game</h2>
    </div>
      <div style={{marginTop:"20px"}} className="row">
              <div className="col-12 col-lg-3">
                <div className="card radius-15">
                  <div className="cards-body">
                    <div className="d-flex align-items-center">
                      <div className>
                        <h4 className="mb-0 font-weight-bold">574</h4>
                        <p className="mb-0">Total Money</p>
                      </div>
                      <div className="widgets-icons bg-light-primary text-primary rounded-circle ms-auto">
                      <AttachMoneyIcon/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="card radius-15">
                  <div className="cards-body">
                    <div className="d-flex align-items-center">
                      <div className>
                        <h4 className="mb-0 font-weight-bold">865</h4>
                        <p className="mb-0"> Withdraw Money</p>
                      </div>
                      <div className="widgets-icons bg-light-success text-success rounded-circle ms-auto">
                      <i class='bx bx-money-withdraw'></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="card radius-15">
                  <div className="cards-body">
                    <div className="d-flex align-items-center">
                      <div className>
                        <h4 className="mb-0 font-weight-bold">354</h4>
                        <p className="mb-0">Total Users</p>
                      </div>
                      <div className="widgets-icons bg-light-danger text-danger rounded-circle ms-auto"><PeopleIcon/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="card radius-15">
                  <div className="cards-body">
                    <div className="d-flex align-items-center">
                      <div className>
                        <h4 className="mb-0 font-weight-bold">289</h4>
                        <p style={{fontSize:"14px"}} className="mb-0">Total Withdraw Users</p>
                      </div>
                      <div className="widgets-icons bg-light-info text-info rounded-circle ms-auto"><PeopleIcon/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="wrapper">
        {/*page-wrapper*/}
            {/*page-content-wrapper*/}
             
            <form className="row g-3 needs-validation"  >
  <div className="col-md-5">
    <label htmlFor="validationCustom01" className="form-label">Setting1</label>
    <input placeholder='Enter...' type="text" className="form-control" id="validationCustom01" required />
    <div className="valid-feedback">Looks good!</div>
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom02" className="form-label">Setting2</label>
    <input placeholder='Enter...' type="text" className="form-control" id="validationCustom02" required />
    <div className="valid-feedback">Looks good!</div>
  </div>

  <div className="col-md-5">
    <label htmlFor="validationCustom03" className="form-label">Setting3</label>
    <input placeholder='Enter...' type="text" className="form-control" id="validationCustom03" required />
    <div className="valid-feedback">Looks good!</div>
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom04" className="form-label">Setting4</label>
    <input placeholder='Enter...' type="text" className="form-control" id="validationCustom04" required />
    <div className="valid-feedback">Looks good!</div>
  </div>

  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit</button>
  </div>
</form>

</div>
   
    </div>
     
  </div>
</div>
</Fade>

 




 
     </div>
  );
};

export default Crashplanned;
