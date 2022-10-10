import { useEffect, useState } from "react";
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
                     <th>operation</th>
                   
                   
                </tr>
            </thead>
             <tbody class="align-middle">
            
{
  items.map((data)=>

<tr>
 <td>{data.id}</td>
  <td>{data.name}</td>
   <td>{data.title}</td>
   <td> <button  onClick={()=>deleteUser(data.id)}> Delete</button> </td>
</tr>
    )}
                
               
            </tbody>
            </table>
           
            </div>
    </div>
  );
}
export default Home;