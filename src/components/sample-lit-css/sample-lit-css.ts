import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import style from "./sample.lit-css";

@customElement("sample-lit-css")
export class SampleLitCss extends LitElement {
  static readonly styles = [style];

  render() {
    return html`<h1>It's Lit!</h1>`;
  }
}
