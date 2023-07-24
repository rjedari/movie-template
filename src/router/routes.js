import HomePage from "../pages/HomePage.vue";
import MainLoginPage from "../pages/MainLoginPage.vue";
import MovieDetails from "../pages/MovieDetails.vue";
import SettingPage from "../pages/SettingPage.vue";
import NotFoundPage from "../pages/404.vue";
import MainLayout from "../layout/MainLayout.vue"

const routes = [
  // {
  //   path: "/",
  //   component: MainLayout, 
  //   children: [
  //     {
  //       path: "/",
  //       component: HomePage, 
  //     // {
  //     //   path: "/login-page",
  //     //   component: MainLoginPage, // Component using the layout
  //     },
  //   ],
  // },
  { path: "/", name: "Home", component: HomePage },
  {
    path: "/login-page",
    name: "Login",
    component: MainLoginPage,
  },
  
  {
    path: "/movies/:id(\\d+)",
    name: "movie-detail",
    component: MovieDetails,
  },
  {
    path: "/setting-page",
    name: "Setting",
    component: SettingPage,
  },
  {
    path: "/:no(.*)*",
    name: "404",
    component: NotFoundPage,
  },
];

export { routes as routes };
