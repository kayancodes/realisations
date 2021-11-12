var burger = (function burger() {
    "use strict";

    var burger, nav; //

    function toggleCSS() {
        nav.classList.toggle("is-active");
        //si pas . active tu le met ou sinon enleve
        burger.classList.toggle("is-active");
        //si pas . active tu le met ou sinon enleve
        if (burger.classList.contains("is-active")) {
            //if = si si contient . active et clique desus remplace active par times =x
            burger.classList.replace("fa-bars");
        } 
    }

    function initBurger() {
        burger = document.getElementById("burger"); 
        nav = document.getElementById("nav");
        burger.onclick = toggleCSS;
        // au clic tu va cherche togglecss au dessus
    }

    window.addEventListener("DOMContentLoaded", initBurger);
    // attend le chargement complet de html

    return {
        init: initBurger
    };
}());
