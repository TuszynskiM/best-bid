import { Button } from "antd";
import { ROUTES } from "constants/ROUTES";
import React from "react";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push(ROUTES.LOGIN);
  };

  const handleRegister = () => {
    history.push(ROUTES.REGISTER);
  };

  return (
    <div>
      <Button type="link" onClick={handleLogin}>
        Login
      </Button>
      <Button type="link" onClick={handleRegister}>
        Register
      </Button>
    </div>
  );
};
