import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Create() {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const navigate=useNavigate();
    // const header={"Access-Control-Allow-Origin":"*"}
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log("clicked");
        axios.post("https://635576fa483f5d2df3b5065b.mockapi.io/crud-react",
        {name:name,email:email},
        // header
        ).then(()=>{
            navigate("/read");
        })   
    }
    
    return (
        <>
            
            <div className="container">
                <h1>Crerate</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail" className="form-label">Name:-</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={(e)=>{setname(e.target.value)}} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Email:-</label>
                        <input type="email" className="form-control" id="exampleInputPassword1" 
                        onChange={(e)=>{setemail(e.target.value)}}
                        />
                    </div>
                   
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </>

    );
}

export default Create;
