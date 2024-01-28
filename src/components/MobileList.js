import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const MobileList = () => {

    const [TeacherList, setTeacherList] = useState([]);
    useEffect(() => {
        const dataOperationInUseEffect = async () => {
            const headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }

            let URL = "http://localhost:5111/MobileList";

            const response = await axios.get(URL, {
                headers: headers
            })

            if (response != null && response != undefined && response.data.length > 0) {
                setTeacherList(response.data);
            }
        }
        dataOperationInUseEffect().catch(console.error)
    }, [])

    return (
        <>
            <div >
                <h1>Mobile List</h1>
            </div>
            <div >
                <a className="d-inline-flex p-2 align-items-center btn btn-primary justify-content-start" href="CreateTeacher">Add Mobiles</a>
            </div>

            <div className="d-flex align-items-center justify-content-center" style={{backgroundImage:`url('https://wallpaperaccess.com/full/8033213.jpg')`,backgroundSize:'cover',backgroundPosition:'center'}} >
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Mobile Id</th>
                            <th scope="col">Mobile Brand</th>
                            <th scope="col">Mobile Model</th>
                            <th scope="col">Mobile Price</th>
                            {/* <th scope="col">Location</th> */}
                            <th className="text-center">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            TeacherList?.map((item, idx) =>
                                <tr>
                                    <th scope="row">{item.mobile_Id}</th>
                                    <td>{item.mobile_Brand_Name}</td>
                                    <td>{item.mobile_Model_Name}</td>
                                    <td>{item.mobilePrice}</td>
                                    {/* <td>{item.location}</td> */}
                                    <td className="text-center"><Link className="btn btn-primary m-2" to={"/editteacher/" + item.mobile_Id}>Edit</Link>
                                        <Link className="btn btn-danger m-2" to={"/deleteteacher/" + item.mobile_Id}>Delete</Link></td>
                                </tr>
                            )}
                    </tbody>
                </table>
                
            </div>
            
        </>
    );
}
export default MobileList;

