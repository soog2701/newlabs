import "./../styles.css";
import Button from "./../component/button";
import { memo, useEffect } from "react";
import { useAppDispatch } from "../hooks";
import { exceptionAction } from "../features/exceptions/reducer";
// import Alert from "./../component/alert";

const Home = () => {
  const dispatch = useAppDispatch();
  const { open } = exceptionAction;
  const openpop = () => {
    dispatch(
      open({
        title: "test-alert-1-1",
        contents: "test-contents-1-1"
      })
    );
  };

  useEffect(() => {
    dispatch(
      open({
        title: "test-alert-1",
        contents: "test-contents-1"
      })
    );
    // console.log(alert);
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button variant="contained" color="primary" onClick={openpop}>
        test12
      </Button>
    </div>
  );
};

export default memo(Home);
