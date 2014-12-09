"use strict";

window.onload = function(){
    new Site();
};

function Site(){
    this.userObject = {};
    this.init();
}

Site.prototype.init = function() {
    console.log("Initierar programmet");
    
    this.createHTML();
};

Site.prototype.createHTML = function() {
    var content = document.getElementById("content");
    
    var name = document.getElementById("name");
    var age = document.getElementById("age");
    var mail = document.getElementById("mail");
    
    var that = this;
    
    var button = document.getElementById("register");
    button.onclick = function() {
      that.addUser(name.value, age.value, mail.value);
    };
    
    var showAll = document.createElement("button");
    showAll.className = "showAll";
    showAll.innerHTML = "Visa alla användare";
    showAll.onclick = function() {
        that.listAll();
    };
    
    content.appendChild(showAll);
    
    
};

Site.prototype.addUser = function(name, age, mail) {
    this.userObject.name = name;
    this.userObject.age = age;
    this.userObject.mail = mail;
    
        //console.log(this.userObject);
    
};

Site.prototype.listAll = function() {
    console.log("Listar alla användare");

    if(this.userObject === undefined){
        return false;
    }
    else{
        this.popup(this.userObject);        
    }

};

Site.prototype.popup = function(text){
      // Popup meddelande
        var div = document.getElementById("wrongAnswer");
        div.innerHTML = text;
};
