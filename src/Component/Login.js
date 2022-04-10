import React,{useState} from 'react';
import './Registration.css';
import{   
  Redirect,
  Route,
  Switch  , useHistory
} from "react-router-dom";
import Main from '../Component2/Main';
import Dashboard from './Dashboard';

function Login({formValues}) {
console.log(formValues, "nidhi")
  const initialValues = {  email: "", psw: "" };
  const [loginValues, setLoginValues] = useState(initialValues);
  const [error, setError] = useState({})
  const [validate, setValidate] = useState({});
  const [validation, setValidation] = useState(false);
  const history = useHistory();
  function changeHandler(e){
    const {name, value} = e.target;
    setLoginValues({...loginValues,[name]: value})
    console.log(loginValues);
  }
  function submitHandler(e){
    e.preventDefault(); 
    setValidate(loginValues);
    console.log(loginValues.email, "nidhi")
    console.log(formValues.email,"kumari")
    setError(loginValidate());
  if (validation) {
    return history.push('/dashboard');;
  }    

  }
  function loginValidate(){
    const error = {}
    if(loginValues.email === formValues.email && loginValues.psw === formValues.psw){
       
        setValidation(true);  
    }
    else{
      error.email = "Please Enter Valid Email";
      error.psw = "Please Enter Valid Password";
      
    } 
    return error ;
  } 
  return (
    <>
      <form onSubmit={submitHandler}>
        <div class="container">
          <h3>Login Page</h3>
          <label for="email"><b>Email</b></label>
          <input type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            value={loginValues.email}
            onChange={changeHandler} required
            />
          <p></p>

          <label for="psw"><b>Password</b></label>
          <input type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            value={loginValues.psw}
            onChange={changeHandler} required
           />
          <p>{error.email} <br></br>{error.psw}</p>
        </div>
        <button type="submit" class="registerbtn" 
>Login</button>
          <hr></hr>
      </form>
    </>
  )
}
export default Login;