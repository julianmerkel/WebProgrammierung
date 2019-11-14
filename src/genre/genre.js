"use strict";

import stylesheet from "./genre.css";
import genre from "./genre.html";
import movies from "../movies";

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
        this._accordionElementKomödien = section.querySelector("#genre > main > #accordion > #card > #headingKomödien > #collapseKomödien >.card-body > #row");
        this._accordionElementKrimis = section.querySelector("#genre > main > #accordion > #card > #headingKrimis > #collapseKrimis >.card-body > #row");
        this._accordionElementSciFi = section.querySelector("#genre > main > #accordion > #card > #headingSciFi > #collapseSciFi >.card-body > #row");
        this._accordionElementThriller = section.querySelector("#genre > main > #accordion > #card > #headingThriller > #collapseThriller >.card-body > #row");
      
        
       

        let json = {
            "name" : "filmlliste",
            "filme" : [
                
                {
                "title" : "Moonlight",
                "dauer" : "126 Minuten",
                "img" : "https://i2.wp.com/insync.plus/wp-content/uploads/2016/09/Moonlight_2016_detail_desktop.png",
                "genre" : "Drama",
            },
                {
                "title" : "Inception",
                "dauer" : "98 Minuten",
                "img" : "https://cdn.shopify.com/s/files/1/1416/8662/products/inception_2010_advance_original_film_art_dc7d7689-1e66-41d6-b228-48da4e7b52e4_2000x.jpg?v=1564717627",
                "genre" : "Abenteuer",
            },
                {
                "title" : "Joker",
                "dauer" : "104 Minuten",
                "img" : "joker.jpg",
                "genre" : "Drama",
            },
            {
                "title" : "Zurück in die Zukunft",
                "dauer" : "98 Minuten",
                "img" : "https://www.cineplexx.at/media/at/inc/movies_licences/ZurueckindieZukunft2_Plakat.jpg",
                "genre" : "Abenteuer",
            },
            {
                "title" : "Herz aus Stahl",
                "dauer" : "98 Minuten",
                "img" : "https://images.justwatch.com/poster/100289658/s592",
                "genre" : "Abenteuer",
            },
            {
                "title" : "Inception",
                "dauer" : "98 Minuten",
                "img" : "https://cdn.shopify.com/s/files/1/1416/8662/products/inception_2010_advance_original_film_art_dc7d7689-1e66-41d6-b228-48da4e7b52e4_2000x.jpg?v=1564717627",
                "genre" : "Abenteuer",
            },
            {
                "title" : "Inception",
                "dauer" : "98 Minuten",
                "img" : "https://cdn.shopify.com/s/files/1/1416/8662/products/inception_2010_advance_original_film_art_dc7d7689-1e66-41d6-b228-48da4e7b52e4_2000x.jpg?v=1564717627",
                "genre" : "Abenteuer",
            },
            {
                "title" : "Inception",
                "dauer" : "98 Minuten",
                "img" : "https://cdn.shopify.com/s/files/1/1416/8662/products/inception_2010_advance_original_film_art_dc7d7689-1e66-41d6-b228-48da4e7b52e4_2000x.jpg?v=1564717627",
                "genre" : "Abenteuer",
            },
            {
                "title" : "Inception",
                "dauer" : "98 Minuten",
                "img" : "https://cdn.shopify.com/s/files/1/1416/8662/products/inception_2010_advance_original_film_art_dc7d7689-1e66-41d6-b228-48da4e7b52e4_2000x.jpg?v=1564717627",
                "genre" : "Abenteuer",
            },
            {
                "title" : "Inception",
                "dauer" : "98 Minuten",
                "img" : "https://cdn.shopify.com/s/files/1/1416/8662/products/inception_2010_advance_original_film_art_dc7d7689-1e66-41d6-b228-48da4e7b52e4_2000x.jpg?v=1564717627",
                "genre" : "Abenteuer",
            },
            {
                "title" : "Inception",
                "dauer" : "98 Minuten",
                "img" : "https://cdn.shopify.com/s/files/1/1416/8662/products/inception_2010_advance_original_film_art_dc7d7689-1e66-41d6-b228-48da4e7b52e4_2000x.jpg?v=1564717627",
                "genre" : "Abenteuer",
            },
            {
                "title" : "Inception",
                "dauer" : "98 Minuten",
                "img" : "https://cdn.shopify.com/s/files/1/1416/8662/products/inception_2010_advance_original_film_art_dc7d7689-1e66-41d6-b228-48da4e7b52e4_2000x.jpg?v=1564717627",
                "genre" : "Abenteuer",
            },
            ]
        }

        localStorage.setItem("items", JSON.stringify(json));
        const data = JSON.parse(localStorage.getItem("items"));

          
        this.addAbenteuer(data);  
        this.addAction(data);  
        this.addDrama(data);  
        this.addHorror(data);  
        this.addFamilie(data);  
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
    for(var i = 0; i < data.filme.length; i++){
        if(data.filme[i].genre == "Abenteuer")
        this._accordionElementAbenteuer.innerHTML +=`
            
                <div class="gallery">
                    <a target="_blank" href="#">
                    <img src="`+ data.filme[i].img +`" alt="`+ data.filme[i].title + `" width="150" height="200">
                    </a>
                    <div class="desc">`+ data.filme[i].title + `</div>
        </div>
        `
    }
}

addAction(data){
    for(var i = 0; i < data.filme.length; i++){
        if(data.filme[i].genre == "Action")
        this._accordionElementAction.innerHTML +=`
            
                <div class="gallery">
                    <a target="_blank" href="#">
                      <img src="`+ data.filme[i].img +`" alt="#" width="200" height="250">
                    </a>
                    <div class="desc">`+ data.filme[i].title + `</div>
        </div>
        `
    }
}
addDrama(data){
    for(var i = 0; i < data.filme.length; i++){
        if(data.filme[i].genre == "Drama")
        this._accordionElementDrama.innerHTML +=`
            
                <div class="gallery">
                    <a target="_blank" href="#">
                      <img src="`+ data.filme[i].img + `" alt="#" width="200" height="250">
                    </a>
                    <div class="desc">`+ data.filme[i].title + `</div>
        </div>
        `
    }
}
addHorror(data){
    for(var i = 0; i < data.filme.length; i++){
        if(data.filme[i].genre == "Horror")
        this._accordionElementHorror.innerHTML +=`
            
                <div class="gallery">
                    <a target="_blank" href="#">
                      <img src="`+ data.filme[i].img + `" alt="#" width="200" height="250">
                    </a>
                    <div class="desc">`+ data.filme[i].title + `</div>
        </div>
        `
    }
}
addFamilie(data){
    for(var i = 0; i < data.filme.length; i++){
        if(data.filme[i].genre == "Familie")
        this._accordionElementFamilie.innerHTML +=`
            
                <div class="gallery">
                    <a target="_blank" href="#">
                      <img src="`+ data.filme[i].img + `" alt="#" width="200" height="250">
                    </a>
                    <div class="desc">`+ data.filme[i].title + `</div>
        </div>
        `
    }
}
addKomödien(data){
    for(var i = 0; i < data.filme.length; i++){
        if(data.filme[i].genre == "Komödie")
        this._accordionElementKomödien.innerHTML +=`
            
                <div class="gallery">
                    <a target="_blank" href="#">
                      <img src="`+ data.filme[i].img + `" alt="#" width="200" height="250">
                    </a>
                    <div class="desc">`+ data.filme[i].title + `</div>
        </div>
        `
    }
}
addKrimis(data){
    for(var i = 0; i < data.filme.length; i++){
        if(data.filme[i].genre == "Krimi")
        this._accordionElementKrimis.innerHTML +=`
            
                <div class="gallery">
                    <a target="_blank" href="#">
                      <img src="`+ data.filme[i].img + `" alt="#" width="200" height="250">
                    </a>
                    <div class="desc">`+ data.filme[i].title + `</div>
        </div>
        `
    }
}
addSciFi(data){
    for(var i = 0; i < data.filme.length; i++){
        if(data.filme[i].genre == "Sci-Fi&Fantasy")
        this._accordionElementSciFi.innerHTML +=`
            
                <div class="gallery">
                    <a target="_blank" href="#">
                      <img src="`+ data.filme[i].img + `" alt="#" width="200" height="250">
                    </a>
                    <div class="desc">`+ data.filme[i].title + `</div>
        </div>
        `
    }
}
addThriller(data){
    for(var i = 0; i < data.filme.length; i++){
        if(data.filme[i].genre == "Thriller")
        this._accordionElementThriller.innerHTML +=`
            
                <div class="gallery">
                    <a target="_blank" href="#">
                      <img src="`+ data.filme[i].img + `" alt="#" width="200" height="250">
                    </a>
                    <div class="desc">`+ data.filme[i].title + `</div>
        </div>
        `
    }
}
}


export default Genre;
