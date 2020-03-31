import { customElement, LitElement, html } from "lit-element";

@customElement("app-sidebar")
export class Sidebar extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section class="sidebar">
        <figure class="brand-wrapper">
          <a href="/">
            <img src="/brand.svg" class="brand" alt="brand" />
          </a>
        </figure>
      </section>
    `;
  }
}
