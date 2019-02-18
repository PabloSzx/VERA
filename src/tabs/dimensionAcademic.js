"use strict";
var startViewAcademic = true;
function viewAcademic() {
  openMeAuto("viewSurveyOneAcademic", "buttonAcademic");
  //document.getElementById("introductionsurveyOne").style.display = "none";

  if (startViewAcademic) {
    startViewAcademic = false;
    module.getIntroductionFactor(
      "viewSurveyOneAcademic",
      "SurveyOne",
      "Academic",
      " ",
      module.generateBtnSectionOne
    ); //Ejecuto la función que genera el texto de introducción y le paso como parametro la func para generar el btn para mostrar grafico 1
  }
}

function sectionOneAcademic() {
  var div = document.getElementById("containerSectionOneAcademic");
  var btn = document.getElementById("btnSectionOneAcademic");
  let loginId = localStorage.getItem("idStudent");
  track(loginId, "btnSectionOneAcademic", "");
  if (div.className.indexOf("sectionOneShow") == -1) {
    div.className += " sectionOneShow";
    btn.className = btn.className.replace(" close", " open");
  } else {
    div.className = div.className.replace(" sectionOneShow", "");
    btn.className = btn.className.replace(" open", "");
    btn.className += " close";
  }
}

function sectionTwoAcademic() {
  var div = document.getElementById("containerSectionTwoAcademic");
  var btn = document.getElementById("btnSectionTwoAcademic");
  let loginId = localStorage.getItem("idStudent");
  track(loginId, "btnSectionTwoAcademic", "");
  if (div.className.indexOf("sectionTwoShow") == -1) {
    div.className += " sectionTwoShow";
    btn.className = btn.className.replace(" close", " open");
  } else {
    div.className = div.className.replace(" sectionTwoShow", "");
    btn.className = btn.className.replace(" open", "");
    btn.className += " close";
  }
}

function sectionThreeAcademic() {
  var div = document.getElementById("containerSectionThreeAcademic");
  var btn = document.getElementById("btnSectionThreeAcademic");
  let loginId = localStorage.getItem("idStudent");
  track(loginId, "btnSectionThreeAcademic", "");
  if (div.className.indexOf("sectionThreeShow") == -1) {
    div.className += " sectionThreeShow";
    btn.className = btn.className.replace(" close", " open");
  } else {
    div.className = div.className.replace(" sectionThreeShow", "");
    btn.className = btn.className.replace(" open", "");
    btn.className += " close";
  }
}
