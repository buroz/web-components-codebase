import { customElement, LitElement, html, TemplateResult, property } from "lit-element";
import { connect } from "pwa-helpers";
import { store } from "../../store";

import { loginRequestAction } from "../../store/actions";

import { AuthLoginForm } from "../../validators";
import { buttonDisabler } from "../../utils";
import { LoginRequest } from "../../_interfaces";

@customElement("login-form")
export class LoginForm extends connect(store)(LitElement) {
  createRenderRoot() {
    return this;
  }

  @property() private hasError: boolean;
  @property() private error: string;
  @property() private form: AuthLoginForm = new AuthLoginForm();
  @property() private buttonDisabled: boolean = false;

  stateChanged(state: any) {
    this.hasError = state.auth.hasError;
    this.error = state.auth.error;
  }

  async updateButtonState() {
    this.buttonDisabled = await buttonDisabler(this.form);
  }

  formValueChanged(e: { target: HTMLInputElement }) {
    this.form = new AuthLoginForm({
      ...this.form,
      [e.target.name]: e.target.value
    });
    this.updateButtonState();
  }

  async handleSubmit(request: LoginRequest) {
    // maybe async maybe not
    const res = await loginRequestAction(this.form);
    store.dispatch(res);
  }

  errorAlert(message: string): TemplateResult {
    return html`
      <div class="error" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" height="24" width="24" viewBox="0 0 24 24">
          <path
            d="M16.142 2l5.858 5.858v8.284l-5.858 5.858h-8.284l-5.858-5.858v-8.284l5.858-5.858h8.284zm.829-2h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-8.482 16.992l3.518-3.568 3.554 3.521 1.431-1.43-3.566-3.523 3.535-3.568-1.431-1.432-3.539 3.583-3.581-3.457-1.418 1.418 3.585 3.473-3.507 3.566 1.419 1.417z"
          />
        </svg>
        <p>${message}</p>
      </div>
    `;
  }

  render() {
    return html`
      <form class="form" @change=${this.formValueChanged}>
        ${this.hasError ? this.errorAlert(this.error) : null}

        <div class="label-wrapper">
          <label class="label" for="username">Email</label>
          <input
            class="input"
            id="email"
            name="email"
            .value=${this.form.email}
            type="email"
            placeholder="Email"
            autocomplete="on"
          />
        </div>

        <div class="label-wrapper">
          <label class="label password" for="password">
            Şifre
            <a class="forgot-link" href="./forgot-password.html">Hatırlamıyorum</a>
          </label>
          <input
            class="input"
            id="password"
            name="password"
            .value=${this.form.password}
            type="password"
            placeholder="Şifre"
            autocomplete="on"
          />
        </div>

        <div class="label-wrapper remember-wrapper">
          <input type="checkbox" id="checkbox_id" />
          <label class="remember" for="checkbox_id">Beni Hatırla</label>
        </div>

        <div class="button-wrapper remember-wrapper">
          <button
            ?disabled=${this.buttonDisabled}
            @click=${(e: Event) => this.handleSubmit({ email: "", password: "" })}
            class="button"
            type="button"
          >
            Kayıt Ol
          </button>
        </div>

        <hr class="line" />

        <div class="signup">
          <a class="link" href="./register.html">Üye Ol!</a>
        </div>

        <p class="copyright">© 2020 Resclick. Tüm hakları saklıdır.</p>
      </form>
    `;
  }
}
