import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #F9F9F9;
    @import url("https://fonts.googleapis.com/css2?family=Nunito&family=Spline+Sans+Mono&display=swap");
    font-family:  'Spline Sans Mono', Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Rectangle = styled.div`
  height: 400px;
  width: 250px;
  background-color: 	
  #554A55;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
	margin: 50px auto;
  border-radius: 5px;
`;

export const FormGroup = styled.div`
	color: palevioletred;
  display: block;
	width: 300px;
	margin: 50px auto;
  
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
  display: block;
`;


