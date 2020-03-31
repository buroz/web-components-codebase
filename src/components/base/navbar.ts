import { customElement, LitElement, html } from "lit-element";

@customElement("app-navbar")
export class Navbar extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section class="navbar">
        <button class="hamburger">
          <svg
            width="24"
            height="24"
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2" />
            <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
          </svg>
        </button>
        <nav class="nav">
          <div class="item avatar-wrapper">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" class="avatar" alt="" />
            <span class="profile-info">
              <span class="name">Burak OZ</span>
              <a href="/profile" class="profile">Profil</a>
            </span>
          </div>
        </nav>
      </section>
    `;
  }
}

/*

*/
