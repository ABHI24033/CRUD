import axios from "axios";
import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
function Update(){
            // --------------Update---------------
    
    const navigate=useNavigate();
// ========================get data from local storage=============================
    const [name,getname]=useState(0);
    const [email,getemail]=useState(0);
    const [id,getId]=useState();
    useEffect(()=>{
          const nam= localStorage.getItem("name")
          const mail= localStorage.getItem("email");
          getemail(mail);
          getname(nam);
          getId(localStorage.getItem("id"));
    },[])
    // =====================================================================================
    const updateData=(e)=>{
        e.preventDefault();
        axios.put(`https://635576fa483f5d2df3b5065b.mockapi.io/crud-react/${id}`,
        {name:name,email:email})
        .then(()=>{
            navigate("/read");
        })
    }
    return <>
        <div className="container">
                <h1>UPDATE:-</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail" className="form-label">Name:-</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={name}
                        onChange={(e)=>{getname(e.target.value)}} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Email:-</label>
                        <input type="email" className="form-control" id="exampleInputPassword1" 
                        value={email}
                        onChange={(e)=>{getemail(e.target.value)}}
                        />
                    </div>
                   
                    <button type="submit" className="btn btn-primary" onClick={updateData}>Submit</button>
                </form>
            </div>
    </>

}
    
export default Update;