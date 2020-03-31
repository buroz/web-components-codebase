import { Router } from "@vaadin/router";
import { authGuard, logoutGuard } from "./guards";

window.addEventListener("load", () => {
  const router = new Router(document.querySelector("body"));
  router.setRoutes([
    {
      path: "/",
      component: "page-home",
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
    }
  ]);
});
