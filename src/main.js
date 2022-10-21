import "./style.css";

import { animate, stagger, inView, scroll, timeline } from "motion";



document.querySelectorAll("section").forEach((section) => {
    const header = section.querySelector(".p");
    scroll(animate(header, { y: [-100, 250] }), {
      target: header
    });
  });

