"use strict";

window.onload = function(){
    new Site();
};

function Site(){
    this.init();
}

Site.prototype.init = function() {
    console.log("Initierar programmet");
    this.listAll();

};

Site.prototype.listAll = function() {
    console.log("Listar alla domare samt togglar css-klass");
    
   NodeList.prototype.forEach = Array.prototype.forEach;
   
   var ps = document.querySelectorAll(".judgeinfo");
   ps.forEach(function(p){
        p.classList.add("hidden");
   });
   
   var h2s = document.querySelectorAll("#judgelist h2");

    h2s.forEach(function(h2){
       
       var a = document.createElement("a");
       a.setAttribute("href", "#");
       a.innerHTML = h2.innerHTML;
       h2.innerHTML = "";
       h2.appendChild(a);
       
        a.addEventListener("click", function(){
          var p = h2.parentNode.querySelector(".judgeinfo");
          p.classList.toggle("hidden");
        });
      
   }); 


};


