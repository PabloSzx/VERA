
var startViewSocial = true;

function viewSocial () {
    openMeAuto ("viewSurveyOneSocial", "buttonSocial");
  
    if (startViewSocial) {
        startViewSocial = false;
        getIntroductionFactor("viewSurveyOneSocial", "SurveyOne", "Social", " ", generateBtnSectionOne); //Ejecuto la función que genera el texto de introducción y le paso como parametro la func para generar el btn para mostrar grafico 1
    }
}

function sectionOneSocial () {   
    var div = document.getElementById("containerSectionOneSocial");
    var btn = document.getElementById("btnSectionOneSocial");
    let loginId = localStorage.getItem("idStudent");  
    track(loginId,"btnSectionOneSocial","");
    if (div.className.indexOf("sectionOneShow") == -1) {
        div.className += " sectionOneShow";
        btn.className = btn.className.replace(" close", " open");
    } else {
        div.className = div.className.replace(" sectionOneShow", "");
        btn.className = btn.className.replace(" open", "");
        btn.className += " close";
    }
} 

function sectionTwoSocial () {   
    var div = document.getElementById("containerSectionTwoSocial");
    var btn = document.getElementById("btnSectionTwoSocial");
    let loginId = localStorage.getItem("idStudent");  
    track(loginId,"btnSectionTwoSocial","");
    if (div.className.indexOf("sectionTwoShow") == -1) {
        div.className += " sectionTwoShow";
        btn.className = btn.className.replace(" close", " open");
    } else {
        div.className = div.className.replace(" sectionTwoShow", "");
        btn.className = btn.className.replace(" open", "");
        btn.className += " close";
    }
} 

function sectionThreeSocial () {   
    var div = document.getElementById("containerSectionThreeSocial");
    var btn = document.getElementById("btnSectionThreeSocial");
    let loginId = localStorage.getItem("idStudent");  
    track(loginId,"btnSectionThreeSocial","");
    if (div.className.indexOf("sectionThreeShow") == -1) {
        div.className += " sectionThreeShow";
        btn.className = btn.className.replace(" close", " open");
    } else {
        div.className = div.className.replace(" sectionThreeShow", "");
        btn.className = btn.className.replace(" open", "");
        btn.className += " close";
    }
} 



       
