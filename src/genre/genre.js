"use strict";

import stylesheet from "./genre.css";
import overview from "./genre.html";

class Genre {

    constructor(app){
        this.app = app;
    }

    onShow() {
        //create Container from imported HTML
        let container = document.createElement("div");
        container.innerHTML = genre.trim();

        // Anzuzeigende HTML-Elemente ermitteln
        let section = container.querySelector("#genre").cloneNode(true);
        let content = {
            className: "genre",
            main: section.querySelectorAll("main > *"),
        };

        // Ergebnis zurückliefern
        return content;
    }

    get title() {
        return "Genre";
    }
}

export default Genre;