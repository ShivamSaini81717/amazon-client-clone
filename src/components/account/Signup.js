import { Divider } from '@mui/material';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./account.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Signup = () => {
  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: ""
});



const adddata = (e) => {
    const { name, value } = e.target;
  
    setUdata(() => {
        return {
            ...udata,
            [name]: value
        }
    })
};

const senddata = async (e) => {
    e.preventDefault();

    const { fname, email, mobile, password, cpassword } = udata;

if(fname===""){
    toast.error("Please fill the Form", {
        position: "top-center", 
    });
}else if(email===""){
    toast.error("Please fill the Form", {
        position: "top-center", 
    });
}else if(mobile===""){
    toast.error("Please fill the Form", {
        position: "top-center", 
    });
}else if(password===""){
    toast.error("Please fill the Form", {
        position: "top-center", 
    });
}
else if(cpassword===""){
    toast.error("Please fill the Form", {
        position: "top-center", 
    });
}else{
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname, email, mobile, password, cpassword
            })
        });
    
        const data = await res.json();
        // console.log(data);

        if (res.status === 422 || !data) {
            toast.error("Invalid Details", {
                position: "top-center"
            });
        } else {
            setUdata({
                ...udata, fname: "", email: "",
                mobile: "", password: "", cpassword: ""
            });
            toast.success("Registration Successfully", {
                position: "top-center",
              
            });
        }
    
}
}
  return (

    <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./blacklogoamazon.png" alt="signupimg" />
                </div>
                <div className="sign_form">
                    <form method="POST">
                        <h1>Create account</h1>
                        <div className="form_data">
                            <label htmlFor="name">Your name</label>
                            <input type="text" name="fname"
                                onChange={adddata}
                                value={udata.fname}
                                id="name" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">email</label>
                            <input type="email" name="email"
                                onChange={adddata}
                                value={udata.email}
                                id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="mobile">Mobile number</label>
                            <input type="number" name="mobile"
                                onChange={adddata}
                                value={udata.mobile}
                                id="mobile" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                onChange={adddata}
                                value={udata.password}
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="passwordg">Confirm Password</label>
                            <input type="password" name="cpassword"
                                onChange={adddata}
                                value={udata.cpassword}
                                id="passwordg" />
                        </div>
                        <button type="submit" className="signin_btn"
                         onClick={senddata}
                         >Continue</button>

                        <Divider />

                        <div className="signin_info">
                            <p>Already have an account?</p>
                            <NavLink to="/login">Sign in</NavLink>
                        </div>
                        <div className="signin_info">
                            <p> Buying for work?</p>
                            <NavLink to="/login">Create a free business account</NavLink>
                        </div>
                        <div className="signin_info">
                            <p> By creating an account or logging in, <br/>
                              
                            you agree to Amazon’s Conditions
                            
                            <br/> 
                           of Use and Privacy Policy.</p>
                            
                        </div>
                        

                    </form>
                </div>
                <ToastContainer />
            </div>
        </section>
  )
}
