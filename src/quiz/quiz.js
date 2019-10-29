"use strict";

import stylesheet from "./quiz.css";
import quiz from "./quiz.html";

class Quiz {

    constructor(app){
        this.app = app;
    }

    onShow() {
        //create Container from imported HTML
        let container = document.createElement("div");
        container.innerHTML = quiz.trim();

        // Anzuzeigende HTML-Elemente ermitteln
        let section = container.querySelector("#quiz").cloneNode(true);
        let content = {
            className: "quiz",
            main: section.querySelectorAll("main > *"),
        };

        // Ergebnis zurückliefern
        return content;
    }

    get title() {
        return "Übersicht";
    }
}

export default Quiz;
