import { useEffect, useState } from "react";
import axios from 'axios';
const About = () =>{
const [name , setName]=useState("");
const [title , setTitle]=useState("");
  



   function Submitdata()
   {

let data={name ,title}
console.log("result" , name);
fetch('/api/product' ,{
            method : 'POST',
            headers:{
                'Accepts':'application/json',
                'Content-type':'application/json',
    },
    body:json.stringif(data)
}).then((result)=>{
    console.log("result" , result);

})
   }
  return (
    <div className=' row col-md-6 col-md-offset-3'>
                    <form  onSubmit={Submitdata}>
                  
                        <div class="control-group">
                            <input type="text" class="form-control" onChange={(e)=>{setName(e.target.value)}} value={name} name="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name"/>
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                            <input type="text" class="form-control" onChange={(e)=>{setTitle(e.target.value)}} value={title} name="title" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email"/>
                            <p class="help-block text-danger"></p>
                        </div>
                       
                        <div>
                            <button class="btn btn-primary py-2 px-4"  type="submit">Send
                                Message</button>
                        </div>
                    </form>
                </div>
   
  );
}
export default About;