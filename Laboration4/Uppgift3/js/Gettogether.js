"use strict";

window.onload = function(){
    new Gettogether("21/2-15", "Stockholm");
    new Gettogether("25/4-15", "Halmstad");
    new Gettogether("10/5-15", "Rottne");
    new Gettogether("8/8-15", "Luleå");
};

function Gettogether(date, place) {
    this.gettogether = [];
    
    this.getDate = function(){return date;};
    this.setDate = function(_date){date = _date || "Inget datum är satt!";};

    this.getPlace = function(){return place;};
    this.setPlace = function(_place){place = _place || "Ingen plats är satt!";};
    

    this.setDate(date);
    this.setPlace(place);
    
    this.date = date;
    this.place = place;
    
    this.register();
    this.showAll();
}


Gettogether.prototype.register = function(){

        this.gettogether.push({
            date: this.date,
            place: this.place
        });
    
};

Gettogether.prototype.showAll = function(){
    
    if(this.gettogether.length === 0){
        console.log("No gettogehters are registered.");
    }
    
    var parentDiv = document.getElementById("main");
    
    var p = document.createElement("p");
    p.classList.add("gettogether");
    
    var aP = document.createElement("a");
    aP.setAttribute("href", "#");
    aP.appendChild(p);
    
    var compete = document.createElement("p");
    compete.classList.add("info");
    compete.classList.add("hidden");
    aP.appendChild(compete);
    
    parentDiv.appendChild(aP);
    
    var competitions = new Competition();
    compete.innerHTML = competitions.selectCompetitions(this.date);
    
    aP.onclick = function(){
        compete.classList.toggle("hidden");
    };
    
    this.gettogether.forEach(function(entry){
        p.innerHTML = entry.date +" "+ entry.place;
    });   
    
};
