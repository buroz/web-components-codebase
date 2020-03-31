import { Router } from "@vaadin/router";
import { authGuard, logoutGuard } from "./guards";

window.addEventListener("load", () => {
  const router = new Router(document.querySelector("#root"));
  router.setRoutes([
    {
      path: "/",
      component: "page-auth",
      action: authGuard
    },
    {
      path: "/auth",
      component: "page-auth"
    },
    {
      path: "/auth/logout",
      action: logoutGuard
    },
    {
      path: "(.*)",
      component: "page-not-found",
      action: authGuard
      // component: "page-not-found"
    }
  ]);
});
