import { BrowserRouter, Route } from "react-router-dom";
import LayoutRoute from "./layouts/index";
import routes from "./routes";

export default function App() {
  const setPathname = (pathname) => {
    console.log("**", pathname);
  };
  return (
    <BrowserRouter>
      {routes.map((route, i) => (
        <LayoutRoute exact key={i} {...route} setPathname={setPathname} />
      ))}
    </BrowserRouter>
  );
}
