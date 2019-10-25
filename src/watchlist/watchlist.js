"use strict";

import stylesheet from "./watchlist.css";
import watchlist from "./watchlist.html";

class Watchlist {

    constructor(app){
        this.app = app;
    }

    onShow() {
        //create Container from imported HTML
        let container = document.createElement("div");
        container.innerHTML = watchlist.trim();

        // Anzuzeigende HTML-Elemente ermitteln
        let section = container.querySelector("#watchlist").cloneNode(true);
        let content = {
            className: "watchlist",
            main: section.querySelectorAll("main > *"),
        };

        // Ergebnis zurückliefern
        return content;
    }

    get title() {
        return "Übersicht";
    }
}

export default Watchlist;
