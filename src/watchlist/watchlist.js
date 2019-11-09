"use strict";

import stylesheet from "./watchlist.css";
import watchlist from "./watchlist.html";
import movies from "../movies";

class Watchlist {

    constructor(app){
        this.app = app;

    }

        onShow() {

       function logg(){
             var res;
             for (var i =0; i<movies.length; i++){
                 if(movies[i].id=="2"){
                     res=movies[i].title;
                     return res;
                 }
             }
         }

         console.log(logg());

        let container = document.createElement("div");
        container.innerHTML = watchlist.trim();

        // Anzuzeigende HTML-Elemente ermitteln
        let section = container.querySelector("#watchlist").cloneNode(true);
        this._watchlist = section.querySelector("#watchlist > main > div");

        let divcontainer = document.createElement("div");
        divcontainer.setAttribute("class","container");
        this._watchlist.appendChild(divcontainer);

        let searchForm = document.createElement("div");
        searchForm.setAttribute("class","input-group");
        searchForm.setAttribute("style","width: 100%");
        divcontainer.appendChild(searchForm);

        let searchField = document.createElement("input");
        searchField.setAttribute("type","text");
        searchField.setAttribute("placeholder","search");
        searchField.setAttribute("style","color:aliceblue; background: rgba(255, 255, 255, 0.3)");
        searchField.setAttribute("class","form-control");
        searchForm.appendChild(searchField);

        let searchButton = document.createElement("button");
        searchButton.setAttribute("style","color:blueviolet; background: rgba(0, 0, 0,0.7)");
        searchButton.setAttribute("class","btn");
        searchButton.innerHTML="Search";
        searchForm.appendChild(searchButton);

        searchButton.addEventListener("click",()=>{
            console.log(searchField.value);
        })

         let button =  document.createElement("BUTTON");
         button.innerHTML="Plus";
         this._watchlist.appendChild(button);

         let button2 =  document.createElement("BUTTON");
         button2.innerHTML="Minus";
         this._watchlist.appendChild(button2);

        //damits beim ersten start nicht kracht
        if(JSON.parse(localStorage.getItem("items2"))==null){
            var arrayWatchlist=[];
            localStorage.setItem("items2",JSON.stringify(arrayWatchlist));


        }else{
            var arrayWatchlist =JSON.parse(localStorage.getItem("items2"));
            console.log(arrayWatchlist);
            for (var i = 0; i<arrayWatchlist.length;i++){
                this.buildData(arrayWatchlist[i]);
            }

        }


         //Button


         button.addEventListener('click', () => {

             arrayWatchlist.push("Lappen");

             localStorage.setItem("items2",JSON.stringify(arrayWatchlist));
             let data2 =JSON.parse(localStorage.getItem("items2"));

             console.log(data2);

             this.buildData(arrayWatchlist[arrayWatchlist.length-1]);

         });

         button2.addEventListener('click', () => {

             arrayWatchlist.pop()

             localStorage.setItem("items2",JSON.stringify(arrayWatchlist));
             let data2 =JSON.parse(localStorage.getItem("items2"));
             location.reload();


         });




         let content = {
            className: "watchlist",
            main: section.querySelectorAll("main > *"),

        };



        // Ergebnis zurückliefern
        return content;
    }

    get title() {
        return "Watchlist";
    }

    buildData(data) {

        let div =  document.createElement("div");
        div.setAttribute("id",data);
        div.innerHTML=div.innerHTML+`
                <h1>`+data+ `</h1><br/>
            `;
        this._watchlist.appendChild(div);


    }




}

export default Watchlist;
