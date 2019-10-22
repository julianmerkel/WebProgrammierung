"use strict";

import stylesheet from "./favorite.css";
import overview from "./favorite.html";

class Quiz {

    constructor(app){
        this.app = app;
    }

    onShow() {
        //create Container from imported HTML
        let container = document.createElement("div");
        container.innerHTML = quiz.trim();

        // Anzuzeigende HTML-Elemente ermitteln
        let section = container.querySelector("#favorite").cloneNode(true);
        let content = {
            className: "favorite",
            main: section.querySelectorAll("main > *"),
        };

        // Ergebnis zurückliefern
        return content;
    }

    get title() {
        return "Favorite";
    }
}

export default Favorite;