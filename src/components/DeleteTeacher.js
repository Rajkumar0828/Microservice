import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const DeleteTeacher = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [mobile_Id, setMobileId] = useState(params.id ?? 0);

    useEffect(() => {
        const dataOperationInUseEffect = async () => {
            window.alert("Mobile is going to be deleted " +  mobile_Id);
            const headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }

            let URL = "http://localhost:5111/MobileDelete/" + mobile_Id ;

            const response = await axios.delete(URL, {
                headers: headers
            })

            if (response != null && response != undefined && response.data.length != undefined) {

                navigate('/teacherlist')
            }
            else {
                navigate('/teacherlist')
            }
        }
        dataOperationInUseEffect().catch(console.error)
    }, [])

    return (
        <>

        </>
    );
}
export default DeleteTeacher;

