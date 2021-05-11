import { memo, ReactNode, useEffect } from "react";
import Button from "./button";
import { createPortal } from "react-dom";
import styledComponents from "styled-components";
import {
  exceptionAction,
  exceptionSelector
} from "../features/exceptions/reducer";
import { useAppDispatch, useAppSelector } from "../hooks";
import { withRouter } from "react-router";

const Wrap = styledComponents.div({
  background: "rgba(0, 0, 0, 0.25)",
  position: "fixed",
  left: 0,
  top: 0,
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const Content = styledComponents.div({
  background: "white",
  padding: "1rem",
  width: "400px",
  height: "auto"
});

type AddProps = {
  children?: ReactNode;
  id?: any;
}; // ElementType<"div"> &

const alertDiv = (props: AddProps) => {
  const dispatch = useAppDispatch();
  const { close } = exceptionAction;
  const { contents, alert } = useAppSelector(exceptionSelector.all);
  const cancel = () => {
    dispatch(close());
    console.log(alert, contents);
  };
  const ok = () => {
    props.history.push("/about");
    console.log(alert, contents);
  };

  return (
    alert.length > 0 && (
      <Wrap {...props}>
        <Content>
          <h5>{alert[alert.length - 1].title}</h5>
          <p>
            {alert[alert.length - 1].contents}
            <br />
            {props.children}
          </p>

          <div>
            <Button onClick={ok}>ok</Button>
            <Button onClick={cancel}>cancel</Button>
          </div>
        </Content>
      </Wrap>
    )
  );
};

const Alert = (props: AddProps) => {
  const el: HTMLElement = document.getElementById("modal")!; //document.createElement("div");
  return createPortal(alertDiv(props), el)!;
};

export default memo(withRouter(Alert));
