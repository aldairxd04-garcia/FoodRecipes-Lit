import { LitElement, css, html } from "lit-element";


export class Navbar extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  static get styles() {
    return css`
    
    nav {
        background-color: #FFE9D2;
        color: #FF8816;
        padding: 10px 20px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem;
    }
    
    .nav-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    a {
        text-decoration: none;
        color: inherit;
        font-size: 1.5rem; /* Set your desired font size */
    }
    
    a span {
        font-weight: bold;
    }
    
    .menu-icon {
        font-size: 1.5rem; /* Set your desired font size */
        cursor: pointer;
    }
    
    .side-menu {
        /* Style your side menu here */
        display: none;
        /* Other styles */
    }


    `;
  }

  handleMenuClick() {
    this.dispatchEvent(new CustomEvent('toggle-side', { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <nav>
        <div class="nav-wrapper container">
            <a href="/">Food<span>Lit</span></a>
            <span class="menu-icon" @click=${this.handleMenuClick}>☰</span>
        </div>
    </nav>
    `;
  }
}
customElements.define("nav-bar", Navbar);
