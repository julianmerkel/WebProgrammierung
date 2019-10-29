"use strict";

import stylesheet from "./favorites.css";
import favorites from "./favorites.html";

class Favorites {

    constructor(app){
        this.app = app;
    }

    onShow() {
        //create Container from imported HTML
        let container = document.createElement("div");
        container.innerHTML = favorites.trim();

        // Anzuzeigende HTML-Elemente ermitteln
        let section = container.querySelector("#favorites").cloneNode(true);
        let content = {
            className: "favorites",
            main: section.querySelectorAll("main > *"),
        };

        // Ergebnis zurückliefern
        return content;
    }

    get title() {
        return "Übersicht";
    }
}

export default Favorites;
