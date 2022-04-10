import React, { useState, useEffect } from 'react';
import './Registration.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import { Route, Switch, useHistory } from 'react-router-dom';

function Registration() {
  const initialValues = {firstname:"",lastname:"", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [validation, setValidation] = useState(false);
  const history = useHistory();
  function handleChange(e){
    const {name, value} = e.target;
    setFormValues({...formValues,[name]: value})
    console.log(formValues);
  }
  function handleSubmit(e){;
    e.preventDefault();
   setFormErrors(validate(formValues));
  //  
   
  };
  useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors])
  function validate(values){
    const errors = {};
    const regex =   /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (!values.email){
      errors.email = "Email is required!";
    } else if(!regex.test(values.email)){
      errors.email = "This is not a valid email format"
    }
    if (!values.firstname){
      errors.firstname = "Firstname is required!";
    }
    if (!values.lastname){
      errors.lastname = "Lastname is required!";
    }
    if (!values.psw){
      errors.lastname = "Password is required!";
    }else if((values.psw < 4)){
      errors.psw = " Password must be more than 4 characters"
    }
    else{
      setIsSubmit(true);
    }
  
    return errors;
    
  }
  return (<>
 
   
    {
      isSubmit ?  <Login formValues={formValues}/> : 
      <div className='registration col-md-6 col-xs-12 col-6'>
      <form onSubmit={handleSubmit}>
        <div class="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <div className='input-field'>
            <label for="firstname"><b>First Name</b></label>
            <input type="text"
              placeholder="Enter First Name"
              name="firstname"
              id="firstname"
              value={formValues.firstname}
              onChange={handleChange}  />
              <p>{formErrors.firstname}</p>

            <label for="lastname"><b>Last Name</b></label>
            <input type="text"
              placeholder="Enter Last Name"
              name="lastname"
              id="lastname"
              value={formValues.lastname}
              onChange={handleChange} />
              <p>{formErrors.lastname}</p>

            <label for="email"><b>Email</b></label>
            <input type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={handleChange} />
              <p>{formErrors.email}</p>

            <label for="psw"><b>Password</b></label>
            <input type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              value={formValues.psw}
              onChange={handleChange}  />
              <p>{formErrors.psw}</p>
          </div>
          <button type="submit" class="registerbtn">Register</button>
          <hr></hr>
        </div>
      </form>
    </div> 
    }

    </>
  )
}
export default Registration;