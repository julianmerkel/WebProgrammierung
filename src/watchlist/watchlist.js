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
        this._watchlist = section.querySelector("#watchlist > main > div");


        //damits beim ersten start nicht kracht
        if(JSON.parse(localStorage.getItem("items2"))==null){
            var arrayWatchlist=[];
            localStorage.setItem("items2",JSON.stringify(arrayWatchlist));


        }else{
            var arrayWatchlist =JSON.parse(localStorage.getItem("items2"));
            console.log(arrayWatchlist);
            this.buildData(arrayWatchlist);
        }


         //Button
         let button =  document.createElement("BUTTON");
         button.innerHTML="Button";
         this._watchlist.appendChild(button);

         button.addEventListener('click', () => {

                 arrayWatchlist.push("Lappen");
                 localStorage.setItem("items2",JSON.stringify(arrayWatchlist));
                 let data2 =JSON.parse(localStorage.getItem("items2"));

                 console.log(data2);

                 this.buildData(data2);

         });




         let content = {
            className: "watchlist",
            main: section.querySelectorAll("main > *"),

        };

       //  this.createHeader();

        // Ergebnis zurückliefern
        return content;
    }

    get title() {
        return "Watchlist";
    }

    buildData(data) {

        let div =  document.createElement("div");
        div.innerHTML=div.innerHTML+`
                <h1>`+data+ `</h1><br/>
            `;
        this._watchlist.appendChild(div);


    }




}

export default Watchlist;
