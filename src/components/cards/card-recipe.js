import { LitElement, html, css } from "lit";

export class CardRecipe extends LitElement {
  static styles = css`
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .recipes {
      padding: 0 2rem 1rem;
    }

    .card-panel {
      display: flex;
      align-items: center;
      padding: 20px;
      margin-bottom: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .recipe img {
      width: 100px;
      height: auto;
      margin-right: 20px;
    }

    .recipe-details {
      flex: 1;
    }

    .recipe-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 8px;
    }

    .recipe-ingredients {
      font-size: 1rem;
      color: #555;
    }

    .recipe-delete {
      cursor: pointer;
      font-size: 1.5rem;
      color: #ff0000; /* color rojo para el ícono de eliminación */
    }

    .delete-icon {
      display: inline-block;
    }
  `;

  static get properties() {
    return {
      id: { Number },
      name: { String },
      img: { String },
      desc: { String },
    };
  }

  handleDelete() {
    this.dispatchEvent(
      new CustomEvent("handle-delete", {
        detail: this.id,
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="recipes container grey-text text-darken-1">
        <div class="card-panel recipe white row">
          <img src=${this.img} alt=${this.name} />
          <div class="recipe-details">
            <div class="recipe-title">${this.name}</div>
            <div class="recipe-ingredients">${this.desc}</div>
          </div>
          <div class="recipe-delete">
            <span @click=${this.handleDelete} class="delete-icon"
              >&#x2715;</span
            >
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("card-recipe", CardRecipe);
