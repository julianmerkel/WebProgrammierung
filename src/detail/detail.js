"use strict";

import detail from "./detail.html";
import stylesheet from "./detail.css";

class Detail {
    constructor(app){
        this.app = app;
    }

    onShow() {
        // Variablen
        var arrayFavorites =JSON.parse(localStorage.getItem("favoriteMovies"));
        var detailFilmString = localStorage.getItem("detailFilm");
        var filmObject = {};

        for(var i = 0; i < arrayFavorites.length; i++){
            if(arrayFavorites[i].title == detailFilmString){
                filmObject = arrayFavorites[i];
            }
        }

        console.log(filmObject);

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
         header.innerHTML =  detailFilmString;
         divcontainerHeader.appendChild(header);
 
         let br2 = document.createElement("br");
         divcontainerHeader.appendChild(br2);
 
         //Platzhalter
         let br3 = document.createElement("br");
         this._detail.appendChild(br3);

         let resultContainer = document.createElement("div");
         resultContainer.setAttribute("class","rounded container");
         this._detail.appendChild(resultContainer);

         let resultRow = document.createElement("div");
         resultRow.setAttribute("class", "row");
         resultContainer.appendChild(resultRow);

         let resultDiv = document.createElement("div");
         resultDiv.setAttribute("class", "col");
         resultRow.appendChild(resultDiv);

         let resultImg = document.createElement("img");
         resultImg.setAttribute("class", "rounded float-left img");
         resultImg.setAttribute("src", filmObject.img);
         resultDiv.appendChild(resultImg);

        let informationDiv = document.createElement("div");
        informationDiv.setAttribute("class", "col");
        resultRow.appendChild(informationDiv);
        
        let resultInformation = document.createElement("div");
        resultInformation.setAttribute("class", "information-container")
        informationDiv.appendChild(resultInformation);

        let reusltGenre = document.createElement("h5");
        reusltGenre.innerHTML = "Genre: " + filmObject.genre;
        resultInformation.appendChild(reusltGenre);


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
