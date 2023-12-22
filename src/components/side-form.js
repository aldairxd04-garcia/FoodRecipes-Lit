import { LitElement, html, css } from "lit";

export class SideForm extends LitElement {
  static styles = css`
    .container {
      position: fixed;
      top: 0;
      left: 0; /* Cambiar a 0 para que esté visible por defecto */
      width: 300px; /* Ancho del side-form */
      height: 100%;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      overflow-y: auto;
      transition: left 0.3s ease; /* Agregar transición para suavizar la animación */
    }

    .add-recipe {
      padding: 20px;
    }

    .add-recipe .div-cerrar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .add-recipe .div-cerrar button {
      color: red;
    }

    .input-field {
      margin-bottom: 20px;
    }

    .input-field input {
      width: 90%;
      padding: 8px;
      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom: 1px solid #ccc;
      border-radius: 4px;
    }

    .input-field label {
      display: block;
      margin-top: 8px;
      font-size: 0.9rem;
      color: #555;
    }

    .button-field {
      text-align: center;
    }

    button {
      background-color: white;
      cursor: pointer;
    }

    .btn-small {
      padding: 8px 16px;
      font-size: 1rem;
      background-color: #ff8816;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .color-msg {
      color: red;
    }
  `;

  static get properties() {
    return {
      name: { String },
      desc: { String },
    };
  }

  closeBarForm() {
    this.dispatchEvent(
      new CustomEvent("close-form", { bubbles: true, composed: true })
    );
  }

  handleName(e) {
    console.log(e.target.value);
    this.name = e.target.value;
  }

  handleDesc(e) {
    console.log(e.target.value);
    this.desc = e.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.name || !this.desc) {
      const form = this.shadowRoot.querySelector("form");
      const h3 = document.createElement("h3");
      h3.classList.add("color-msg");
      h3.textContent = "Todos los campos son necesarios";
      form.appendChild(h3);
      setTimeout(() => {
        form.removeChild(h3);
      }, 2000)
      return;
    }
    const objeto = {
      id: Date.now(),
      name: this.name,
      desc: this.desc,
      img: "/img/dish.png",
    };

    localStorage.setItem("receta", JSON.stringify(objeto));
    this.dispatchEvent(
      new CustomEvent("handle-submit", { bubbles: true, composed: true })
    );
  }

  render() {
    return html`
      <div class="container">
        <form class="add-recipe" @submit=${this.handleSubmit}>
          <div class="div-cerrar">
            <h4>New Recipe</h4>
            <button @click=${this.closeBarForm}>X</button>
          </div>
          <div class="divider"></div>
          <div class="input-field">
            <input
              placeholder="e.g. Ninja soup"
              id="title"
              type="text"
              class="validate"
              @input=${this.handleName}
            />
            <label for="title">Recipe Title</label>
          </div>
          <div class="input-field">
            <input
              placeholder="e.g. Tofu, mushroom, garlic"
              id="ingredients"
              type="text"
              class="validate"
              @input=${this.handleDesc}
            />
            <label for="ingredients">Ingredients</label>
          </div>
          <button type="submit" class="btn-small">Add</button>
        </form>
      </div>
    `;
  }
}
customElements.define("side-form", SideForm);
