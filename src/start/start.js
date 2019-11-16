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



        //Carousell
        /*
        let carouselSlide = document.createElement("div");
        carouselSlide.setAttribute("id","carouselExampleIndicators");
        carouselSlide.setAttribute("class","carousel slide");
        carouselSlide.setAttribute("data-ride","carousel");
        this._start.appendChild(carouselSlide);

        let carouselIndicators = document.createElement("ol");
        carouselIndicators.setAttribute("class","carousel-indicators");
        carouselSlide.appendChild(carouselIndicators);

        let li1 = document.createElement("li");
        li1.setAttribute("data-target","#carouselExampleIndicators");
        li1.setAttribute("data-slide-to","0");
        li1.setAttribute("class","active");

        let li2 = document.createElement("li");
        li2.setAttribute("data-target","#carouselExampleIndicators");
        li2.setAttribute("data-slide-to","1");

        let li3 = document.createElement("li");
        li3.setAttribute("data-target","#carouselExampleIndicators");
        li3.setAttribute("data-slide-to","2");

        carouselIndicators.appendChild(li1);
        carouselIndicators.appendChild(li2);
        carouselIndicators.appendChild(li3);

        let carouselInner = document.createElement("div");
        carouselInner.setAttribute("class","carousel-inner");
        carouselSlide.appendChild(carouselInner);

        let carouselItemActive = document.createElement("div");
        carouselItemActive.setAttribute("class","carousel-item active");
        carouselInner.appendChild(carouselItemActive);

        let img1 = document.createElement("img");
        img1.setAttribute("class","d-block w-100");
        img1.setAttribute("src","../../img/a4.jpg");
        img1.setAttribute("style","height: 290px; filter:brightness(60%)");
        img1.setAttribute("alt","Schau dir deine Lieblingsfilme an");
        carouselItemActive.appendChild(img1);

        let carouselCaption1 = document.createElement("div");
        carouselCaption1.setAttribute("class","carousel-caption d-none d-md-block");
        carouselItemActive.appendChild(carouselCaption1);

        let h_1 = document.createElement("h3");
        h_1.innerHTML="Schau dir einen Deiner Lieblingsfilme an.";
        carouselCaption1.appendChild(h_1);

        let carouselItem2 = document.createElement("div");
        carouselItemActive.setAttribute("class","carousel-item");
        carouselInner.appendChild(carouselItem2);

        let img2 = document.createElement("img");
        img2.setAttribute("class","d-block w-100");
        img2.setAttribute("src","../../img/a4.jpg");
        img2.setAttribute("style","height: 290px; filter:brightness(60%)");
        img2.setAttribute("alt","Schau dir einen Film von Deiner Watchlist an.");
        carouselItem2.appendChild(img2);

        let carouselCaption2 = document.createElement("div");
        carouselCaption2.setAttribute("class","carousel-caption d-none d-md-block");
        carouselItem2.appendChild(carouselCaption2);

        let h_2 = document.createElement("h3");
        h_2.innerHTML="Schau dir einen Film von Deiner Watchlist an.";
        carouselCaption2.appendChild(h_2);

        let carouselItem3 = document.createElement("div");
        carouselItem3.setAttribute("class","carousel-item");
        carouselInner.appendChild(carouselItem3);

        let img3 = document.createElement("img");
        img3.setAttribute("class","d-block w-100");
        img3.setAttribute("src","../../img/a4.jpg");
        img3.setAttribute("style","height: 290px; filter:brightness(60%)");
        img3.setAttribute("alt","Mach ein Quiz.");
        carouselItem3.appendChild(img3);

        let carouselCaption3 = document.createElement("div");
        carouselCaption3.setAttribute("class","carousel-caption d-none d-md-block");
        carouselItem3.appendChild(carouselCaption3);

        let h_3 = document.createElement("h3");
        h_3.innerHTML="Mach ein Quiz.";
        carouselCaption3.appendChild(h_3);

        let aPrev = document.createElement("a");
        aPrev.setAttribute("class","carousel-control-prev");
        aPrev.setAttribute("href","#carouselExampleIndicators");
        aPrev.setAttribute("role","button");
        aPrev.setAttribute("data-slide","prev");
        carouselInner.appendChild(aPrev);
        let prevSpan1= document.createElement("span");
        prevSpan1.setAttribute("class","carousel-control-prev-icon");
        prevSpan1.setAttribute("aria-hidden","true");
        aPrev.appendChild(prevSpan1);
        let prevSpan2 = document.createElement("span");
        prevSpan2.setAttribute("class","sr-only");
        prevSpan2.innerHTML="Previous";
        aPrev.appendChild(prevSpan2);

        let aNext = document.createElement("a");
        aNext.setAttribute("class","carousel-control-next");
        aNext.setAttribute("href","#carouselExampleIndicators");
        aNext.setAttribute("role","button");
        aNext.setAttribute("data-slide","next");
        carouselInner.appendChild(aNext);
        let nextSpan1= document.createElement("span");
        nextSpan1.setAttribute("class","carousel-control-next-icon");
        nextSpan1.setAttribute("aria-hidden","true");
        aNext.appendChild(nextSpan1);
        let nextSpan2 = document.createElement("span");
        nextSpan2.setAttribute("class","sr-only");
        nextSpan2.innerHTML="Next";
        aNext.appendChild(nextSpan2);*/

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



        var randomF = Math.floor(Math.random() * arrayFavorites.length);
        var randomW = Math.floor(Math.random() * arrayWatchlist.length);

        var iFavorite = arrayFavorites[randomF].img;
        var iWatchlist = arrayWatchlist[randomW].img;
        var iQuiz="https://www.hamburg-zwei.de/var/ezflow_site/storage/images/media/images/quiz-time/58572582-2-ger-DE/Quiz-Time_slider_rs.jpg";


        this._favorite.innerHTML +=`
                
             <img class="d-block w-100" src="`+iFavorite+`" style="height: 20em; filter:brightness(60%)" alt="First slide">
            <div class="carousel-caption d-none d-md-block">
            <a href="#favorites">
                   <h3>Schau einen Deiner Lieblingsfilme.</h3>
                 </a>
           
        </div>
            `;

        this._watchlist.innerHTML +=`
                
             <img class="d-block w-100" src="`+iWatchlist+`" style="height: 20em; filter:brightness(60%)" alt="First slide">
            <div class="carousel-caption d-none d-md-block">
             <a href="#watchlist">
            <h3>Schau einen Film von Deiner Watchlist.</h3>
            </a>
        </div>
            `;

        this._quiz.innerHTML +=`
                
             <img class="d-block w-100" src="`+iQuiz+`" style="height: 20em; filter:brightness(60%)" alt="First slide">
            <div class="carousel-caption d-none d-md-block">
             <a href="#quiz">
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
