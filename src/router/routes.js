import HomePage from "../pages/HomePage.vue";
import MainLoginPage from "../pages/MainLoginPage.vue";

 const routes = [
  { path: "/", name: "Home", component: HomePage},
  {
    path: "/login-page",
    name: "Login",
    component: MainLoginPage,
  },
];
export {routes as routes}