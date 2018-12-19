"use strict";
//Control del contenido para la dimensión  //
var startViewSuperficial = true;
function viewSuperficial() { 
    openMeComponent ("viewSurveyTwoComponentSuperficial", "buttonSuperficial"); // Al presionar el btn , entonces muestro su contenido //
    if (startViewSuperficial) {
        startViewSuperficial = false;
        getIntroductionComponent  ("viewSurveyTwoComponentSuperficial", "SurveyTwo" ,"Prosecution", "Superficial", generateBtnSectionOne); //Ejecuto la función que genera el texto de introducción y le paso como parametro la func para generar el btn para mostrar grafico 1
    }
}

function sectionOneSuperficial () {   
    var div = document.getElementById("containerSectionOneSuperficial");
    var btn = document.getElementById("btnSectionOneSuperficial");
    let loginId = localStorage.getItem("idStudent");  
    track(loginId,"btnSectionOneSuperficial","");
    if (div.className.indexOf("sectionOneShow") == -1) {
        div.className += " sectionOneShow";
        btn.className = btn.className.replace(" close", " open");
    } else {
        div.className = div.className.replace(" sectionOneShow", "");
        btn.className = btn.className.replace(" open", "");
        btn.className += " close";
    }
} 

function sectionTwoSuperficial () {   
    var div = document.getElementById("containerSectionTwoSuperficial");
    var btn = document.getElementById("btnSectionTwoSuperficial");
    let loginId = localStorage.getItem("idStudent");  
    track(loginId,"btnSectionTwoSuperficial","");
    if (div.className.indexOf("sectionTwoShow") == -1) {
        div.className += " sectionTwoShow";
        btn.className = btn.className.replace(" close", " open");
    } else {
        div.className = div.className.replace(" sectionTwoShow", "");
        btn.className = btn.className.replace(" open", "");
        btn.className += " close";
    }
} 

function sectionThreeSuperficial () {   
    var div = document.getElementById("containerSectionThreeSuperficial");
    var btn = document.getElementById("btnSectionThreeSuperficial");
    let loginId = localStorage.getItem("idStudent");  
    track(loginId,"btnSectionThreeSuperficial","");
    if (div.className.indexOf("sectionThreeShow") == -1) {
        div.className += " sectionThreeShow";
        btn.className = btn.className.replace(" close", " open");
    } else {
        div.className = div.className.replace(" sectionThreeShow", "");
        btn.className = btn.className.replace(" open", "");
        btn.className += " close";
    }
} 