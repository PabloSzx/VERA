"use strict";
var startViewMethodical = true;
function viewMethodical() {
  openMeLS("viewSurveyTwoMethodical", "buttonMethodical");
  //document.getElementById("introductionsurveyTwo").style.display = "none";
  if (startViewMethodical) {
    startViewMethodical = false;
    module.getIntroductionFactor(
      "viewSurveyTwoMethodical",
      "SurveyTwo",
      "Methodical",
      " ",
      module.generateBtnSectionOne
    ); //Ejecuto la función que genera el texto de introducción y le paso como parametro la func para generar el btn para mostrar grafico 1
  }
}

function sectionOneMethodical() {
  var div = document.getElementById("containerSectionOneMethodical");
  var btn = document.getElementById("btnSectionOneMethodical");
  let loginId = localStorage.getItem("idStudent");
  track(loginId, "btnSectionOneMethodical", "");
  if (div.className.indexOf("sectionOneShow") == -1) {
    div.className += " sectionOneShow";
    btn.className = btn.className.replace(" close", " open");
  } else {
    div.className = div.className.replace(" sectionOneShow", "");
    btn.className = btn.className.replace(" open", "");
    btn.className += " close";
  }
}

function sectionTwoMethodical() {
  var div = document.getElementById("containerSectionTwoMethodical");
  var btn = document.getElementById("btnSectionTwoMethodical");
  let loginId = localStorage.getItem("idStudent");
  track(loginId, "btnSectionTwoMethodical", "");
  if (div.className.indexOf("sectionTwoShow") == -1) {
    div.className += " sectionTwoShow";
    btn.className = btn.className.replace(" close", " open");
  } else {
    div.className = div.className.replace(" sectionTwoShow", "");
    btn.className = btn.className.replace(" open", "");
    btn.className += " close";
  }
}

function sectionThreeMethodical() {
  var div = document.getElementById("containerSectionThreeMethodical");
  var btn = document.getElementById("btnSectionThreeMethodical");
  let loginId = localStorage.getItem("idStudent");
  track(loginId, "btnSectionThreeMethodical", "");
  if (div.className.indexOf("sectionThreeShow") == -1) {
    div.className += " sectionThreeShow";
    btn.className = btn.className.replace(" close", " open");
  } else {
    div.className = div.className.replace(" sectionThreeShow", "");
    btn.className = btn.className.replace(" open", "");
    btn.className += " close";
  }
}
