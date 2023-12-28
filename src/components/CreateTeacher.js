import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const CreateTeacher = () => {
    const navigate = useNavigate();
    const [mobile_Brand_Name, setBrandname] = useState([""]);
    const [mobile_Model_Name, setmodelname] = useState([""]);
    const [mobilePrice, setprice] = useState([""]);
    
    const handleSignupForm = async event => {
        event.preventDefault();
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
        let param = {
            mobile_Brand_Name: mobile_Brand_Name,
            mobile_Model_Name: mobile_Model_Name,
            mobilePrice: mobilePrice,
            
        }
        let URL = "http://localhost:5111/MobileCreate";
        const response = await axios.post(URL, param, {
            headers: headers
        });
        debugger
        if (response.data != undefined && response.data.length > 0) {
            navigate('/teacherlist');
        }
        else {
            navigate('/teacherlist');
        }
    }
    return (
        <>
            <div className="p-2">
                <h1>Add Mobiles</h1>
                <form onSubmit={handleSignupForm}>

                    <div className="form-group">
                        <label htmlFor="exampleInputUserName">Mobile Brand</label>
                        <input type="text" className="form-control"
                            placeholder="Enter Mobile Brand Name" id="mobile_Brand_Name" name="mobile_Brand_Name"
                            required={true}
                            value={mobile_Brand_Name}
                            onChange={(e) => setBrandname(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmailId">Mobile Model</label>
                        <input type="text" className="form-control"
                            placeholder="Enter Mobile Model" id="mobile_Model_Name" name="mobile_Model_Name"
                            required={true}
                            value={mobile_Model_Name}
                            onChange={(e) => setmodelname(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputQualifcation">Mobile Price</label>
                        <input type="text" className="form-control"
                            placeholder="Enter Mobile Price" id="mobilePrice" name="mobilePrice"
                            required={true}
                            value={mobilePrice}
                            onChange={(e) =>  setprice(e.target.value)}
                        />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="exampleInputLocation">Location</label>
                        <input type="text" className="form-control"
                            placeholder="Enter your Password" id="location" name="location"
                            required={true}
                            value={location}
                            onChange={(e) => setlocation(e.target.value)}
                        />
                    </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <a className="btn btn-success" href="UsersList">UserList</a>
                </form>
            </div>
        </>
    );
}
export default CreateTeacher;

