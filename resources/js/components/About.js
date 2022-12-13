import React, {useState} from 'react';
import Swal from 'sweetalert2'
import {useHistory} from 'react-router-dom';

 
function About() {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('')
    const [isSaving, setIsSaving] = useState(false)
      const history = useHistory();
    

 
    const handleSave = () => {
        setIsSaving(true);
        axios.post('/api/product', {
            name: name,
            title: title
          })
          .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Admin saved successfully!',
                showConfirmButton: false,
                timer: 1500
             

            })
            setIsSaving(false);
            setName('')
            setTitle('')
             history.push('/');
          })
          .catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'An Error Occured!',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false)
          });
    }
 
    return (
       
            <div className="container">
                <h2 className="text-center mt-5 mb-3">Create New Project</h2>
                <div className="card">
                    <div className="card-header">
                        
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input 
                                    onChange={(event)=>{setName(event.target.value)}}
                                    value={name}
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"/>
                            </div>
                           
                                <div className="form-group">
                                <label htmlFor="name">Title</label>
                                <input 
                                    onChange={(event)=>{setTitle(event.target.value)}}
                                    value={title}
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"/>
                            </div>
                           

                            <button 
                                disabled={isSaving}
                                onClick={handleSave} 
                                type="button"
                                className="btn btn-outline-primary mt-3">
                                Save Project
                            </button>
                        </form>
                    </div>
                </div>
            </div>
       
    );
}
 
export default About;