/* Klassen Team */
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
