import { Button } from "antd";
import { ROUTES } from "constants/ROUTES";
import { useHistory } from "react-router-dom";

export const Market = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push(ROUTES.LOGIN);
  };

  return (
    <div>
      <Button type="link" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};
