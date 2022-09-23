import React, { useState } from 'react';
import {Title, Button, GlobalStyle, FormGroup, Label, Rectangle} from './style.js'



const Registration = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
     }
     );

    const handleLogin = event => {
        event.preventDefault();
        if(user.email == "" || user.password == "" || user.passwordConfirm == "") throw alert("form is not valid");
        if(user.password !== user.passwordConfirm) throw alert("passwords do not match");
        if(user.email.indexOf('@') <= -1) throw alert("email is not valid");

        const splitEmail = user.email.split("@")[0]
        if(user.username == "" || user.email.includes("@")) setUser({...user, username: splitEmail})        

      };

      console.log(user);
      
    
    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value})
        }

    
    return (
    <>
    <GlobalStyle />
    <Rectangle>
    
    <FormGroup>
        <Title>registration</Title>
        <Label>username</Label>
        <input name="user name" type="text" onChange={handleChange} /><br></br>
        <Label>email</Label>
        <input name="email" type="text" onChange={handleChange} /><br></br>
        <Label>password</Label>
        <input name="password" type="password" onChange={handleChange} /><br></br>
        <Label>password confirm</Label>
        <input name="passwordConfirm" type="password" onChange={handleChange} /><br></br>
        <Button onClick={handleLogin} type="submit">register</Button>
    </FormGroup>
    </Rectangle>
    </>
    )
};

export default Registration;