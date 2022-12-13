import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function ViewStudent() {

    const [items, setItems] = useState([]);

       useEffect(() => {
    getUser();
   
  }, [])


         function getUser(){
      fetch("api/students")
        .then(res => res.json())
        .then(
          (result) => {
           // setIsLoaded(true);
            setItems(result);
          },
         
         
        )
       
    }

    const deleteStudent = (e, id) => {
        e.preventDefault();
        
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axios.delete(`/api/delete-student/${id}`).then(res=>{
            if(res.data.status === 200)
            {
                swal("Deleted!",res.data.message,"success");
                thisClicked.closest("tr").remove();
            }
            else if(res.data.status === 404)
            {
                swal("Error",res.data.message,"error");
                thisClicked.innerText = "Delete";
            }
        });
    }

   

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                               
                            </div>
                            <div className="card-body">
                                
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Course</th>
                                            <th>Email Id</th>
                                            <th>Phone</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                                    
{
  items.map((data)=>

                     <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.course}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>
                        <Link to={`edit-student/${data.id}`} className="btn btn-success btn-sm">Edit</Link>
                    </td>
                    <td>
                        <button type="button" onClick={(e) => deleteStudent(e, data.id)} className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
    )}
        
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ViewStudent;