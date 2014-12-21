"use strict";

function League(){
    this.teams = [];
}

League.prototype.addTeam = function(teamName) {
/* Add team to this.teams */

    if(teamName === undefined){
        return "Laget måste ha ett namn!";
    }
    
    else{
        this.teams.push({
            name: teamName
        });
    }
};

League.prototype.getTeams = function(){
/* Sends back all teams in this.teams */
    
    if(this.teams.length === 0){
        console.log("No teams registered.");
    }
    
    this.teams.forEach(function(entry){
        console.log(entry.name);
    }); 
};
