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

        //Watchlist Header
        let divcontainerHeader = document.createElement("div");
        divcontainerHeader.setAttribute("class","container");
        divcontainerHeader.setAttribute("style","background: rgba(105,105,105, 0.5)");
        this._watchlist.appendChild(divcontainerHeader);

        let br=document.createElement("br");
        divcontainerHeader.appendChild(br);

        let header = document.createElement("h3");
        header.innerHTML="Watchlist";
        divcontainerHeader.appendChild(header);

        let br2=document.createElement("br");
        divcontainerHeader.appendChild(br2);


        //space
        let br3=document.createElement("br");
        this._watchlist.appendChild(br3);


        //Search
        let divcontainerSearch = document.createElement("div");
        divcontainerSearch.setAttribute("class","container");
        this._watchlist.appendChild(divcontainerSearch);

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
        this._watchlist.appendChild(resultContainer);




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
             var resultList=[];
            for (var i =0; i<movies.length; i++){
                if(movies[i].title.includes(resultMovie)&&resultMovie!=""){
                    foundone=true;
                    console.log("if");
                    console.log("icludes!");
                    //arrayWatchlist.push(movies[i].id);
                    //localStorage.setItem("items2",JSON.stringify(arrayWatchlist));
                    //console.log(arrayWatchlist);

                    foundMovie = movies[i].id;
                    resultList.push(foundMovie);
                    console.log("found: "+foundMovie);



                    let resCol= document.createElement("div");
                    resCol.setAttribute("class","col");
                    resultRow.appendChild(resCol);

                    let resCard = document.createElement("div");
                    resCard.setAttribute("class","card");
                    resCard.setAttribute("style","width: 15rem; background: rgba(0,0,0, 0.5)");
                    resCol.appendChild(resCard);
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



                    var currentB= this._watchlist.querySelector("#b"+foundMovie);

                    currentB.onclick=function (e) {
                        console.log(e.target.name);
                        var movieId = e.target.name;
                        for (var i =0; i<movies.length;i++){
                            if(movies[i].id==movieId){
                                arrayWatchlist.push(movies[i].title);
                                localStorage.setItem("items2",JSON.stringify(arrayWatchlist));
                                console.log(arrayWatchlist);

                            }
                        }
                        //this.buildData(contentdiv,arrayWatchlist[arrayWatchlist.length-1]);
                        let contentCol = document.createElement("div");
                        contentCol.setAttribute("class","col");
                        contentRow.appendChild(contentCol);
                        console.log("lappen???")


                        let contentCard = document.createElement("div");
                        contentCard.setAttribute("class","card");
                        contentCard.setAttribute("style","width: 15rem; background: rgba(0,0,0, 0.5)");
                        contentCol.appendChild(contentCard);
                        var contentCardBody = document.createElement("div");
                        contentCardBody.setAttribute("class","card-body");
                        contentCard.appendChild(contentCardBody);
                        let contentTitle = document.createElement("h5");
                        contentTitle.innerHTML=arrayWatchlist[arrayWatchlist.length-1];
                        contentCardBody.appendChild(contentTitle);
                        var deleteButton = document.createElement("button");
                        deleteButton.setAttribute("id","b"+foundMovie);
                        deleteButton.setAttribute("name",foundMovie);
                        deleteButton.setAttribute("class","btn btn-danger");
                        deleteButton.innerHTML="Delete";


                        contentCardBody.appendChild(deleteButton);





                        //-----------

                        /*
                        let div =  document.createElement("div");
                        div.setAttribute("id",arrayWatchlist[arrayWatchlist.length-1]);
                        let movieView = document.createElement("h3");
                        movieView.innerHTML=arrayWatchlist[arrayWatchlist.length-1];
                        div.appendChild(movieView);
                        let br = document.createElement("br");
                        div.appendChild(br);
                        contentContainer.appendChild(div);*/

                    }



                }
            }
/*
            console.log(resultList);
            for (var i=0;i<resultList.length;i++){
                console.log("ähmmm: "+this._watchlist.querySelector("#b"+resultList[i]));
                var currentB= this._watchlist.querySelector("#b"+resultList[i]);
                currentB.addEventListener("click",()=>{
                    console.log(currentB.getAttribute("id"));
                })

            }*/

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
         this._watchlist.appendChild(br33);


        //content
        let contentContainer = document.createElement("div");
        contentContainer.setAttribute("class","container");
        contentContainer.setAttribute("style","background: rgba(105,105,105, 0.5)");
        this._watchlist.appendChild(contentContainer);

        let contentRow = document.createElement("div");
        contentRow.setAttribute("class","row");
        contentContainer.appendChild(contentRow);

        let br4=document.createElement("br");
        contentContainer.appendChild(br4);

        //ANFANG content





        /////////////ENDE content



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
                this.buildData(contentContainer,arrayWatchlist[i]);
            }

        }


         //Button


         button.addEventListener('click', () => {

             arrayWatchlist.push("Lappen");

             localStorage.setItem("items2",JSON.stringify(arrayWatchlist));
             let data2 =JSON.parse(localStorage.getItem("items2"));

             console.log(data2);

             this.buildData(contentContainer,arrayWatchlist[arrayWatchlist.length-1]);

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
