"use strict";

var startViewFamily = true;

function viewFamily() {
  openMeAuto("viewSurveyOneFamily", "buttonFamily");
  //document.getElementById("introductionsurveyOne").style.display = "none";

  if (startViewFamily) {
    startViewFamily = false;
    module.getIntroductionFactor(
      "viewSurveyOneFamily",
      "SurveyOne",
      "Family",
      " ",
      module.generateBtnSectionOne
    ); //Ejecuto la función que genera el texto de introducción y le paso como parametro la func para generar el btn para mostrar grafico 1
  }
}

function sectionOneFamily() {
  var div = document.getElementById("containerSectionOneFamily");
  var btn = document.getElementById("btnSectionOneFamily");
  let loginId = localStorage.getItem("idStudent");
  track(loginId, "btnSectionOneFamily", "");
  if (div.className.indexOf("sectionOneShow") == -1) {
    div.className += " sectionOneShow";
    btn.className = btn.className.replace(" close", " open");
  } else {
    div.className = div.className.replace(" sectionOneShow", "");
    btn.className = btn.className.replace(" open", "");
    btn.className += " close";
  }
}

function sectionTwoFamily() {
  var div = document.getElementById("containerSectionTwoFamily");
  var btn = document.getElementById("btnSectionTwoFamily");
  let loginId = localStorage.getItem("idStudent");
  track(loginId, "btnSectionTwoFamily", "");
  if (div.className.indexOf("sectionTwoShow") == -1) {
    div.className += " sectionTwoShow";
    btn.className = btn.className.replace(" close", " open");
  } else {
    div.className = div.className.replace(" sectionTwoShow", "");
    btn.className = btn.className.replace(" open", "");
    btn.className += " close";
  }
}

function sectionThreeFamily() {
  var div = document.getElementById("containerSectionThreeFamily");
  var btn = document.getElementById("btnSectionThreeFamily");
  let loginId = localStorage.getItem("idStudent");
  track(loginId, "btnSectionThreeFamily", "");
  if (div.className.indexOf("sectionThreeShow") == -1) {
    div.className += " sectionThreeShow";
    btn.className = btn.className.replace(" close", " open");
  } else {
    div.className = div.className.replace(" sectionThreeShow", "");
    btn.className = btn.className.replace(" open", "");
    btn.className += " close";
  }
}
