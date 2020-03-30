import { customElement, html } from "lit-element";
import { Layout } from "../components";

@customElement("page-auth")
export class PageAuth extends Layout {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <!-- Row -->
      <div class="auth">
        <!-- Col -->
        <section class="poster" style="background-image: url('auth-poster.jpg')"></section>
        <!-- Col -->
        <section class="form-wrapper">
          <figure class="brand-wrapper">
            <img class="brand" src="/brand.svg" alt="Socialmaxi" />
            <p class="slogan">Lorem ipsum dolor sit amet</p>
          </figure>
          <login-form />
        </section>
        <!-- Col -->
      </div>
      <!-- Row -->
    `;
  }
}
