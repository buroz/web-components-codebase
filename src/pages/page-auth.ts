import { customElement, html, property, LitElement } from "lit-element";

@customElement("page-auth")
export class PageAuth extends LitElement {
  createRenderRoot() {
    return this;
  }

  @property() private isLogin: boolean = true;

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
          ${this.isLogin
            ? html`
                <login-form />
              `
            : html`
                <register-form />
              `}

          <hr class="line" />
          <div class="signup-wrapper">
            <button class="signup" @click=${(e: Event) => (this.isLogin = !this.isLogin)}>
              ${this.isLogin ? "Üye Ol" : "Giriş Yap"}
            </button>
          </div>
          <p class="copyright">© 2020 Resclick. Tüm hakları saklıdır.</p>
        </section>
        <!-- Col -->
      </div>
      <!-- Row -->
    `;
  }
}
