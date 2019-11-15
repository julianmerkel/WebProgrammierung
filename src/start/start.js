"use strict";

import stylesheet from "./start.css";
import start from "./start.html";
import movies from "../movies";

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
        this._start = section.querySelector("#start > main > div");



        //Search
        let divcontainerSearch = document.createElement("div");
        divcontainerSearch.setAttribute("class","p-2 rounded container");
        this._start.appendChild(divcontainerSearch);

        let searchForm = document.createElement("div");
        searchForm.setAttribute("class","input-group");
        searchForm.setAttribute("style","width: 100%");
        divcontainerSearch.appendChild(searchForm);

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

        //result
        let resultContainer = document.createElement("div");
        resultContainer.setAttribute("class","rounded container");
        resultContainer.setAttribute("id", "resContainer");
        resultContainer.setAttribute("style","background: rgba(105,105,105, 0.5)");
        this._start.appendChild(resultContainer);




        searchButton.addEventListener("click",()=>{
            console.log(searchField.value);
            var resultMovie = searchField.value;

            resultContainer.innerHTML="";

            let resultHeader = document.createElement("h3");
            resultHeader.innerHTML="Result";
            resultContainer.appendChild(resultHeader);

            let resultRow = document.createElement("div");
            resultRow.setAttribute("class","row");
            resultContainer.appendChild(resultRow);



            var foundMovie="";


            var foundone=false;

            for (var i =0; i<movies.length; i++){
                if(movies[i].title.includes(resultMovie)&&resultMovie!=""){
                    foundone=true;
                    console.log("if");
                    console.log("icludes!");


                    foundMovie = movies[i].id;

                    console.log("found: "+foundMovie);



                    let resCol= document.createElement("div");
                    resCol.setAttribute("class","col");
                    resultRow.appendChild(resCol);

                    let resCard = document.createElement("div");
                    resCard.setAttribute("class","card");
                    resCard.setAttribute("style","width: 15rem; background: rgba(0,0,0, 0.5)");
                    resCol.appendChild(resCard);

                    let resCardImage = document.createElement("img");
                    resCardImage.setAttribute("class", "card-img-top");
                    resCardImage.setAttribute("width", "100%");
                    resCardImage.setAttribute("height", "130vw");
                    resCardImage.setAttribute("object-fit", "cover");
                    resCardImage.setAttribute("src", movies[i].img);
                    resCardImage.setAttribute("alt", "Card image cap");
                    resCard.appendChild(resCardImage);

                    var resCardBody = document.createElement("div");
                    resCardBody.setAttribute("class","card-body");
                    resCard.appendChild(resCardBody);
                    let resultTitle = document.createElement("h5");
                    resultTitle.innerHTML=movies[i].title;
                    resCardBody.appendChild(resultTitle);
                    var addButton = document.createElement("button");
                    addButton.setAttribute("id","b"+foundMovie);
                    addButton.setAttribute("name",foundMovie);
                    addButton.setAttribute("class","btn purple-btn");
                    //addButton.setAttribute("style","color:rgba(0, 0, 0); background: blueviolet");
                    addButton.innerHTML="Add to Watchlist";


                    resCardBody.appendChild(addButton);

                    //add to watchlist

                    var currentB= this._start.querySelector("#b"+foundMovie);

                    currentB.onclick=function (e) {
                        console.log(e.target.name);
                        var movieId = e.target.name;
                        for(var i = 0; i < arrayWatchlist.length; i++){
                            if(arrayWatchlist[i].id == movieId){
                                movieId = "doppelt";
                                console.log(movieId);

                                //Alert wird erstellt
                                let alertDouble = document.createElement("div");
                                alertDouble.setAttribute("class","alert alert-warning alert-dismissible fade show");
                                alertDouble.setAttribute("role", "alert");
                                alertDouble.innerHTML = "Dieser Film befindet sich bereits in Deiner Liste!";
                                let alertButton = document.createElement("button");
                                alertButton.setAttribute("class", "close");
                                alertButton.setAttribute("data-dismiss", "alert");
                                alertButton.setAttribute("aria-label", "Close");
                                let alertSpan = document.createElement("span");
                                alertSpan.setAttribute("aira-hidden", "true");
                                alertSpan.innerHTML = "&times;";
                                alertButton.appendChild(alertSpan);
                                alertDouble.appendChild(alertButton);
                                resultContainer.innerHTML="";
                                resultContainer.appendChild(alertDouble);
                            }
                        }
                        for (var i =0; i<movies.length;i++){
                            if(movies[i].id==movieId){
                                console.log("ES HACKT")
                                arrayWatchlist.push(movies[i]);//§ hier ohne title
                                localStorage.setItem("items2",JSON.stringify(arrayWatchlist));
                                console.log(arrayWatchlist);
                                resultContainer.innerHTML="";
                            }
                        }

                    }

                    //add to favorites
                    var addButtonF = document.createElement("button");
                    addButtonF.setAttribute("id","bf"+foundMovie);
                    addButtonF.setAttribute("name",foundMovie);
                    addButtonF.setAttribute("class","btn purple-btn mt-2");
                    addButtonF.innerHTML="Add to Favorites";



                    resCardBody.appendChild(addButtonF);

                    //add to watchlist

                    var currentBF= this._start.querySelector("#bf"+foundMovie);

                    currentBF.onclick=function (e) {
                        console.log(e.target.name);
                        var movieId = e.target.name;
                        for(var i = 0; i < arrayFavorites.length; i++){
                            if(arrayFavorites[i].id == movieId){
                                movieId = "doppelt";
                                console.log(movieId);

                                //Alert wird erstellt
                                let alertDouble = document.createElement("div");
                                alertDouble.setAttribute("class","alert alert-warning alert-dismissible fade show");
                                alertDouble.setAttribute("role", "alert");
                                alertDouble.innerHTML = "Dieser Film befindet sich bereits in Deiner Liste!";
                                let alertButton = document.createElement("button");
                                alertButton.setAttribute("class", "close");
                                alertButton.setAttribute("data-dismiss", "alert");
                                alertButton.setAttribute("aria-label", "Close");
                                let alertSpan = document.createElement("span");
                                alertSpan.setAttribute("aira-hidden", "true");
                                alertSpan.innerHTML = "&times;";
                                alertButton.appendChild(alertSpan);
                                alertDouble.appendChild(alertButton);
                                resultContainer.innerHTML="";
                                resultContainer.appendChild(alertDouble);
                            }
                        }
                        for (var i =0; i<movies.length;i++){
                            if(movies[i].id==movieId){
                                console.log("ES HACKT")
                                arrayFavorites.push(movies[i]);//§ hier ohne title
                                localStorage.setItem("favoriteMovies",JSON.stringify(arrayFavorites));
                                console.log(arrayFavorites);
                                resultContainer.innerHTML="";
                            }
                        }

                    }



                }
            }


            if(foundone==false){
                console.log("else");
                let noResultText = document.createElement("h5");
                noResultText.innerHTML="No movies found...";
                resultRow.appendChild(noResultText);
            }



            let closeButton = document.createElement("button");
            closeButton.setAttribute("class","btn btn-secondary");
            closeButton.innerHTML="Close";
            closeButton.addEventListener("click",()=>{
                resultContainer.innerHTML="";
            })
            resultContainer.appendChild(closeButton);







        })

        if(JSON.parse(localStorage.getItem("items2"))==null){
            var arrayWatchlist=[];
            localStorage.setItem("items2",JSON.stringify(arrayWatchlist));


        }else{
            var arrayWatchlist =JSON.parse(localStorage.getItem("items2"));
            console.log(arrayWatchlist);

        }

        if(JSON.parse(localStorage.getItem("favoriteMovies"))==null){
            var arrayFavorites=[];
            localStorage.setItem("favoriteMovies",JSON.stringify(arrayFavorites));
        }else {
            var arrayFavorites = JSON.parse(localStorage.getItem("favoriteMovies"));
            console.log(arrayFavorites);
        }




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
