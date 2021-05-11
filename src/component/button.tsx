import {
  Button as UiButton,
  ButtonClassKey,
  PropTypes
} from "@material-ui/core";
import { ExtendButtonBaseTypeMap } from "@material-ui/core/ButtonBase";
import { OverrideProps } from "@material-ui/core/OverridableComponent";
import { ElementType, memo } from "react";

type ButtonTypeMap<P, D extends ElementType> = ExtendButtonBaseTypeMap<{
  props: P & {
    color?: PropTypes.Color;
    disableFocusRipple?: boolean;
    edge?: "start" | "end" | false;
    size?: "small" | "medium";
    variant?: "contained" | "outlined" | "text" | undefined;
  };
  defaultComponent: D;
  classKey: ButtonClassKey;
}>;

type ButtonProps<D extends ElementType = "button", P = {}> = OverrideProps<
  ButtonTypeMap<P, D>,
  D
>;

const Button = (props: ButtonProps<"button">) => {
  return <UiButton {...props}>{props.children}</UiButton>;
};

Button.defaultProps = {
  children: "button"
};

export default memo(Button);
