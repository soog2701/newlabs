import { memo, FC, ReactNode, useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import Alert from "./../component/alert";
import { withRouter } from "react-router";
import { useAppDispatch } from "../hooks";
import { exceptionAction } from "../features/exceptions/reducer";
const Container = styled.div``;

type Prop = {
  children: ReactNode;
};
const DefaultLayout = ({ children }: Prop) => {
  return (
    <Container>
      {children}
      <Alert />
    </Container>
  );
};

const LayoutRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log("*", location.pathname);
    rest.setPathname(location.pathname);
    dispatch(exceptionAction.closeAll());
    // console.log(rest);
  }, [location]);

  return (
    <Route
      {...rest}
      render={(props) => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
};

export default memo(withRouter(LayoutRoute));
