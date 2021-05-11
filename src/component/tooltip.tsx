import { memo } from "react";
import { Tooltip as UiToolitp, TooltipProps } from "@material-ui/core";

const Tooltip = (props: TooltipProps) => {
  return <UiToolitp {...props}>{props.children}</UiToolitp>;
};

export default memo(Tooltip);
