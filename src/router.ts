import { Router } from "@vaadin/router";

window.addEventListener("load", () => {
  const router = new Router(document.querySelector("#root"));
  router.setRoutes([
    {
      path: "/auth",
      component: "page-auth"
    },
    {
      path: "(.*)",
      component: "page-auth"
      // component: "page-not-found"
    }
  ]);
});
