"use strict";

import detail from "./detail.html";
import stylesheet from "./detail.css";

class Detail {
    constructor(app){
        this.app = app;
    }

    onShow() {
        // Anzuzeigende HTML-Elemente ermitteln
        let container = document.createElement("div");
         container.innerHTML = detail.trim();
 
         // Anzuzeigende HTML-Elemente ermitteln
         let section = container.querySelector("#detail").cloneNode(true);
         this._detail = section.querySelector("#detail > main > div");
         this._detail.setAttribute("id", "detailContainer");

         //Favorites Header
         let divcontainerHeader = document.createElement("div");
         divcontainerHeader.setAttribute("class","p-0 mb-2 rounded container");
         this._detail.appendChild(divcontainerHeader);
 
         let br = document.createElement("br");
         divcontainerHeader.appendChild(br);
 
         let header = document.createElement("h3");
         header.setAttribute("class", "text-center");
         header.innerHTML =  localStorage.getItem("detailFilm");
         divcontainerHeader.appendChild(header);
 
         let br2 = document.createElement("br");
         divcontainerHeader.appendChild(br2);
 
 
 
         //Platzhalter
         let br3 = document.createElement("br");
         this._detail.appendChild(br3);

         let content = {
            className: "detail",
            main: section.querySelectorAll("main > *"),

        };

        // Ergebnis zurückliefern
        return content;
    }

    onLeave(){

    }

    get title() {
        return "Detail";
    }
}

export default Detail;
