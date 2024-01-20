import React, { useEffect, useState } from "react";
import "../Sidebar/Sidebar.css";
import "./Crashplanned.css";
import { Fade } from "react-reveal";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleIcon from "@mui/icons-material/People";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { fetchData, postData } from "../../Api/Clientfunctions";
// import IOSSwitch from './Components/UserSections/Switchbutton';
// import CustomizedSwitches from "./Switchbutton";
import Swal from "sweetalert2";
import useSWR from "swr";
import { toast } from "react-toastify";
import { useSocket } from "../../context/SocketContext";
const Crashplanned = () => {
  const [ressoNumber, setRessoNumber] = useState("");
  const [isSwitchOn, setSwitchOn] = useState(false);
  const socket = useSocket();
  const toggleSwitch = () => {
    setSwitchOn(!isSwitchOn);
    console.log("Switch is " + (isSwitchOn ? "OFF" : "ON"));
  };
  const [lowerRange, setLowerRange] = useState("");
  const [singleMax, setSingleMax] = useState("");
  const [crashed, setCrashed] = useState();
  function socketHandler() {
    const time = Date.now();
    console.log(time);
    if (socket) {
      socket.emit("crashedTime", time);
    }
  }

  const { data, error } = useSWR("/admin/getcrashed", fetchData);
  console.log(crashed);
  useEffect(() => {
    if (data && data.data) {
      setCrashed(data.data);
    }
  }, [data]);
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get the values of lower and upper range inputs
    const nl = parseFloat(document.getElementById("validationCustom01").value);
    const nh = parseFloat(document.getElementById("validationCustom02").value);

    // Check if Lower Range is less than Upper Range and both are within the range of 1 to 10
    if (!isNaN(nl) && !isNaN(nh) && nl < nh && nl >= 1 && nh <= 10) {
       toast.success("Submission successful!");
       console.log("lower Range:",nl);
       console.log("Upper Range:",nh);
      // Your logic for further processing or actions goes here
    } else {
      console.error(
        " Please ensure Lower Range is less than Upper Range and both are within the range of 1 to 10."
      );
       toast.error(
        " Please ensure Lower Range is less than Upper Range and both are within the range of 1 to 10."
      );
    }
    if (nl >= 1 && nl <= 10 && nh >= 1 && nh <= 10) {
      const res = await postData("/admin/crashed", { nl, nh });
      Swal.fire("wow!..", res.message, "success");
    }
  };

  const handleSubmits = async (event) => {
    event.preventDefault();
    // Prevents the default form submission behavior

    // Get the values of lower and upper range inputs
    const sl = document.getElementById("validationCustom03").value;
    const sh = document.getElementById("validationCustom04").value;
    const sp = document.getElementById("validationCustom05").value;
    const sm = document.getElementById("validationCustom06").value;

    // Convert values to numbers
    const lowerRangeNumber = parseFloat(sl);
    const upperRangeNumber = parseFloat(sh);
    const probabilityNumber = parseFloat(sp);
    const singleMaxNumber = parseFloat(sm);

    // Check if all values are valid numbers
    if (
      !isNaN(lowerRangeNumber) &&
      !isNaN(upperRangeNumber) &&
      !isNaN(probabilityNumber) &&
      !isNaN(singleMaxNumber)
    ) {
      if (!isNaN(sl) && !isNaN(sh) && sl < sh && sl >= 1 && sh <= 10) {
         toast.success("Submission successful!");
        // Your logic for further processing or actions goes here
      } else {
        console.error(
          " Please ensure Lower Range is less than Upper Range and both are within the range of 1 to 10."
        );
        toast.error(
          "Please ensure Lower Range is less than Upper Range and both are within the range of 1 to 10."
        );
      }

      if (
        singleMaxNumber >= lowerRangeNumber &&
        singleMaxNumber <= upperRangeNumber
      ) {
        // Generate and print the table with steps of 10
        for (let i = lowerRangeNumber; i <= upperRangeNumber; i += 10) {
          console.log(i * (probabilityNumber / 100));
        }
      } else {
        console.error(
          "Single Max should be between Lower Range and Upper Range. Submission aborted."
        );
        toast.error(
          " Single Max should be between Lower Range and Upper Range."
        );
      }
    } else {
      console.error(
        " Please enter valid numbers for all fields."
      );
      toast.error(" Please enter valid numbers for all fields.");
    }
    const probabilityNumbers = parseFloat(sp);

    if (
      !isNaN(probabilityNumbers) &&
      probabilityNumbers % 10 === 0 &&
      probabilityNumbers !== 0 &&
      probabilityNumbers <= 100
    ) {
      // Probability is a multiple of 10, proceed with submission
      console.log("Submission successful!");
    } else {
      // Show an alert if the condition is not met
      toast.error(
        " Probability should be a multiple of 10 and between 10 to 100 ."
      );
    }
    if (sl >= 1 && sl <= 10 && sh >= 1 && sh <= 10 && sm <= sh && sm >= sl) {
      const res = await postData("/admin/crashed", { sl, sm, sh, sp });
      Swal.fire("wow!..", res.message, "success");
    }
  };

  const handaleSubmit = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get the values of probability and check if it's valid
    const RessoNumbers = parseFloat(ressoNumber);

    if (
      !isNaN(RessoNumbers) &&
      RessoNumbers % 10 === 0 &&
      RessoNumbers !== 0 &&
      RessoNumbers <= 100
    ) {
      // Continue with the rest of the logic
      // console.log("Valid Probability:", RessoNumbers);
    } else {
      // Show an alert if the probability condition is not met
      toast.error(
        " Margin Ratio should be a multiple of 10 and between 10 to 100."
      );
      return; // Exit the function if the condition is not met
    }

    // Get the values of lower and upper range inputs
    const ml = parseFloat(document.getElementById("validationCustom07").value);
    const mh = parseFloat(document.getElementById("validationCustom08").value);

    // Check if Lower Range is less than Upper Range and both are within the range of 1 to 10
    if (!isNaN(ml) && !isNaN(mh) && ml < mh && ml >= 1 && mh <= 10) {
      // Your logic for further processing or actions goes here
    } else {
      console.error(
        "  Please ensure Lower Range is less than Upper Range and both are within the range of 1 to 10."
      );
       toast.error(
        "  Please ensure Lower Range is less than Upper Range and both are within the range of 1 to 10."
      );
      return; // Exit the function if the condition is not met
    }

    // Get the value of the margin ratio
    const mr = parseFloat(document.getElementById("validationCustom09").value);

    // console.log("Submit clicked. RessoNumber:", RessoNumbers);


    const da = parseFloat(document.getElementById("validationCustom10").value);


    // Check if the value is greater than 100
    if (!isNaN(da) && da >= 100) {
      toast.error("  Margin Amount should not be greater than 100.");
      return; // Stop further processing if the condition is not met
    }
    

    if (isSwitchOn) {
      const ressoNumbers = parseFloat(ressoNumber);
  
      // Check if ressoNumber is a valid number before logging
      if (!isNaN(ressoNumbers)) {
        // console.log("Resso Number:", ressoNumbers);
      } 
      console.log("Margin Ratio:", mr);
    }
    console.log("Lower Range:", ml);
    console.log("Upper Range:", mh);
    console.log("Margin Amount Percentage:", da);


    const res = await postData("/admin/crashed", { ml, mr, da, mh });
    console.log(res);
    if (res.status) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div>
      <Fade top distance="2%" duration={700}>
        <div  className="page-wrapper">
          <div className="page-content-wrapper">
            {/* <button className="custom-btn btn-4">
              <span>Read More</span>
            </button> */}
            <div className="page-content">
              <div className="Bank-heading">
                <SportsEsportsIcon
                  sx={{ background: "#009688", color: "white" }}
                />
                <h2>Live Game</h2>
              </div>
              <div style={{ marginTop: "20px" }} className="row">
                <div className="col-12 col-lg-3">
                  <div className="card radius-15">
                    <div className="cards-body">
                      <div className="d-flex align-items-center">
                        <div className>
                          <h4 className="mb-0 font-weight-bold">574</h4>
                          <p className="mb-0">Total Money</p>
                        </div>
                        <div className="widgets-icons bg-light-primary text-primary rounded-circle ms-auto">
                          <AttachMoneyIcon />
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
                          <i className="bx bx-money-withdraw"></i>
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
                        <div className="widgets-icons bg-light-danger text-danger rounded-circle ms-auto">
                          <PeopleIcon />
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
                          <p style={{ fontSize: "14px" }} className="mb-0">
                            Total Withdraw Users
                          </p>
                        </div>
                        <div className="widgets-icons bg-light-info text-info rounded-circle ms-auto">
                          <PeopleIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="wrapper">
                <form
                  className="row g-3 needs-validation"
                  onSubmit={handleSubmit}
                >
                  <p style={{ fontSize: "20px", fontFamily: "cursive" }}>
                    1. If No User is Playing
                  </p>

                  <div className="col-md-3">
                    <label htmlFor="validationCustom01" className="form-label">
                      Lower Range
                    </label>
                    <input
                      placeholder="Enter..."
                      type="text"
                      className="form-control"
                      id="validationCustom01"
                      required
                      min="1"
                      max="10"
                      pattern="[1-9]|10"
                      onInvalid={(e) => toast.error('Please enter a number between 1 and 10.')}
                      // onInput={(e) => e.target.setCustomValidity('')}
                      defaultValue={crashed?.nl}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="validationCustom02" className="form-label">
                      Upper Range
                    </label>
                    <input
                      placeholder="Enter..."
                      type="text"
                      className="form-control"
                      id="validationCustom02"
                      required
                      min="1"
                      max="10"
                      pattern="[1-9]|10"
                      onInvalid={(e) => toast.error('Please enter a number between 1 and 10.')}
                      // onInput={(e) => e.target.setCustomValidity('')}
                      defaultValue={crashed?.nh}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div
                    className="col-md-2 text-center crashnow-btn"
                    onClick={socketHandler}
                  >
                    <div class="custom-btn btn-4 text-center  ">
                    Crash Now
                    </div>
                  </div>
            
                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </form>

                <form
                  style={{ marginTop: "10px" }}
                  className="row g-3 needs-validation"
                  onSubmit={handleSubmits}
                >
                  <p style={{ fontSize: "20px", fontFamily: "cursive" }}>
                    2. If Single User is Playing
                  </p>

                  <div className="col-md-3">
                    <label htmlFor="validationCustom03" className="form-label">
                      Lower Range
                    </label>
                    <input
                      placeholder="Enter..."
                      type="text"
                      className="form-control"
                      id="validationCustom03"
                      required
                      min="1"
                      max="10"
                      pattern="[1-9]|10"
                      onInvalid={(e) => toast.error('Please enter a number between 1 and 10.')}
                      // onInput={(e) => e.target.setCustomValidity('')}
                      onChange={(e) => setLowerRange(e.target.value)}
                      defaultValue={crashed?.sl}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="validationCustom04" className="form-label">
                      Upper Range
                    </label>
                    <input
                      placeholder="Enter..."
                      type="text"
                      className="form-control"
                      id="validationCustom04"
                      required
                      min="1"
                      max="10"
                      pattern="[1-9]|10"
                      onInvalid={(e) => toast.error('Please enter a number between 1 and 10.')}
                      // onInput={(e) => e.target.setCustomValidity('')}
                      defaultValue={crashed?.sh}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="validationCustom05" className="form-label">
                      Probability
                    </label>
                    <input
                      placeholder="Enter..."
                      type="text"
                      className="form-control"
                      id="validationCustom05"
                      required
                      min="10"
                      max="100"
                      pattern="^(10|20|30|40|50|60|70|80|90|100)$"
                      onInvalid={(e) => toast.error('Please enter a number should be multiple of 10 and between 10 and 100.')}
                      // onInput={(e) => e.target.setCustomValidity('')}
                      // onChange={(e) => setProbability(e.target.value)}
                      defaultValue={crashed?.sp}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="validationCustom06" className="form-label">
                      Single Max
                    </label>
                    <input
                      placeholder="Enter..."
                      type="text"
                      className="form-control"
                      id="validationCustom06"
                      required
                      min="1"
                      max="10"
                      // pattern="^[1-9]|10$"
                      onInput={(e) => {
                        const singleMax = parseInt(e.target.value, 10);
                        const lowerRange = parseInt(crashed?.sl, 10);
                        const upperRange = parseInt(crashed?.sh, 10);
                        
                        if (isNaN(singleMax) || singleMax < lowerRange || singleMax > upperRange) {
                          e.target.setCustomValidity('Enter a number between Lower Range and Upper Range.');
                        } else {
                          e.target.setCustomValidity('');
                        }
                      }}
                      onChange={(e) => setSingleMax(e.target.value)}
                      defaultValue={crashed?.sm}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </form>

                <form
                  style={{ marginTop: "10px" }}
                  className="row g-3 needs-validation"
                  onSubmit={handaleSubmit}
                >
                  <p style={{ fontSize: "20px", fontFamily: "cursive" }}>
                    3. If Multi User is Playing
                  </p>

                  <div className="col-md-3">
                    <label htmlFor="validationCustom07" className="form-label">
                      Lower Range
                    </label>
                    <input
                      placeholder="Enter..."
                      type="text"
                      className="form-control"
                      id="validationCustom07"
                      required
                      min="1"
                      max="10"
                      pattern="[1-9]|10"
                      onInvalid={(e) => toast.error('Please enter a number between 1 and 10.')}
                      // onInput={(e) => e.target.setCustomValidity('')}
                      defaultValue={crashed?.ml}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="validationCustom08" className="form-label">
                      Upper Range
                    </label>
                    <input
                      placeholder="Enter..."
                      type="text"
                      className="form-control"
                      id="validationCustom08"
                      required
                      min="1"
                      max="10"
                      pattern="[1-9]|10"
                      onInvalid={(e) => toast.error('Please enter a number between 1 and 10.')}
                      // onInput={(e) => e.target.setCustomValidity('')}
                      defaultValue={crashed?.mh}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="validationCustom09" className="form-label">
                      Margin Ratio
                    </label>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        flexDirection: "column",
                        position: "relative",
                      }}
                    >
                      <input
                        placeholder="Enter..."
                        type="text"
                        className="form-control"
                        id="validationCustom09"
                        min="10"
                        max="100"
                        value={ressoNumber}
                        pattern="^(10|20|30|40|50|60|70|80|90|100)$"
                        onInvalid={(e) => e.target.setCustomValidity('Please enter a number should be a multiple of 10 and between 10 to 100 .')}
                        onInput={(e) => e.target.setCustomValidity('')} 
                        onChange={(e) => setRessoNumber(e.target.value)}
                        disabled={!isSwitchOn}
                        defaultValue={crashed?.mr}
                      />

                      {/* <CustomizedSwitches  onChange={handleSwitchChange}/>
                       */}

                      <div className="form-check form-switch lg-switch">
                        <input
                          onClick={toggleSwitch}
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="sound"
                        />
                        <label className="form-check-label" htmlFor="sound" />
                      </div>
                    </div>

                    <div className="valid-feedback">Looks good!</div>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="validationCustom03" className="form-label">
                      Margin Amount Percentage
                    </label>

                    <input
                      placeholder="Enter..."
                      type="text"
                      className="form-control"
                      id="validationCustom10"
                      required
                      min="1"
                      max="70"
                      pattern="^(70|[1-9][0-9]?)$"
                      onInvalid={(e) => toast.error('Please enter a number between 1 and 70.')}
                      // onInput={(e) => e.target.setCustomValidity('')}
                      defaultValue={crashed?.da}
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
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
