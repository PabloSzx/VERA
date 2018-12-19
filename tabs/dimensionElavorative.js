"use strict";
//Control del contenido para la dimensión  //
var startViewElavorative = true;
function viewElavorative() { 
    openMeComponent ("viewSurveyTwoComponentElavorative", "buttonElavorative"); // Al presionar el btn , entonces muestro su contenido //
    //document.getElementById("introductionProsecution").style.display = "none"; // Oculto el texto introductorio de la encuesta //
    if (startViewElavorative) {
        startViewElavorative = false;
        getIntroductionComponent  ("viewSurveyTwoComponentElavorative", "SurveyTwo" ,"Prosecution", "Elavorative", generateBtnSectionOne); //Ejecuto la función que genera el texto de introducción y le paso como parametro la func para generar el btn para mostrar grafico 1
        //paso los parametros: contenedor, numero de la encuesta, numero del factor, numero del componenente, funcion //
    }
}

function sectionOneElavorative () {   
    var div = document.getElementById("containerSectionOneElavorative");
    var btn = document.getElementById("btnSectionOneElavorative");
    let loginId = localStorage.getItem("idStudent");  
    track(loginId,"btnSectionOneElavorative","");
    if (div.className.indexOf("sectionOneShow") == -1) {
        div.className += " sectionOneShow";
        btn.className = btn.className.replace(" close", " open");
    } else {
        div.className = div.className.replace(" sectionOneShow", "");
        btn.className = btn.className.replace(" open", "");
        btn.className += " close";
    }
} 

function sectionTwoElavorative () {   
    var div = document.getElementById("containerSectionTwoElavorative");
    var btn = document.getElementById("btnSectionTwoElavorative");
    let loginId = localStorage.getItem("idStudent");  
    track(loginId,"btnSectionTwoElavorative","");
    if (div.className.indexOf("sectionTwoShow") == -1) {
        div.className += " sectionTwoShow";
        btn.className = btn.className.replace(" close", " open");
    } else {
        div.className = div.className.replace(" sectionTwoShow", "");
        btn.className = btn.className.replace(" open", "");
        btn.className += " close";
    }
} 

function sectionThreeElavorative () {   
    var div = document.getElementById("containerSectionThreeElavorative");
    var btn = document.getElementById("btnSectionThreeElavorative");
    let loginId = localStorage.getItem("idStudent");  
    track(loginId,"btnSectionThreeElavorative","");
    if (div.className.indexOf("sectionThreeShow") == -1) {
        div.className += " sectionThreeShow";
        btn.className = btn.className.replace(" close", " open");
    } else {
        div.className = div.className.replace(" sectionThreeShow", "");
        btn.className = btn.className.replace(" open", "");
        btn.className += " close";
    }
} 

