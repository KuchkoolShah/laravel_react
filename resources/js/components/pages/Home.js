import React from 'react'
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

const Home = () =>{
      const [items, setItems] = useState([]);

       useEffect(() => {
    getUser();
   
  }, [])


         function getUser(){
      fetch("api/product")
        .then(res => res.json())
        .then(
          (result) => {
           // setIsLoaded(true);
            setItems(result);
          },
         
         
        )
       
    }

    function  deleteUser(id  ){
        fetch(`/api/product/${id}`,{
            method:'DELETE'
        }).then((result) => {
           result.json().then((resp)=>{
                getUser()
           })
          })
    }
    // console.log(items)
  return (
   
     <div class="row  mt-1">
    <div>
        <table class="table table-light table-borderless table-hover  text-center mb-0">
            <thead class="thead-dark">
                <tr>
                    <th>id</th>
                    <th>Name</th>
                   
                    <th>Tiltle</th>
                     <th  colspan="2">operation</th>
                   
                   
                </tr>
            </thead>
             <tbody class="align-middle">
            
{
  items.map((data)=>

<tr>
 <td>{data.id}</td>
  <td>{data.name}</td>
   <td>{data.title}</td>
   <td>
                        <Link to={`edit/${data.id}`} className="btn btn-success btn-sm">Edit</Link>
                    </td>
   <td> <button  onClick={()=>deleteUser(data.id)}  className="btn btn-success btn-sm"> Delete</button> </td>
</tr>
    )}
                
               
            </tbody>
            </table>
           
            </div>
    </div>
  );
}
export default Home;