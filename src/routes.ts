import Home from "./views/home";
import About from "./views/about";
import Layout from "./views/layout";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/layout",
    component: Layout
  }
];

export default routes;
