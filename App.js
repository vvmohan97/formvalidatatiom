
import { useEffect, useState } from 'react';
import './App.css';

function App() {
   const  initialValues={username:"",email:"",password:""};
   const [formValues,setFormValues]=useState(initialValues);
   const [formErrors,setFormErrors]=useState({});
   const [isSubmit,setIsSubmit]=useState(false);

  const handleChange=(e)=>{
   
    const {name,value}=e.target;
    setFormValues({...formValues,[name]: value});
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(()=>{
    console.log(formErrors);
    if( Object.keys(formErrors).length===0&& isSubmit){
      console.log(formValues);
    }
  },[formErrors])

  const validate=(values)=>{
      const errors={};
      const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if(!values.username){
        errors.username="Username is required";
      }
      if(!values.email){
        errors.email="emailid is required";
      }
      else if(!regex.test(values.email)){
        errors.email="This is not a valid emailid !!!";
      }
      if(!values.password){
        errors.password="password is required";
      }
      else if(values.password.length <4){
        errors.password="password should be more than 4 characters!!!";
      }
      else if(values.password.length>10){
        errors.password="password should not exceed more than 10 characters!!";
      }
  return errors;
  }

return (
  <div className='div'>
  <div className='maindiv'>
  <form onSubmit={handleSubmit}>  
    <h1>Login form</h1>
    <div><label>UserName</label><br/>
    <input 
     type="text" name="username"
     placeholder='Enter a username'
     value={formValues.username}
     onChange={handleChange}
    />
    </div>
    <p>{formErrors.username}</p>
    <div><label>Email</label><br/>
    <input 
     type="email"
     name="email"
     placeholder="Enter email id"
     value={formValues.email}
     onChange={handleChange}
    />
    </div>
    <p>{formErrors.email}</p>
    <div><label>Password</label><br/>
    <input 
     type="password"
     name="password" 
     placeholder="enter your password"
     value={formValues.password}
     onChange={handleChange}
    />
    </div>
    <p>{formErrors.password}</p>
    <button type='submit'>submit</button>
  </form>  
  </div>
</div>
);
}
 
export default App;
