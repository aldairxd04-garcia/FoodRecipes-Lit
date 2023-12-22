import { LitElement, html, css, nothing } from "lit-element";
import {} from '../side-bar.js';
import {} from '../nav-bar.js'

export class AboutComponent extends LitElement {
  static get properties() {
    return {
      showSide: { Boolean },
    };
  }

  static get styles() {
    return css`
      .center {
        text-align: center;
      }

      .btn-floating {
        background-color: #ff8816;
        color: #fff;
        border: none;
        border-radius: 50%;
        font-size: 2rem;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 0.3rem 0.7rem;
      }
    `;
  }

  constructor() {
    super();
    this.showSide = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("toggle-side", this.handleToggleSide);
    this.addEventListener("close-bar", this.handleToggleSide);
  }

  handleToggleSide() {
    this.showSide = !this.showSide;
    this.requestUpdate();
  }

  render() {
    return html`
      <nav-bar></nav-bar>
      ${this.showSide ? html`<side-bar></side-bar>` : nothing}
      <div>
        <h5>About Food LIT</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
          porro voluptatum illum veniam eaque sunt sit labore provident
          eligendi! Voluptate amet suscipit inventore unde maxime atque impedit
          officia nobis laboriosam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatibus omnis, ea doloremque exercitationem id necessitatibus.
          Voluptatem officiis cupiditate commodi totam, hic laborum est ducimus
          amet iure, non dignissimos illo.
        </p>
      </div>
    `;
  }
}
customElements.define("about-component", AboutComponent);
