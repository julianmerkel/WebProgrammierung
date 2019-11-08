"use strict";

import stylesheet from "./start.css";
import start from "./start.html";

class Start {

    constructor(app){
        this.app = app;
    }

    onShow() {
        //create Container from imported HTML
        let container = document.createElement("div");
        container.innerHTML = start.trim();

        // Anzuzeigende HTML-Elemente ermitteln
        let section = container.querySelector("#start").cloneNode(true);




        let content = {
            className: "start",
            main: section.querySelectorAll("main > *"),
        };

        // Ergebnis zurückliefern
        return content;
    }

    get title() {
        return "Übersicht";
    }

}


export default Start;
