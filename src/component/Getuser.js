import React, {useState} from 'react';
import './Getuser.css';

const Getuser = () =>{

 const gettinguser = async ()=>{
    const res = await fetch("https://reqres.in/api/users?page=1");
    const jsonres = await res.json();
    setUser(jsonres.data);
     console.log(jsonres.data);
};   

const [User, setUser] = useState([])
        return (
           <>
             <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                          <p className="navbar-brand"> Let's Groww More</p>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active">Internship</li>
                    </ul>
                </div>
            </nav>
           
            <center><button className="btn btn-info" onClick={gettinguser}><span className="glyphicon glyphicon-user"></span> Users</button></center>
           <br/>

            {User.map(({id,first_name,avatar,last_name,email})=>(
                <React.Fragment>
                 <div className="container">
                     <div className="row">
                        <div class="col-lg-06 col-md-06 col-sm-12">
                            <div className="card">
                                 <img className="img" src={avatar} alt="Avatar"/>
                                <div class="containerrr">
                                    <h1><b>{first_name}</b></h1> 
                                    <h3>{last_name}</h3> 
                                    <p>{email}</p>
                                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal">Click Me</button>
                                </div>   
                                 </div>
                        </div>
                      </div>  
                  </div> 
                </React.Fragment>
            ))}
           
           <br/>

                <div id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">

                  
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">LGMVIP Tsak 2</h4>
                    </div>
                    <div class="modal-body">
                        <p>Thank You Let's grow more...</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                    </div>

                </div>
                </div>
         </>
        )
    };   
export default Getuser;