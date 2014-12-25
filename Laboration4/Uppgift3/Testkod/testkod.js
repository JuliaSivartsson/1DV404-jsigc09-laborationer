describe( "Gettogether library", function () {
    
    var gettogether = new Gettogether();
    
    it("Testar tom register()", function () {
        expect(gettogether.getDate()).toEqual("Inget datum är satt!");
    });
    
    it("Testar att alla properties är satta", function () {

            gettogether.setDate("21/5-15");
            gettogether.setPlace("Växjö");
            
        expect(gettogether.getDate(), gettogether.getPlace()).toEqual("21/5-15", "Växjö");
    });
    
    it("Träffens datum saknas", function () {
        gettogether.setDate();
        expect(gettogether.getDate()).toEqual("Inget datum är satt!");
    });
    
    it("Träffens plats saknas", function () {
        gettogether.setPlace();
        expect(gettogether.getPlace()).toEqual("Ingen plats är satt!");
    });
});



describe( "Competition library", function () {
    
    it("Testar tom addCompetition()", function () {
        var competition = new Competition();
        expect(competition.getName()).toEqual("Ingen gren är satt!");
    });
    
    it("Testar selectCompetitions() om det inte finns lag", function () {
        var competition1 = new Competition();
        var show = competition1.selectCompetitions();
        expect(show).toEqual("Inga grenar är registrerade.");
    });
    
    it("Testar selectCompetitions() om det finns grenar", function () {

        var competition2 = new Competition("Boxning", "21/2-15", "10");
        var show = competition2.selectCompetitions("21/2-15");
        expect(show).toEqual("<p>Gren: Boxning<br>Deltagare: 10</p>");
    });
    

});
