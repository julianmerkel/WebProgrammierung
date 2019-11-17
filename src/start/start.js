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

        //this._ss = section.querySelector("#start > main > div > #roundedCont > #carouselExampleIndicators > #inner > #i1");
        this._favorite = section.querySelector("#start > main > div> #roundedCont > #carouselExampleIndicators > #inner > #favorite");
        this._watchlist = section.querySelector("#start > main > div> #roundedCont > #carouselExampleIndicators > #inner > #watchlist");
        this._quiz = section.querySelector("#start > main > div> #roundedCont > #carouselExampleIndicators > #inner > #quiz");


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

            let closeButton = document.createElement("button");
             closeButton.setAttribute("class","m-3 btn btn-secondary");
             closeButton.innerHTML="&times;";
             closeButton.addEventListener("click",()=>{
                 resultContainer.innerHTML="";
             })
             resultContainer.appendChild(closeButton);


            let resultHeader = document.createElement("h3");
            resultHeader.setAttribute("class", "p-3");
            resultHeader.innerHTML="Result";
            resultContainer.appendChild(resultHeader);


            let resultRow = document.createElement("div");
            resultRow.setAttribute("class","row justify-content-start");
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



                    /* let resCol= document.createElement("div");
                    resCol.setAttribute("class","col");
                    resultRow.appendChild(resCol); */

                    let resCard = document.createElement("div");
                    resCard.setAttribute("class","card");
                    resCard.setAttribute("style","width: 15rem; background: rgba(0,0,0, 0.5)");
                    resultRow.appendChild(resCard);

                    let resCardImage = document.createElement("img");
                    resCardImage.setAttribute("class", "card-img-top");
                    resCardImage.setAttribute("width", "100%");
                    resCardImage.setAttribute("height", "130vw");
                    resCardImage.setAttribute("object-fit", "cover");
                    resCardImage.setAttribute("src", movies[i].img);
                    resCardImage.setAttribute("alt", "Card image cap");
                    resCard.appendChild(resCardImage);

                    var resCardBody = document.createElement("div");
                    resCardBody.setAttribute("class","card-body d-flex flex-column");
                    resCard.appendChild(resCardBody);
                    let resultTitle = document.createElement("a");
                    resultTitle.setAttribute("class", "card-text stretched-link mb-4");
                    resultTitle.setAttribute("style", "position: relative;");
                    resultTitle.setAttribute("href", "#/detail");
                    resultTitle.innerHTML=movies[i].title;
                    resultTitle.setAttribute("name", movies[i].title);
                    resultTitle.onclick = function (e) {
                        console.log(e.target.name);
                        localStorage.setItem("detailFilm", e.target.name);
                    }

                    resCardBody.appendChild(resultTitle);
                    var addButton = document.createElement("button");
                    addButton.setAttribute("id","b"+foundMovie);
                    addButton.setAttribute("name",foundMovie);
                    addButton.setAttribute("class","btn btn-primary mt-auto");
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
                    addButtonF.setAttribute("class","btn btn-primary mt-2");
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
                noResultText.setAttribute("class", "p-4 text-center");
                noResultText.innerHTML="Es wurden keine passenden Filme gefunden. Versuche es erneut!";
                resultRow.appendChild(noResultText);
            }



            







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






        if(arrayWatchlist.length<1){
            var iWatchlist = "https://alltimelists.com/wp-content/uploads/2019/09/Background-of-Every-Movie-812x464.jpg";
        }else{
            var randomW = Math.floor(Math.random() * arrayWatchlist.length);
            var iWatchlist = arrayWatchlist[randomW].img;
        }

        if(arrayFavorites.length<1){
            var iFavorite ="https://alltimelists.com/wp-content/uploads/2019/09/Background-of-Every-Movie-812x464.jpg";
        }else{
            var randomF = Math.floor(Math.random() * arrayFavorites.length);
            var iFavorite = arrayFavorites[randomF].img;
        }



        var iQuiz="https://www.hamburg-zwei.de/var/ezflow_site/storage/images/media/images/quiz-time/58572582-2-ger-DE/Quiz-Time_slider_rs.jpg";


        this._favorite.innerHTML +=`
                <a href="#favorites"> 
             <img class="rounded d-block w-100" src="`+iFavorite+`" style="height: 20em; filter:brightness(60%)" alt="First slide">
            <div class="carousel-caption d-none d-md-block">
           
                   <h3>Schau einen Deiner Lieblingsfilme.</h3>
                 </a>
           
        </div>
            `;

        this._watchlist.innerHTML +=`
             <a href="#watchlist">   
             <img class="rounded d-block w-100" src="`+iWatchlist+`" style="height: 20em; filter:brightness(60%)" alt="First slide">
            <div class="carousel-caption d-none d-md-block">
             
            <h3>Schau einen Film von Deiner Watchlist.</h3>
            </a>
        </div>
            `;

        this._quiz.innerHTML +=`
                <a href="#quiz">
             <img class="rounded d-block w-100" src="`+iQuiz+`" style="height: 20em; filter:brightness(60%)" alt="First slide">
            <div class="carousel-caption d-none d-md-block">
             
            <h3>Mach ein Quiz.</h3>
            </a>
        </div>
            `;





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
