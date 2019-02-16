"use strict";

var startViewPhysical = true;

function viewPhysical() {
  openMeAuto("viewSurveyOnePhysical", "buttonPhysical");
  //document.getElementById("introductionsurveyOne").style.display = "none";

  if (startViewPhysical) {
    startViewPhysical = false;
    module.getIntroductionFactor(
      "viewSurveyOnePhysical",
      "SurveyOne",
      "Physical",
      " ",
      module.generateBtnSectionOne
    ); //Ejecuto la función que genera el texto de introducción y le paso como parametro la func para generar el btn para mostrar grafico 1
  }
}

function sectionOnePhysical() {
  var div = document.getElementById("containerSectionOnePhysical");
  var btn = document.getElementById("btnSectionOnePhysical");
  let loginId = localStorage.getItem("idStudent");
  track(loginId, "btnSectionOnePhysical", "");
  if (div.className.indexOf("sectionOneShow") == -1) {
    div.className += " sectionOneShow";
    btn.className = btn.className.replace(" close", " open");
  } else {
    div.className = div.className.replace(" sectionOneShow", "");
    btn.className = btn.className.replace(" open", "");
    btn.className += " close";
  }
}

function sectionTwoPhysical() {
  var div = document.getElementById("containerSectionTwoPhysical");
  var btn = document.getElementById("btnSectionTwoPhysical");
  let loginId = localStorage.getItem("idStudent");
  track(loginId, "btnSectionTwoPhysical", "");
  if (div.className.indexOf("sectionTwoShow") == -1) {
    div.className += " sectionTwoShow";
    btn.className = btn.className.replace(" close", " open");
  } else {
    div.className = div.className.replace(" sectionTwoShow", "");
    btn.className = btn.className.replace(" open", "");
    btn.className += " close";
  }
}

function sectionThreePhysical() {
  var div = document.getElementById("containerSectionThreePhysical");
  var btn = document.getElementById("btnSectionThreePhysical");
  let loginId = localStorage.getItem("idStudent");
  track(loginId, "btnSectionThreePhysical", "");
  if (div.className.indexOf("sectionThreeShow") == -1) {
    div.className += " sectionThreeShow";
    btn.className = btn.className.replace(" close", " open");
  } else {
    div.className = div.className.replace(" sectionThreeShow", "");
    btn.className = btn.className.replace(" open", "");
    btn.className += " close";
  }
}
