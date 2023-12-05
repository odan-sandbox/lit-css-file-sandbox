/// <reference types="vite/client" />

declare module "*.lit-css" {
  const classes: import("lit").CSSResult;
  export default classes;
}
