import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/AuthApi';
import { Link } from 'react-router-dom';

import '../Scss/RegisterComponent.scss';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("ok")
    const {name,email,password,confirmPassword}=formData;
    const cpassword=confirmPassword
   console.log(confirmPassword)
   console.log(name)
   console.log(password)
   console.log(email)
    const res = await fetch("http://localhost:3000/Register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name,email,password,cpassword
      })
    });
    const data=await res.json();
     console.log(data)
    if(res.status=="422" || !data){
      window.alert("Invalid registeration")
    }else{
      window.alert("Registered successfully")
      navigate("/login")
    }
    
    // Check if the password and confirmPassword match
    /*if (formData.password !== formData.confirmPassword) {
      console.error('Password and Repeat Password do not match');
      // You can display an error message to the user here
      return;
    }

    try {
      const data = await registerUser(formData);
      console.log('Response from server:', data);
      if (data.message === 'User registered successfully') {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error:', error);
    }*/
  };
  return (
    <section >
      <div className="whole" ></div>
        <div className="container ">
  
                  <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                  <form onSubmit={handleSubmit} method='post'>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="form3Example4cg">Password</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cdg"
                        className="form-control form-control-lg"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                      <label className="form-check-label" htmlFor="form2Example3g">
                        I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-success btn-block btn-lg" style={{ background: 'linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))' }}>Register</button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link></p>
                  </form>
                </div>
              
          
    </section>
  );
};

export default Register;
