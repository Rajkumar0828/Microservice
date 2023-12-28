import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [name, setname] = useState([""]);
    const [id, setid] = useState([""]);
    const handleSignupForm = async event => {
        event.preventDefault();
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
        let param = {
            name: name,
            id: id
        }
        let URL = "http://localhost:8001/Login/" + id;
        const response = await axios.get(URL, param, {
            headers: headers
        });

        if (response.data.id == id && response.data.name == name) {
            navigate('/teacherlist');
        }
        else {
            window.alert("Wrong credentials");
            navigate('/Login');
        }
    }


    return (
        <div>
            <h1 >Login page</h1>
            <form onSubmit={handleSignupForm}>
                <div className="form-group">
                    <label htmlFor="exampleInputId">Id</label>
                    <input type="text" className="form-control"
                        placeholder="Enter your Id" id="id" name="id"
                        required={true}
                        value={id}
                        onChange={(e) => setid(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputUserName">Name</label>
                    <input type="text" className="form-control"
                        placeholder="Enter your Username" id="name" name="name"
                        required={true}
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        </div>
    );
}
export default Login;

