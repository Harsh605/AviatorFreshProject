import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import "./Refer.css";
import { postData, fetchData } from "../../Api/Clientfunctions";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useSWR from "swr";
const Refer = () => {
  const [referData, setReferData] = useState({});
  const { data } = useSWR("/admin/getreferdetails", fetchData);
  console.log(referData);
  useEffect(() => {
    if (data && data.data) {
      setReferData(data.data);
    }
  }, [data]);
  const [formData, setFormData] = useState({
    parentCommission: "",
    friendCommission: "",
    notReferCommission: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // If the input is a file input, update the state with the file
    if (type === "file") {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic for handling form submission
    console.log("Form data submitted:", formData);
    const res = await postData("/admin/setrefer", formData);
    if (res.status) {
      console.log(res.message);
      toast.success(res.message);
      Swal.fire("Wow..", res.message, "success");
    } else {
      toast.error("something went wrong!...");
      Swal.fire("Oops!..", "Something Went Wrong!..", "error");
    }
  };

  return (
    <Fade top distance="2%" duration={700}>
      <div style={{ background: "#F2EDF3" }} className="wrapper">
        {/*page-wrapper*/}
        <div className="page-wrapper">
          {/*page-content-wrapper*/}
          <div className="page-content-wrapper">
            <div className="page-content">
              <div className="Bank-detail">
                <div className="Bank-headings">
                  <i className="bx bxs-home"></i>
                  <h2> Admin Setup</h2>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="Bank-lable">
                    <label> Referrer Commission:</label>
                    <input
                      type="number"
                      id="parentCommission"
                      placeholder="(Person who shares account with referral id)"
                      name="parentCommission"
                      defaultValue={referData?.parentCommission}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="Bank-lable">
                    <label> Recipients Commission:</label>
                    <input
                      placeholder="(Person who creates account with referral id)"
                      type="number"
                      id="friendCommission"
                      name="friendCommission"
                      defaultValue={referData?.friendCommission}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="Bank-lable">
                    <label> User Bonus:</label>
                    <input
                      placeholder="(If user does not provide referral id)"
                      type="number"
                      id="notReferCommission"
                      name="notReferCommission"
                      defaultValue={referData?.notReferCommission}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="Bank-lable">
                    <label>Minimun Withdrawal Limit:</label>
                    <input
                      placeholder="(If user does not provide referral id)"
                      type="number"
                      id="mwl"
                      name="mwl"
                      defaultValue={referData?.mwl}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Refer;
