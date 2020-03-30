import { customElement, LitElement, html } from "lit-element";
import { Layout } from "../components";

@customElement("page-not-found")
export class PageNotFound extends Layout {
  render() {
    return html`
      <h1 class="text-5xl text-gray-500 text-center">Page not found!</h1>
    `;
  }
}
