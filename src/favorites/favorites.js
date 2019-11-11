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
 
         // Anzuzeigende HTML-Elemente ermitteln
         let section = container.querySelector("#favorites").cloneNode(true);
         this._favorites = section.querySelector("#favorites > main > div");

         // Test
        

 
         //Watchlist Header
         let divcontainerHeader = document.createElement("div");
         divcontainerHeader.setAttribute("class","container");
         divcontainerHeader.setAttribute("style","background: rgba(105,105,105, 0.5)");
         this._favorites.appendChild(divcontainerHeader);
 
         let br = document.createElement("br");
         divcontainerHeader.appendChild(br);
 
         let header = document.createElement("h3");
         header.innerHTML = "Favorites";
         divcontainerHeader.appendChild(header);
 
         let br2 = document.createElement("br");
         divcontainerHeader.appendChild(br2);
 
 
         //space
         let br3=document.createElement("br");
         this._favorites.appendChild(br3);
 
 
         //Search
         let divcontainerSearch = document.createElement("div");
         divcontainerSearch.setAttribute("class","container");
         this._favorites.appendChild(divcontainerSearch);
 
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
         resultContainer.setAttribute("class","container");
         resultContainer.setAttribute("style","background: rgba(105,105,105, 0.5)");
         this._favorites.appendChild(resultContainer);
 
 
 
 
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
                     addButton.setAttribute("class","btn btn-primary");
                     addButton.innerHTML="Add";
 
 
                     resCardBody.appendChild(addButton);
 
 
 
                     var currentB= this._favorites.querySelector("#b"+foundMovie);
 
                     currentB.onclick=function (e) {
                         console.log(e.target.name);
                         var movieId = e.target.name;
                         for (var i =0; i<movies.length;i++){
                             if(movies[i].id==movieId){
                                 arrayFavorites.push(movies[i]);//§ hier ohne title
                                 localStorage.setItem("items2",JSON.stringify(arrayFavorites));
                                 console.log(arrayFavorites);
 
                             }
                         }
 
                         resultContainer.innerHTML="";
 
                         let contentCol = document.createElement("div");
                         contentCol.setAttribute("class","col");
                         contentRow.appendChild(contentCol);
                         console.log("lappen???")
 
 
                         let contentCard = document.createElement("div");
                         contentCard.setAttribute("class","card");
                         contentCard.setAttribute("style","width: 15rem; background: rgba(0,0,0, 0.5)");
                         contentCol.appendChild(contentCard);

                         let contentCardImage = document.createElement("img");
                         contentCardImage.setAttribute("class", "card-img-top");
                         contentCardImage.setAttribute("src", arrayFavorites[arrayFavorites.length-1].img);
                         contentCardImage.setAttribute("alt", "Card image cap");
                         contentCard.appendChild(contentCardImage);

                         var contentCardBody = document.createElement("div");
                         contentCardBody.setAttribute("class","card-body");
                         contentCard.appendChild(contentCardBody);
                         let contentTitle = document.createElement("h5");
                         contentTitle.innerHTML=arrayFavorites[arrayFavorites.length-1].title;//§ .title
                         contentCardBody.appendChild(contentTitle);
                         var deleteButton = document.createElement("button");
                         deleteButton.setAttribute("id","bb"+arrayFavorites[arrayFavorites.length-1].id);
                         deleteButton.setAttribute("name",arrayFavorites[arrayFavorites.length-1].id);
                         deleteButton.setAttribute("class","btn btn-danger");
                         deleteButton.innerHTML="Delete";
 
 
                         contentCardBody.appendChild(deleteButton);
 
 
 
 
                         console.log("kuck mal hier: "+arrayFavorites[arrayFavorites.length-1].id);
                         var currentDelB= document.querySelector("#bb"+arrayFavorites[arrayFavorites.length-1].id);
                         console.log(currentDelB);
                         currentDelB.onclick=function (e) {
                             console.log(e.target.name);
                             var movieId = e.target.name;
                             for (var i = 0; i < movies.length; i++) {
                                 if (movies[i].id == movieId) {
                                     //arrayFavorites.push(movies[i].title);//§ hier ohne title
                                     //localStorage.setItem("items2", JSON.stringify(arrayFavorites));
                                     //console.log(arrayFavorites);
                                     console.log("delete: "+movies[i].title);
                                     console.log("deleteELEMENT: "+currentDelB.parentNode);
                                     contentRow.removeChild(e.target.parentNode.parentNode.parentNode);
                                     for (var i=0; i<arrayFavorites.length;i++){
                                         if (e.target.name==arrayFavorites[i].id){
                                             console.log("eigentlich klappts")
                                             arrayFavorites.splice(i,1);
                                             localStorage.setItem("items2",JSON.stringify(arrayFavorites));
 
                                         }
                                     }
                                     break;
 
 
 
                                 }
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
 
          let br33=document.createElement("br");
          this._favorites.appendChild(br33);
 
 
         //content
         let contentContainer = document.createElement("div");
         contentContainer.setAttribute("class","container");
         contentContainer.setAttribute("style","background: rgba(105,105,105, 0.5)");
         this._favorites.appendChild(contentContainer);
 
         let contentRow = document.createElement("div");
         contentRow.setAttribute("class","row");
         contentContainer.appendChild(contentRow);
 
         let br4=document.createElement("br");
         contentContainer.appendChild(br4);
 
 
         if(JSON.parse(localStorage.getItem("items2"))==null){
             var arrayFavorites=[];
             localStorage.setItem("items2",JSON.stringify(arrayFavorites));
 
 
         }else{
             var arrayFavorites =JSON.parse(localStorage.getItem("items2"));
             console.log(arrayFavorites);
             for (var i = 0; i<arrayFavorites.length;i++){
 
                 let contentCol = document.createElement("div");
                 contentCol.setAttribute("class","col");
                 contentRow.appendChild(contentCol);
                 console.log("lappen???")
 
 
                 let contentCard = document.createElement("div");
                 contentCard.setAttribute("class","card");
                 contentCard.setAttribute("style","width: 15rem; background: rgba(0,0,0, 0.5)");
                 contentCol.appendChild(contentCard);

                 let contentCardImage = document.createElement("img");
                 contentCardImage.setAttribute("class", "card-img-top");
                 contentCardImage.setAttribute("src", arrayFavorites[arrayFavorites.length-1].img);
                 contentCardImage.setAttribute("alt", "Card image cap");
                 contentCard.appendChild(contentCardImage);

                 var contentCardBody = document.createElement("div");
                 contentCardBody.setAttribute("class","card-body");
                 contentCard.appendChild(contentCardBody);
                 let contentTitle = document.createElement("h5");
                 contentTitle.innerHTML=arrayFavorites[i].title;//§ .title
                 contentCardBody.appendChild(contentTitle);
                 var deleteButton = document.createElement("button");
                 deleteButton.setAttribute("id","bb"+arrayFavorites[i].id);
                 deleteButton.setAttribute("name",arrayFavorites[i].id);
                 deleteButton.setAttribute("class","btn btn-danger");
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
                             console.log(i);
                             //arrayFavorites.push(movies[i].title);//§ hier ohne title
                             //localStorage.setItem("items2", JSON.stringify(arrayFavorites));
                             //console.log(arrayFavorites);
                             //console.log("delete: "+movies[i].title);
                             //console.log("deleteELEMENT: "+currentDelB.parentNode.parentNode.parentNode);
                             console.log("e.target.name= "+e.target.name);
                             console.log("arrayFavorites[i].id= "+arrayFavorites);
 
                             console.log("kakakakaakaakak");
                             contentRow.removeChild(e.target.parentNode.parentNode.parentNode);
 
                             for (var i=0; i<arrayFavorites.length;i++){
                                 if (e.target.name==arrayFavorites[i].id){
                                     console.log("eigentlich klappts")
                                     arrayFavorites.splice(i,1);
                                     console.log(arrayFavorites);
                                     localStorage.setItem("items2",JSON.stringify(arrayFavorites));
 
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
 
 
 
         // Ergebnis zurückliefern
         return content;
     }
 
     get title() {
         return "Favorites";
     }
 
     buildData(contentdiv,data) {
 
         let div =  document.createElement("div");
         div.setAttribute("id",data);
         let movieView = document.createElement("h3");
         movieView.innerHTML=data;
         div.appendChild(movieView);
         let br = document.createElement("br");
         div.appendChild(br);
         contentdiv.appendChild(div);
 
 
     }
    }

export default Favorites;
