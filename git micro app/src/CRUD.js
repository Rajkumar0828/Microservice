import React, {useState, useEffect, Fragment} from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from "axios";


const CRUD = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[ID, setId] = useState ('')
  const[FirstName, setFirstName] = useState ('')
  const[LastName, setLastName] = useState ('')
  const[PhoneNO, setphoneNo] = useState ('')
  const[EmailId, setEmail] = useState ('')



  const[EditID, setEditId] = useState ('')
  const[EditFirstName, setEditFirstName] = useState ('')
  const[EditLastName, setEditLastName] = useState ('')
  const[EditPhoneNO, setEditphoneNo] = useState ('')
  const[EditEmailId, setEditEmail] = useState ('')


  

      const empdata = [
        {
            Id: 1,
            FirstName: "rajkumar",
            LastName: 23,
            PhoneNo :434,
            EmailId :"raj@gmail"
        },

       
        
      ]



    const [data, setData] =useState([]);

    useEffect (()=>{
        setData(empdata);
        //  getData();
    },[])

    const getData = () => {
     axios.get('http://localhost:5063/ api/Customer')
     .then((result)=>{ 
      setData(result.data)
    })
     
     
     .catch((error)=>{
      console.log(error)
     })
    }
  
    const handleEdit =(id) => {
      //  alert(id);
      handleShow();
    }

    const handleDelete =(id) => {
        if(window.confirm("Are you sure to delete this employee") == true)
        {
           alert(id);
        }
      }

      const handleUpdate = () => {

      }


    return(
       <Fragment>

               <Container>
                <Row>
                <Col> 
                  <input  type="text" className="form-control" placeholder="Enter ID"  value={ID} onChange={(e) => setId(e.target.value)} />
                </Col>

                <Col> 
                 <input  type="text" className="form-control" placeholder="Enter FirstName" value={FirstName} onChange={(e) => setFirstName(e.target.value)}/>
                 </Col>

                 <Col> 
                 <input  type="text" className="form-control" placeholder="Enter LastName" value={LastName}onChange={(e) => setLastName(e.target.value)}/>
                 </Col>

                 <Col> 
                 <input  type="text" className="form-control" placeholder="Enter PhoneNO"value={PhoneNO}onChange={(e) => setphoneNo(e.target.value)}/>
                 </Col>

                 <Col> 
                 <input  type="text" className="form-control" placeholder="Enter EmailId"value={EmailId}onChange={(e) => setEmail(e.target.value)}/>
                 </Col>

                 <Col> 
                 <button  className="btn btn-primary">Submit</button>
                 </Col>


                </Row>
               </Container>

       <br></br>


       <Table striped bordered hover varient="dark">
      <thead>
        <tr>
          
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone No</th>
          <th>Email Id</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        {
            data && data.length > 0 ?
                  data.map ((item, index) => {
                    return (
                        <tr key={index}>
                       
                        <td>{item.Id}</td>
                        <td>{item.FirstName}</td>
                        <td>{item.LastName}</td>
                        <td>{item.PhoneNo}</td>
                        <td>{item.EmailId}</td>
                        <td colSpan={2}>
                             <button className="btn btn-primary" onClick={()=> handleEdit(item.id)}>Edit</button> |
                             <button className="btn btn-danger"onClick={()=> handleDelete(item.id)}>Delete</button>
                        </td>
                      </tr>
                    

                    )
                  })
                  :
                  'Loading...'
        }
        
      </tbody>
    </Table>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify / update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
       </Fragment>
    )
}

export default CRUD;