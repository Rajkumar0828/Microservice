import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const EditTeacher = () => {
    const navigate = useNavigate();
    const [mobile_Brand_Name, setBrandname] = useState([""]);
    const [mobile_Model_Name, setmodelname] = useState([""]);
    const [mobilePrice, setprice] = useState([""]);
    // const [location, setlocation] = useState([""]);
    const params = useParams();
    const [mobile_Id, setMobileId] = useState(params.id ?? 0);
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
            // location: location,
            id: mobile_Id
        }
        let URL = "http://localhost:5111/MobileUpdate";
        const response = await axios.put(URL, param, {
            headers: headers
        });

        if (response.data != undefined && response.data.length > 0) {
            navigate('/teacherlist');
        }
        else {
            navigate('/teacherlist');
        }
    }

    useEffect(() => {
        const dataOperationInUseEffect = async () => {
            const headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }

            let URL = "http://localhost:5111/MobileList/" + mobile_Id;

            const response = await axios.get(URL, {
                headers: headers
            })

            if (response != null && response != undefined && response.data.length != undefined) {

                setBrandname(response.data.mobile_Brand_Name);
                setmodelname(response.data.mobile_Model_Name);
                setprice(response.data.mobilePrice);
                // setlocation(response.data.location);
            }
            else {
                setBrandname(response.data.mobile_Brand_Name);
                setmodelname(response.data.mobile_Model_Name);
                setprice(response.data.mobilePrice);
                // setlocation(response.data.location);
            }
        }
        dataOperationInUseEffect().catch(console.error)
    }, [])

    return (
        <>
            <div className="p-2">
                <h1>Update Mobile</h1>
                <form onSubmit={handleSignupForm}>

                    <div className="form-group">
                        <label htmlFor="exampleInputId">Mobile ID</label>
                        <input type="text" className="form-control"
                            placeholder="Your Mobile  Id" id="mobile_Id" name="mobile_Id"
                            disabled
                            required={true}
                            value={mobile_Id}
                            onChange={(e) => setMobileId(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputUserName">Mobile Brand </label>
                        <input type="text" className="form-control"
                            placeholder="Enter Mobile Brand Name" id="mobile_Brand_Name" name="mobile_Brand_Name"
                            required={true}
                            value={mobile_Brand_Name}
                            onChange={(e) => setBrandname(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail">Mobile Model </label>
                        <input type="email" className="form-control"
                            placeholder="Enter Mobile Model" id="mobile_Model_Name" name="mobile_Model_Name"
                            required={true}
                            value={mobile_Model_Name}
                            onChange={(e) =>setmodelname(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputQualification">Mobile Price</label>
                        <input type="text" className="form-control"
                            placeholder="Enter Mobile Price" id="mobilePrice" name="mobilePrice"
                            required={true}
                            value={mobilePrice}
                            onChange={(e) => setprice(e.target.value)}
                        />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="exampleInputQualification">Location</label>
                        <input type="text" className="form-control"
                            placeholder="Enter your location" id="location" name="location"
                            required={true}
                            value={location}
                            onChange={(e) => setlocation(e.target.value)}
                        />
                    </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <a className="btn btn-success" href="TeacherList">TeacherList</a>
                </form>
            </div>
        </>
    );
}
export default EditTeacher;

