"use strict";

import stylesheet from "./favorites.css";
import favorites from "./favorites.html";
import movies from "../movies.json";

class Favorites {

    constructor(app){
        this.app = app;
    }

    onShow() {
 
         let container = document.createElement("div");
         container.innerHTML = favorites.trim();

         var filmDetail = "Kein Film ausgewählt";
         console.log(filmDetail);
         localStorage.setItem("detailFilm", filmDetail);
 
         // Anzuzeigende HTML-Elemente ermitteln
         let section = container.querySelector("#favorites").cloneNode(true);
         this._favorites = section.querySelector("#favorites > main > div");
         this._favorites.setAttribute("id", "favoritesContainer");

          //Favorites Header
          let divcontainerHeader = document.createElement("div");
          divcontainerHeader.setAttribute("class","p-0 mb-2 rounded container überschrift");
          this._favorites.appendChild(divcontainerHeader);
  
          let br = document.createElement("br");
          divcontainerHeader.appendChild(br);
  
          let header = document.createElement("h3");
          header.setAttribute("class", "text-center");
          header.innerHTML = "Deine Favorite Movies";
          divcontainerHeader.appendChild(header);
  
          let br2 = document.createElement("br");
          divcontainerHeader.appendChild(br2);
 
 
 
         //Platzhalter
         let br3=document.createElement("br");
         this._favorites.appendChild(br3);
 
 
         //Container für Suche erzeugen
         let divcontainerSearch = document.createElement("div");
         divcontainerSearch.setAttribute("class","p-0 rounded container");
         this._favorites.appendChild(divcontainerSearch);
 
         let searchForm = document.createElement("div");
         searchForm.setAttribute("class","input-group");
         divcontainerSearch.appendChild(searchForm);
 
         let searchField = document.createElement("input");
         searchField.setAttribute("type","text");
         searchField.setAttribute("placeholder","Suche");
         searchField.setAttribute("class","form-control");
         searchForm.appendChild(searchField);
 
         let searchButton = document.createElement("button");
         searchButton.setAttribute("class","btn btn-search");
         searchButton.innerHTML="Search";
         searchForm.appendChild(searchButton);
 
         //Container für Suchergebnisse erzeugen
         let resultContainer = document.createElement("div");
         resultContainer.setAttribute("class","rounded container");
         this._favorites.appendChild(resultContainer);
 
 
 
        //Klick-Listener für Such-Button
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
                     foundMovie = movies[i].id;
 
                     let resCard = document.createElement("div");
                     resCard.setAttribute("class","card");
                     resultRow.appendChild(resCard);

                     let resCardImage = document.createElement("img");
                     resCardImage.setAttribute("class", "card-img-top");
                     resCardImage.setAttribute("src", movies[i].img);
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
                     addButton.innerHTML="Hinzufügen";
                     resCardBody.appendChild(addButton);

                    /* var movieButton = document.createElement("a");
                     movieButton.setAttribute("class", "btn btn-primary stretched-link mb-auto");
                     movieButton.setAttribute("href", "#");
                     movieButton.innerHTML = movies[i].title;
                     resCardBody.appendChild(movieButton); */
 

                     var currentB= this._favorites.querySelector("#b"+foundMovie);
 
                     currentB.onclick=function (e) {
                         console.log(e.target);
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

                         for (var i = 0; i < movies.length; i++){
                             if(movies[i].id==movieId){
                                 arrayFavorites.push(movies[i]);//§ hier ohne title
                                 localStorage.setItem("favoriteMovies",JSON.stringify(arrayFavorites));
                                 console.log(arrayFavorites);
                                 resultContainer.innerHTML="";
        
                                 let contentCard = document.createElement("div");
                                 contentCard.setAttribute("class","card");
                                 contentRow.appendChild(contentCard);
        
                                 let contentCardImage = document.createElement("img");
                                 contentCardImage.setAttribute("class", "card-img-top");
                                 contentCardImage.setAttribute("src", arrayFavorites[arrayFavorites.length-1].img);
                                 contentCard.appendChild(contentCardImage);
        
                                 var contentCardBody = document.createElement("div");
                                 contentCardBody.setAttribute("class","card-body d-flex flex-column");
                                 contentCard.appendChild(contentCardBody);
                                 let contentTitle = document.createElement("a");
                                 contentTitle.setAttribute("class", "card-text stretched-link mb-4");
                                 contentTitle.setAttribute("style", "position: relative;");
                                 contentTitle.setAttribute("href", "#/detail");
                                 contentTitle.innerHTML=arrayFavorites[arrayFavorites.length-1].title;//§ .title
                                 contentCardBody.appendChild(contentTitle);
                                 var deleteButton = document.createElement("button");
                                 deleteButton.setAttribute("id","bb"+arrayFavorites[arrayFavorites.length-1].id);
                                 deleteButton.setAttribute("name",arrayFavorites[arrayFavorites.length-1].id);
                                 deleteButton.setAttribute("class","mt-auto btn btn-outline-danger");
                                 deleteButton.innerHTML="Delete";
         
                                 contentCardBody.appendChild(deleteButton);
         
                                 var currentDelB= document.querySelector("#bb"+arrayFavorites[arrayFavorites.length-1].id);
                                 currentDelB.onclick=function (e) {
                                     var movieId = e.target.name;
                                     for (var i = 0; i < movies.length; i++) {
                                         if (movies[i].id == movieId) {
                                             contentRow.removeChild(e.target.parentNode.parentNode);
                                             for (var i=0; i<arrayFavorites.length;i++){
                                                 if (e.target.name==arrayFavorites[i].id){
                                                     console.log("eigentlich klappts")
                                                     arrayFavorites.splice(i,1);
                                                     localStorage.setItem("favoriteMovies",JSON.stringify(arrayFavorites));
                                                 }
                                             }
                                             break;
                                         }
                                     }
                                 }
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
 
          let br33=document.createElement("br");
          this._favorites.appendChild(br33);

 
 
         //Container für den Inhalt der Favorites erzeugen
         let contentContainer = document.createElement("div");
         contentContainer.setAttribute("class","pt-4 rounded container");
         contentContainer.setAttribute("id","contentContainer");
         this._favorites.appendChild(contentContainer);
 
         let contentRow = document.createElement("div");
         contentRow.setAttribute("id", "contentRow");
         contentRow.setAttribute("class","row justify-content-start");
         contentContainer.appendChild(contentRow);
 
         let br4=document.createElement("br");
         contentContainer.appendChild(br4);
         
         if(JSON.parse(localStorage.getItem("favoriteMovies"))==null){
            var arrayFavorites=[];
            localStorage.setItem("favoriteMovies",JSON.stringify(arrayFavorites));
        }else{
             var arrayFavorites =JSON.parse(localStorage.getItem("favoriteMovies"));
             console.log(arrayFavorites);
             for (var i = 0; i<arrayFavorites.length;i++){
 
 
                 let contentCard = document.createElement("div");
                 contentCard.setAttribute("class","card");
                 contentRow.appendChild(contentCard);

                 let contentCardImage = document.createElement("img");
                 contentCardImage.setAttribute("class", "card-img-top");
                 contentCardImage.setAttribute("src", arrayFavorites[i].img);
                 contentCard.appendChild(contentCardImage);
                
                 var contentCardBody = document.createElement("div");
                 contentCardBody.setAttribute("class","card-body d-flex flex-column");
                 contentCard.appendChild(contentCardBody);
                 let contentTitle = document.createElement("a");
                 contentTitle.setAttribute("class", "card-text stretched-link mb-4");
                 contentTitle.setAttribute("style", "position: relative;");
                 contentTitle.setAttribute("href", "#/detail");
                 contentTitle.innerHTML=arrayFavorites[i].title;//§ .title
                 contentTitle.setAttribute("name", arrayFavorites[i].title);

                 contentTitle.onclick = function (e) {
                    console.log(e.target.name);
                    localStorage.setItem("detailFilm", e.target.name);
                 }

                 contentCardBody.appendChild(contentTitle);
                 var deleteButton = document.createElement("button");
                 deleteButton.setAttribute("id","bb"+arrayFavorites[i].id);
                 deleteButton.setAttribute("name",arrayFavorites[i].id);
                 deleteButton.setAttribute("class","btn btn-outline-danger mt-auto");
                 deleteButton.innerHTML="Delete";
 
                 contentCardBody.appendChild(deleteButton);
 
                 console.log("kuck mal hier: "+arrayFavorites[i].id);
                 var currentDelB= this._favorites.querySelector("#bb"+arrayFavorites[i].id);
                 console.log(currentDelB);
                 currentDelB.onclick=function (e) {
                     console.log(e.target.name);
                     var movieId = e.target.name;
                     for (var i = 0; i < movies.length; i++) {
                         if (movies[i].id == movieId) {
                             contentRow.removeChild(e.target.parentNode.parentNode);
                             for (var i=0; i<arrayFavorites.length;i++){
                                if (e.target.name==arrayFavorites[i].id){
                                    console.log("eigentlich klappts")
                                    arrayFavorites.splice(i,1);
                                    console.log(arrayFavorites);
                                    localStorage.setItem("favoriteMovies",JSON.stringify(arrayFavorites));
                                }
                            }   
                             break;
                         }
                     }
 
                 }
             }
         }

          let content = {
             className: "favorites",
             main: section.querySelectorAll("main > *"),
 
         };

         function showMovieDetail(){
            console.log("Movie Detail izz da");
        }
 
 
 
         // Ergebnis zurückliefern
         return content;
     }
 
     get title() {
         return "Favorites";
     }
}



export default Favorites;
