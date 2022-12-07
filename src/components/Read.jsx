import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
function Read() {
    const [Data, setData] = useState([]);

    function readData() {
        axios.get("https://635576fa483f5d2df3b5065b.mockapi.io/crud-react")
            .then((res) => {
                setData(res.data);
            });
    }
    function Delete(id){
        axios.delete(`https://635576fa483f5d2df3b5065b.mockapi.io/crud-react/${id}`)
        .then(()=>{
            readData();
        })
    }
    useEffect(() => {
        readData();
    }, []);
    // readData();

    const setToLocalStorage=(id,name,email)=>{
        localStorage.setItem("id",id);
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
    }
    return <>
        <h1>Read Operation:-</h1>
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {
                    Data.map((e) => {
                        return (
                            <React.Fragment key={e.id}>
                                <tbody>
                                    <tr>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td>{e.email}</td>
                                        <td>
                                            <Link to="/update">
                                                <button type="button" className="btn btn-success" onClick={()=>setToLocalStorage(e.id,e.name,e.email)}>Edit</button>
                                            </Link>
                                            
                                        </td>

                                        <td><button type="button" className="btn btn-danger" onClick={()=>{Delete(e.id)}}>Delete</button></td>
                                    </tr>

                                </tbody>
                                </React.Fragment>
                        )
                        // console.log(e.name);

                    })
                }

            </table>
        </div>
    </>
}

export default Read;