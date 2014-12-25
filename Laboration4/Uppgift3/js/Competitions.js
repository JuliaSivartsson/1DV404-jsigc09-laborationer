"use strict";

function Competition(name, date, players){
    this.competitions = [
        {name: "cykling", date: "21/2-15", players: "10"},
        {name: "simning", date: "25/4-15", players: "5"},
        {name: "Löpning", date: "10/5-15", players: "12"},
        {name: "Boxning", date: "21/2-15", players: "7"},
        {name: "Boxning", date: "8/8-15", players: "7"}
    ];
    
    this.getName = function(){return name;};
    this.setName = function(_name){name = _name || "Ingen gren är satt!";};

    this.getDate = function(){return date;};
    this.setDate = function(_date){date = _date || "Inget datum är satt!";};

    this.getPlayers = function(){return players;};
    this.setPlayers = function(_players){players = _players || "Antal tävlande är inte satt!";};
    
    this.setName(name);
    this.setDate(date);
    this.setPlayers(players);
}

Competition.prototype.addCompetition = function(){
    this.competitions.push({    
        name: this.name,
        date: this.date,
        players: this.players
    });
};

Competition.prototype.selectCompetitions = function(date){

    var value ="";
    this.competitions.forEach(function(entry){
        if(entry.date === date){
            value += "<p>Gren: " + entry.name+"<br>";
            value += "Deltagare: " + entry.players+"</p>";
        }
    });
    
    return value;

};
