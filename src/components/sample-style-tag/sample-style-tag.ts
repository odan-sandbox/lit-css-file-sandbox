import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import style from "./sample-style-tag.css?inline";

@customElement("sample-style-tag")
export class SampleLitCss extends LitElement {
  render() {
    return html`<div>
      <style>
        ${style}
      </style>
      <h1>sample-style-tag</h1>
    </div>`;
  }
}
