import React, { useState } from "react";
import {
  Title,
  Button,
  GlobalStyle,
  FormGroup,
  Label,
  Rectangle,
} from "./style.js";

const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    if (!user.email || !user.password || !user.passwordConfirm)
      return alert("form is not valid");
    if (user.password !== user.passwordConfirm)
      return alert("passwords do not match");
    if (user.email.indexOf("@") <= -1) 
      return alert("email is not valid");
    else {
      return alert("sent successfully");
    }
  };

  console.log(user);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleEmailToUsername = () => {
    if (user.email.includes("@")) {
      const splitEmail = user.email.split("@")[0];
      if (user.username == "" || user.email.includes("@"))
        setUser({ ...user, username: splitEmail });
    }
  };

  return (
    <>
      <GlobalStyle />
      <Rectangle>
        <FormGroup>
          <Title>registration</Title>
          <Label>username</Label>
          <input
            name="username"
            type="text"
            onChange={handleChange}
            value={user.username}
          />
          <br></br>
          <Label>email</Label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            onBlur={handleEmailToUsername}
            value={user.email}
          />
          <br></br>
          <Label>password</Label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            value={user.password}
          />
          <br></br>
          <Label>password confirm</Label>
          <input
            name="passwordConfirm"
            type="password"
            onChange={handleChange}
            value={user.passwordConfirm}
          />
          <br></br>
          <Button onClick={handleLogin} type="submit">
            register
          </Button>
        </FormGroup>
      </Rectangle>
    </>
  );
};

export default Registration;
