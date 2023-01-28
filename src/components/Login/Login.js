import React from "react";
import Card from "react-bootstrap/Card";
import LoginButton from "./LoginButton";
// import "../"

function Login() {
  return (
    <Card>
      <Card.Body style={{ width: "18rem" }}>
        <Card.Title>Log in</Card.Title>
        <Card.Text>Click to login</Card.Text>
        <LoginButton />
      </Card.Body>
    </Card>
  );
}

export default Login;
