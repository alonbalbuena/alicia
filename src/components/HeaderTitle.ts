import Component from "./Component.js";

class HeaderTitle extends Component {
  constructor() {
    super();
    this.shadow.innerHTML = `
      <link rel="stylesheet" href="/public/styles/header-title.css">
      <h1 class="title">Welcome to this site</h1>
      `;
  }
}

window.customElements.define("header-title", HeaderTitle);