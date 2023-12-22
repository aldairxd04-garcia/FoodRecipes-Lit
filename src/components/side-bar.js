import { LitElement, css, html } from "lit-element";

export class Sidebar extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  static get styles() {
    return css`
      aside {
        position: fixed;
        top: 0;
        right: 0;
        width: 300px; /* Ancho del side-form */
        height: 100%;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        overflow-y: auto;
        transition: left 0.3s ease;
      }

      ul > li:first-child {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
      }

      .side-menu {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .side-menu li {
        padding: 8px 16px;
      }

      .side-menu .subheader {
        color: red;
      }

      .side-menu a {
        text-decoration: none;
        color: #333;
        display: block;
      }

      .side-menu .divider {
        border-top: 1px solid #ddd; 
        margin: 8px 0;
      }

      button{
        background-color: white;
        cursor: pointer;
      }
    `;
  }

  closeBar() {
    this.dispatchEvent(
      new CustomEvent("close-bar", { bubbles: true, composed: true })
    );
  }

  render() {
    return html`
      <aside>
        <ul id="side-menu" class="side-menu">
          <li><span>FOOD LIT</span> <button @click=${this.closeBar} class="subheader">X</button></li>
          <li><a href="/">Home</a></li>
          <li><a href="/pages/about.html">About</a></li>
          <li class="divider"></li>
          <li>
            <a href="/pages/contact.html">
              <span class="material-icons"></span>Contact
            </a>
          </li>
        </ul>
      </aside>
    `;
  }
}

customElements.define("side-bar", Sidebar);
