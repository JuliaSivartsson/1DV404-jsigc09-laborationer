/* Testkod för klasserna Team och League */

describe( "Team library", function () {
    
    var team = new Team();
    
    it("Testar att alla properties är satta", function () {

            team.setName("Linneus Hjältar");
            team.setTeamLeader("Ellen Nu");
            team.setMembers("12");
        
        expect(team.getName(), team.getTeamLeader(), team.getMembers()).toEqual("Linneus Hjältar", "Ellen Nu", "12");
    });
    
    it("Lagets namn saknas", function () {
        team.setName();
        expect(team.getName()).toEqual("Lagets namn saknas!");
    });
    
    it("Lagkaptenens namn saknas", function () {
        team.setTeamLeader();
        expect(team.getTeamLeader()).toEqual("Lagledare är inte definierad!");
    });
    
    it("Antal medlemmar saknas", function () {
        team.setMembers();
        expect(team.getMembers()).toEqual("Antal medlemmar är inte definierat!");
    });

});


describe( "League library", function () {
    
    it("Testar tom addTeam()", function () {
        var league = new League();
        var addTeam = league.addTeam();
        expect(addTeam).toEqual("Laget måste ha ett namn!");
    });
    
    it("Testar getTeams() om det inte finns lag", function () {
        var league1 = new League();
        var showTeams = league1.getTeams();
        expect(showTeams).toEqual("Inga lag är registrerade.");
    });
    
    it("Testar getTeams() om det finns lag", function () {
        var league1 = new League();
        league1.addTeam("Laget");
        league1.addTeam("Lagtvå");
        var showTeams = league1.getTeams();
        expect(showTeams).toEqual(2);
    });
    

});
