import { LitElement, html, css, nothing } from "lit";
import {} from "./components/nav-bar.js";
import {} from "./components/side-bar.js";
import {} from "./components/cards/card-recipe.js";
import {} from "./components/side-form.js";

export class MainElement extends LitElement {
  static get properties() {
    return {
      showSide: { Boolean },
      showForm: { Boolean },
      cards: { Array },
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
    this.showForm = false;
    this.cards = [
      {
        id: 1,
        name: "Mole",
        img: "/img/dish.png",
        desc: "Mole con arroz",
      },
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("toggle-side", this.handleToggleSide);
    this.addEventListener("close-bar", this.handleToggleSide);
    this.addEventListener("close-form", this.toggleSideForm);
    this.addEventListener('handle-submit', this.addRecipe);
    this.addEventListener('handle-delete', this.deleteRecipe);

  }

  handleToggleSide() {
    this.showSide = !this.showSide;
    this.requestUpdate();
  }

  toggleSideForm() {
    this.showForm = !this.showForm;
    this.requestUpdate();
  }

  addRecipe(){
    const recipeString = localStorage.getItem('receta');
    const recipe = JSON.parse(recipeString);
    console.log("Nuevo plato:", recipe);
    this.cards = [...this.cards, recipe];
    this.showForm = false;
    this.requestUpdate();
    localStorage.removeItem('receta');
    console.log(this.cards);
  }

  deleteRecipe(e){
    console.log("Receta eliminada:", e.detail);
    console.log('aaaaaaaaaa');
    const id = e.detail;
    this.cards = this.cards.filter(card => card.id != id);
     this.requestUpdate();
  }

  render() {
    return html`
      <nav-bar></nav-bar>
      ${this.showSide ? html`<side-bar></side-bar>` : nothing}
      ${this.cards.map(
        (el) =>
          html`<card-recipe
            id=${el.id}
            name=${el.name}
            img=${el.img}
            desc=${el.desc}
          ></card-recipe>`
      )}
      <div class="center">
        <button
          class="btn-floating btn-small btn-large add-btn"
          @click=${this.toggleSideForm}
        >
          +
        </button>
      </div>

      ${this.showForm ? html`<side-form></side-form>` : nothing}
    `;
  }
}

customElements.define("main-element", MainElement);
