import { Button } from "antd";
import { ROUTES } from "constants/ROUTES";
import { useHistory } from "react-router";

export const Login = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push(ROUTES.MARKET);
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
