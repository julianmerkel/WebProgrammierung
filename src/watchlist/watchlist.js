"use strict";

import stylesheet from "./watchlist.css";
import watchlist from "./watchlist.html";
import movies from "../movies";

class Watchlist {

    constructor(app){
        this.app = app;

    }

        onShow() {

       /*let test=[
           {
               "id":"1",
               "name":"Name"
           },
           {
               "id":"2",
               "name":"namee"
           }
       ]

            var str = JSON.stringify(test);
            console.log("stringified: "+str);
            var parsed=JSON.parse(str);
            console.log("parsed: "+parsed[1].id);*/

        let container = document.createElement("div");
        container.innerHTML = watchlist.trim();

        // Anzuzeigende HTML-Elemente ermitteln
        let section = container.querySelector("#watchlist").cloneNode(true);
        this._watchlist = section.querySelector("#watchlist > main > div");

        //Watchlist Header
        let divcontainerHeader = document.createElement("div");
        divcontainerHeader.setAttribute("class","p-0 mb-2 rounded container überschrift");
        this._watchlist.appendChild(divcontainerHeader);

        let br=document.createElement("br");
        divcontainerHeader.appendChild(br);

        let header = document.createElement("h3");
        header.setAttribute("id", "watchlistHeader");
        header.setAttribute("class", "text-center");
        header.innerHTML="Deine Watchlist";
        divcontainerHeader.appendChild(header);
        console.log(header.value);

        let br2=document.createElement("br");
        divcontainerHeader.appendChild(br2);


        //space
        let br3=document.createElement("br");
        this._watchlist.appendChild(br3);


        //Search
        let divcontainerSearch = document.createElement("div");
        divcontainerSearch.setAttribute("class","p-0 rounded container");
        this._watchlist.appendChild(divcontainerSearch);

        let searchForm = document.createElement("div");
        searchForm.setAttribute("class","input-group");
        divcontainerSearch.appendChild(searchForm);

        let searchField = document.createElement("input");
        searchField.setAttribute("type","text");
        searchField.setAttribute("placeholder","Suche einen Film...");
        searchField.setAttribute("class","form-control");
        searchForm.appendChild(searchField);

        let searchButton = document.createElement("button");
        searchButton.setAttribute("class","btn btn-search");
        searchButton.innerHTML="Suchen";
        searchForm.appendChild(searchButton);

        //result
        let resultContainer = document.createElement("div");
        resultContainer.setAttribute("class","rounded container");
        resultContainer.setAttribute("id", "resContainer");
        this._watchlist.appendChild(resultContainer);




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
             resultHeader.innerHTML="Ergebnis";
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


                    resCardBody.appendChild(addButton);



                    var currentB= this._watchlist.querySelector("#b"+foundMovie);

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
                                arrayWatchlist.push(movies[i]);//§ hier ohne title
                                localStorage.setItem("items2",JSON.stringify(arrayWatchlist));
                                console.log(arrayWatchlist);
                                resultContainer.innerHTML="";


                                let contentCard = document.createElement("div");
                                contentCard.setAttribute("class","card");
                                contentRow.appendChild(contentCard);

                                let contentCardImage = document.createElement("img");
                                contentCardImage.setAttribute("class", "card-img-top");
                                contentCardImage.setAttribute("width", "100%");
                                contentCardImage.setAttribute("height", "130vw");
                                contentCardImage.setAttribute("object-fit", "cover");
                                contentCardImage.setAttribute("src", arrayWatchlist[arrayWatchlist.length-1].img);
                                contentCardImage.setAttribute("alt", "Card image cap");
                                contentCard.appendChild(contentCardImage);

                                var contentCardBody = document.createElement("div");
                                contentCardBody.setAttribute("class","card-body d-flex flex-column");
                                contentCard.appendChild(contentCardBody);
                                let contentTitle = document.createElement("a");
                                contentTitle.setAttribute("class", "card-text stretched-link mb-4");
                                contentTitle.setAttribute("style", "position: relative;");
                                contentTitle.setAttribute("href", "#/detail");
                                contentTitle.innerHTML=arrayWatchlist[arrayWatchlist.length-1].title;//§ .title
                                contentTitle.setAttribute("name", arrayWatchlist[arrayWatchlist.length-1].title);

                                contentTitle.onclick = function (e) {
                                    console.log(e.target.name);
                                    localStorage.setItem("detailFilm", e.target.name);
                                }

                                contentCardBody.appendChild(contentTitle);
                                var deleteButton = document.createElement("button");
                                deleteButton.setAttribute("id","bb"+arrayWatchlist[arrayWatchlist.length-1].id);
                                deleteButton.setAttribute("name",arrayWatchlist[arrayWatchlist.length-1].id);
                                deleteButton.setAttribute("class","btn btn-outline-danger");
                                deleteButton.innerHTML="Löschen";


                                contentCardBody.appendChild(deleteButton);




                                console.log("kuck mal hier: "+arrayWatchlist[arrayWatchlist.length-1].id);
                                var currentDelB= document.querySelector("#bb"+arrayWatchlist[arrayWatchlist.length-1].id);
                                console.log(currentDelB);
                                currentDelB.onclick=function (e) {
                                    console.log(e.target.name);
                                    var movieId = e.target.name;
                                    for (var i = 0; i < movies.length; i++) {
                                        if (movies[i].id == movieId) {
                                            //arrayWatchlist.push(movies[i].title);//§ hier ohne title
                                            //localStorage.setItem("items2", JSON.stringify(arrayWatchlist));
                                            //console.log(arrayWatchlist);
                                            console.log("delete: "+movies[i].title);
                                            console.log("deleteELEMENT: "+currentDelB.parentNode);
                                            contentRow.removeChild(e.target.parentNode.parentNode);
                                            for (var i=0; i<arrayWatchlist.length;i++){
                                                if (e.target.name==arrayWatchlist[i].id){
                                                    console.log("eigentlich klappts")
                                                    arrayWatchlist.splice(i,1);
                                                    localStorage.setItem("items2",JSON.stringify(arrayWatchlist));

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
                    noResultText.innerHTML="No movies found...";
                    resultRow.appendChild(noResultText);
                }


        })

         let br33=document.createElement("br");
         this._watchlist.appendChild(br33);


        //content
        let contentContainer = document.createElement("div");
        contentContainer.setAttribute("id","contentContainer");
        contentContainer.setAttribute("class","pt-4 rounded container");
        this._watchlist.appendChild(contentContainer);

        let contentRow = document.createElement("div");
        contentRow.setAttribute("class","row");
        contentContainer.appendChild(contentRow);

        let br4=document.createElement("br");
        contentContainer.appendChild(br4);


        if(JSON.parse(localStorage.getItem("items2"))==null){
            var arrayWatchlist=[];
            localStorage.setItem("items2",JSON.stringify(arrayWatchlist));


        }else{
            var arrayWatchlist =JSON.parse(localStorage.getItem("items2"));
            console.log(arrayWatchlist);
            for (var i = 0; i<arrayWatchlist.length;i++){

                let contentCard = document.createElement("div");
                contentCard.setAttribute("class","card");
                contentRow.appendChild(contentCard);

                let contentCardImage = document.createElement("img");
                contentCardImage.setAttribute("class", "card-img-top");
                contentCardImage.setAttribute("src", arrayWatchlist[i].img);
                contentCardImage.setAttribute("alt", "Card image cap");
                contentCardImage.setAttribute("width", "100%");
                contentCardImage.setAttribute("height", "130vw");
                contentCardImage.setAttribute("object-fit", "cover");
                contentCard.appendChild(contentCardImage);

                var contentCardBody = document.createElement("div");
                contentCardBody.setAttribute("class","card-body d-flex flex-column");
                contentCard.appendChild(contentCardBody);
                let contentTitle = document.createElement("a");
                contentTitle.setAttribute("class", "card-text stretched-link mb-4");
                    contentTitle.setAttribute("style", "position: relative;");
                    contentTitle.setAttribute("href", "#/detail");
                    contentTitle.innerHTML=arrayWatchlist[i].title;//§ .title
                    contentTitle.setAttribute("name", arrayWatchlist[i].title);

                    contentTitle.onclick = function (e) {
                    console.log(e.target.name);
                    localStorage.setItem("detailFilm", e.target.name);
                }
                
                contentCardBody.appendChild(contentTitle);
                var deleteButton = document.createElement("button");
                deleteButton.setAttribute("id","bb"+arrayWatchlist[i].id);
                deleteButton.setAttribute("name",arrayWatchlist[i].id);
                deleteButton.setAttribute("class","btn btn-outline-danger mt-auto");
                deleteButton.innerHTML="Löschen";


                contentCardBody.appendChild(deleteButton);




                console.log("kuck mal hier: "+arrayWatchlist[i].id);
                var currentDelB= this._watchlist.querySelector("#bb"+arrayWatchlist[i].id);
                console.log(currentDelB);
                currentDelB.onclick=function (e) {
                    console.log(e.target.name);
                    var movieId = e.target.name;
                    for (var i = 0; i < movies.length; i++) {
                        if (movies[i].id == movieId) {
                            console.log(i);
                            //arrayWatchlist.push(movies[i].title);//§ hier ohne title
                            //localStorage.setItem("items2", JSON.stringify(arrayWatchlist));
                            //console.log(arrayWatchlist);
                            //console.log("delete: "+movies[i].title);
                            //console.log("deleteELEMENT: "+currentDelB.parentNode.parentNode.parentNode);
                            console.log("e.target.name= "+e.target.name);
                            console.log("arrayWatchlist[i].id= "+arrayWatchlist);

                            console.log("kakakakaakaakak");
                            contentRow.removeChild(e.target.parentNode.parentNode);

                            for (var i=0; i<arrayWatchlist.length;i++){
                                if (e.target.name==arrayWatchlist[i].id){
                                    console.log("eigentlich klappts")
                                    arrayWatchlist.splice(i,1);
                                    console.log(arrayWatchlist);
                                    localStorage.setItem("items2",JSON.stringify(arrayWatchlist));

                                }
                            }

                            break;


                        }
                    }

                }



            }

        }






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

export default Watchlist;
