"use strict";

import stylesheet from "./genre.css";
import genre from "./genre.html";
import movies from "../movies.json";

class Genre {

    constructor(app){
        this.app = app;
    }
    
    onShow() {
        //create Container from imported HTML
        let container = document.createElement("div");
        container.innerHTML = genre.trim();
        
        // Anzuzeigende HTML-Elemente ermitteln
        
        let section = container.querySelector("#genre").cloneNode(true);
        this._listElement = section.querySelector("#genre > main > div");
        this._accordionElementAbenteuer = section.querySelector("#genre > main > #accordion > #card > #headingAbenteuer > #collapseAbenteuer >.card-body > #row");
        this._accordionElementAction = section.querySelector("#genre > main > #accordion > #card > #headingAction > #collapseAction >.card-body > #row");
        this._accordionElementDrama = section.querySelector("#genre > main > #accordion > #card > #headingDrama > #collapseDrama >.card-body > #row");
        this._accordionElementHorror = section.querySelector("#genre > main > #accordion > #card > #headingHorror > #collapseHorror >.card-body > #row");
        this._accordionElementFamilie = section.querySelector("#genre > main > #accordion > #card > #headingFamilie > #collapseFamilie >.card-body > #row");
        this._accordionElementFantasy = section.querySelector("#genre > main > #accordion > #card > #headingFantasy > #collapseFantasy >.card-body > #row");
        this._accordionElementKomödien = section.querySelector("#genre > main > #accordion > #card > #headingKomödien > #collapseKomödien >.card-body > #row");
        this._accordionElementKrimis = section.querySelector("#genre > main > #accordion > #card > #headingKrimis > #collapseKrimis >.card-body > #row");
        this._accordionElementSciFi = section.querySelector("#genre > main > #accordion > #card > #headingSciFi > #collapseSciFi >.card-body > #row");
        this._accordionElementThriller = section.querySelector("#genre > main > #accordion > #card > #headingThriller > #collapseThriller >.card-body > #row");
      

        localStorage.setItem("items", JSON.stringify(movies));
        const data = JSON.parse(localStorage.getItem("items"));

          
        this.addAbenteuer(data);  
        this.addAction(data);  
        this.addDrama(data);  
        this.addHorror(data);  
        this.addFamilie(data); 
        this.addFantasy(data);  
        this.addKomödien(data);  
        this.addKrimis(data);  
        this.addSciFi(data);  
        this.addThriller(data);  

        
    let content = {
        className: "genre",
        main: section.querySelectorAll("main > *"),
    };

        // Ergebnis zurückliefern
        return content;
    }


    get title() {
        return "Übersicht";
    }

addAbenteuer(data){
    for(var i = 0; i < data.length; i++){
        if(data[i].genre == "Abenteuer")
        this._accordionElementAbenteuer.innerHTML +=`
            
                <div class="gallery">
                    <a target="_blank" href="#">
                    <img src="`+ data[i].imgGenre +`" alt="`+ data[i].title + `" width="150" height="200">
                    </a>
                    <div class="desc">`+ data[i].title + `</div>
        </div>
        `
    }
}

addAction(data){
    for(var i = 0; i < data.length; i++){
        if(data[i].genre == "Action")
        this._accordionElementAction.innerHTML +=`
            
                <div class="gallery">
                    <a target="_blank" href="#">
                      <img src="`+ data[i].imgGenre +`" alt="#" width="200" height="250">
                    </a>
                    <div class="desc">`+ data[i].title + `</div>
        </div>
        `
    }
}
addDrama(data){
    for(var i = 0; i < data.length; i++){
        if(data[i].genre == "Drama")
        this._accordionElementDrama.innerHTML +=`
            
                <div class="gallery">
                    <a target="_blank" href="#">
                      <img src="`+ data[i].imgGenre + `" alt="#" width="200" height="250">
                    </a>
                    <div class="desc">`+ data[i].title + `</div>
        </div>
        `
    }
}
addHorror(data){
    for(var i = 0; i < data.length; i++){
        if(data[i].genre == "Horror")
        this._accordionElementHorror.innerHTML +=`
            
                <div class="gallery">
                    <a target="_blank" href="#">
                      <img src="`+ data[i].imgGenre + `" alt="#" width="200" height="250">
                    </a>
                    <div class="desc">`+ data[i].title + `</div>
        </div>
        `
    }
}
addFamilie(data){
    for(var i = 0; i < data.length; i++){
        if(data[i].genre == "Familie")
        this._accordionElementFamilie.innerHTML +=`
            
                <div class="gallery">
                    <a target="_blank" href="#">
                      <img src="`+ data[i].imgGenre + `" alt="#" width="200" height="250">
                    </a>
                    <div class="desc">`+ data[i].title + `</div>
        </div>
        `
    }
}
addFantasy(data){
    for(var i = 0; i < data.length; i++){
        if(data[i].genre == "Fantasy")
        this._accordionElementFantasy.innerHTML +=`
            
                <div class="gallery">
                    <a target="_blank" href="#">
                      <img src="`+ data[i].imgGenre + `" alt="#" width="200" height="250">
                    </a>
                    <div class="desc">`+ data[i].title + `</div>
        </div>
        `
    }
}
addKomödien(data){
    for(var i = 0; i < data.length; i++){
        if(data[i].genre == "Komödie")
        this._accordionElementKomödien.innerHTML +=`
            
                <div class="gallery">
                    <a target="_blank" href="#">
                      <img src="`+ data[i].imgGenre + `" alt="#" width="200" height="250">
                    </a>
                    <div class="desc">`+ data[i].title + `</div>
        </div>
        `
    }
}
addKrimis(data){
    for(var i = 0; i < data.length; i++){
        if(data[i].genre == "Krimi")
        this._accordionElementKrimis.innerHTML +=`
            
                <div class="gallery">
                    <a target="_blank" href="#">
                      <img src="`+ data[i].imgGenre + `" alt="#" width="200" height="250">
                    </a>
                    <div class="desc">`+ data[i].title + `</div>
        </div>
        `
    }
}
addSciFi(data){
    for(var i = 0; i < data.length; i++){
        if(data[i].genre == "Sci-Fi")
        this._accordionElementSciFi.innerHTML +=`
            
                <div class="gallery">
                    <a target="_blank" href="#">
                      <img src="`+ data[i].imgGenre + `" alt="#" width="200" height="250">
                    </a>
                    <div class="desc">`+ data[i].title + `</div>
        </div>
        `
    }
}
addThriller(data){
    for(var i = 0; i < data.length; i++){
        if(data[i].genre == "Thriller")
        this._accordionElementThriller.innerHTML +=`
            
                <div class="gallery">
                    <a target="_blank" href="#">
                      <img src="`+ data[i].imgGenre + `" alt="#" width="200" height="250">
                    </a>
                    <div class="desc">`+ data[i].title + `</div>
        </div>
        `
    }
}
}


export default Genre;
