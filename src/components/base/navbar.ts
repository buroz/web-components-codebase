import { customElement, LitElement, html } from "lit-element";

@customElement("app-navbar")
export class Navbar extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <nav class="font-bold text-center md:flex justify-between items-center my-4 mx-auto container overflow-hidden">
        <a class="flex justify-center items-center" href="/">
          <img src="brand.svg" class="brand mr-3" alt="scum.land" />
          scum.land
        </a>
        <ul class="text-sm text-gray-700 list-none p-0 md:flex items-center">
          <li><a href="#" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">Listen</a></li>
          <li>
            <a href="#" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">Read</a>
          </li>
          <li>
            <a href="#" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">Buy/Trade</a>
          </li>
          <li><a href="#" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">Contact</a></li>
        </ul>
        <ul class="text-sm text-gray-700 list-none p-0 md:flex items-center">
          <li><a href="#" class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline">Log In</a></li>
          <li>
            <button class="bg-black hover:bg-gray-600 text-white md:ml-4 py-2 px-3">
              Sign In
            </button>
          </li>
        </ul>
      </nav>
    `;
  }
}
