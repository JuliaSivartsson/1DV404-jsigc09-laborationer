"use strict";

function Team(name, teamLeader, members) {
    
    this.getName = function(){return name;};
    this.setName = function(_name){name = _name || "Lagets namn saknas!";};

    this.getTeamLeader = function(){return teamLeader;};
    this.setTeamLeader = function(_teamLeader){teamLeader = _teamLeader || "Lagledare är inte definierad!";};
    
    this.getMembers = function(){return members;};
    this.setMembers = function(_members){members = _members || "Antal medlemmar är inte definierat!";};


    this.setName(name);
    this.setTeamLeader(teamLeader);
    this.setMembers(members);
}



function League(){
    
    this.teams = [];
}

League.prototype.addTeam = function(teamName) {
/* Add team to this.teams */

    if(teamName === undefined){
        console.log("Laget måste ha ett namn!");
        return false;
    }
    
    this.teams.push({
        name: teamName
    });
};

League.prototype.getTeams = function(){
/* Sends back all teams in this.teams */
    
    if(this.teams.length === 0){
        console.log("Inga lag är registrerade.");
    }
    
    this.teams.forEach(function(entry){
        console.log(entry.name);
    }); 
};

var leagueTest = function TestLeague(){
    var league = new League();
    
    var emptyTeamName = function(){ 
        league.addTeam();
        
        console.log(league.getTeams());
    };
    console.log(emptyTeamName());
    
    var notEmptyTeamName = function(){
        league.addTeam("Lag1");
        league.addTeam("Lag2");
        
        console.log(league.getTeams());
    };
    
    console.log(notEmptyTeamName());
};

var teamTest = function TestTeam(){
    var team = new Team();

    var testEmptyProperties = function(){
        team.setName();
        team.setTeamLeader();
        team.setMembers();
        console.log(team.getName(), team.getTeamLeader(), team.getMembers());
    };
    console.log(testEmptyProperties());
    
    var testNotEmptyProperties = function(){
        team.setName("Linneus hjältar");
        team.setTeamLeader("Ellen Nu");
        team.setMembers("12");
        console.log(team.getName(), team.getTeamLeader(), team.getMembers());
    };
    console.log(testNotEmptyProperties());

};

window.onload = function(){
    leagueTest();
    teamTest();
};
