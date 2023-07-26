import HomePage from "../pages/HomePage.vue";
import MainLoginPage from "../pages/MainLoginPage.vue";
import MovieDetails from "../pages/MovieDetails.vue";
import SettingPage from "../pages/SettingPage.vue";
import NotFoundPage from "../pages/404.vue";
import FavoriteList from "../pages/FavoriteList.vue";
import Profile from "../pages/profile.vue";
import MainLayout from "../layout/MainLayout.vue";

export const routes = [
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
  {
    path: "/favorites",
    name: "favorites",
    component: FavoriteList,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
];
