import styles from "../sass/style.scss?inline";
console.log(styles);

const styleEl = document.createElement("style");
styleEl.innerHTML = styles;

document.querySelector("head").append(styleEl);

import "./heroText";
