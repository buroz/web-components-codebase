import { customElement, html, property, LitElement } from "lit-element";

@customElement("page-home")
export class PageHome extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="main-wrapper">
        ${html`
          <app-sidebar />
        `}
        ${html`
          <app-navbar />
        `}
      </div>
    `;
  }
}
