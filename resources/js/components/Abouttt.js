import React from "react";

import axios from "axios";

class About extends React.Component {
    state = {
        title: '',
        name: '',
        
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    savePost = async (e) => {
        e.preventDefault();
        const res = await axios.post("/api/product", this.state);
        if(res.data.status === 200){
            this.props.history.push("/");
        }
    }

    render(){
        
        return(
            <div className="layout">

                <div className="actionDiv">
                    <div className="Formdiv">
                        <form onSubmit={this.savePost}>
                         <div className="form-group">
                                <label>Name:</label>
                                <input type="text" name="name" className="form-control highlight" 
                                value={this.state.name} onChange={this.handleInput}
                                placeholder="Enter the Title" required/>
                            </div>
                            <div className="form-group">
                                <label>Title:</label>
                                <input type="text" name="title" className="form-control highlight" 
                                value={this.state.title} onChange={this.handleInput}
                                placeholder="Enter the Title" required/>
                            </div>
                         
                           
                            <div className="form-group">
                                <button type="submit" className="primary">
                                    
                                    Add Post
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default About;