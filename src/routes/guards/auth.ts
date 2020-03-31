import { Context, Commands } from "@vaadin/router";
import { store } from "../../store";
import { logoutAction } from "../../store/actions";

export const authGuard = (ctx: Context, cms: Commands) => {
  return store.getState().auth.token ? ctx.next() : cms.redirect("/auth");
};

export const logoutGuard = (ctx: Context, cms: Commands) => {
  if (store.getState().auth.token) {
    const res = logoutAction();
    store.dispatch(res);
    cms.redirect("/auth");
  } else {
    cms.redirect("/");
  }
};
