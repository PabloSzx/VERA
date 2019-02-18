"use strict";
//Control del contenido para la dimensión  //
var startViewDeep = true;
function viewDeep() {
  openMeComponent("viewSurveyTwoComponentDeep", "buttonDeep"); // Al presionar el btn , entonces muestro su contenido //
  //document.getElementById("introductionProsecution").style.display = "none"; // Oculto el texto introductorio de la encuesta //
  if (startViewDeep) {
    startViewDeep = false;
    module.getIntroductionComponent(
      "viewSurveyTwoComponentDeep",
      "SurveyTwo",
      "Prosecution",
      "Deep",
      module.generateBtnSectionOne
    ); //Ejecuto la función que genera el texto de introducción y le paso como parametro la func para generar el btn para mostrar grafico 1
  }
}

function sectionOneDeep() {
  var div = document.getElementById("containerSectionOneDeep");
  var btn = document.getElementById("btnSectionOneDeep");
  let loginId = localStorage.getItem("idStudent");
  track(loginId, "btnSectionOneDeep", "");
  if (div.className.indexOf("sectionOneShow") == -1) {
    div.className += " sectionOneShow";
    btn.className = btn.className.replace(" close", " open");
  } else {
    div.className = div.className.replace(" sectionOneShow", "");
    btn.className = btn.className.replace(" open", "");
    btn.className += " close";
  }
}

function sectionTwoDeep() {
  var div = document.getElementById("containerSectionTwoDeep");
  var btn = document.getElementById("btnSectionTwoDeep");
  let loginId = localStorage.getItem("idStudent");
  track(loginId, "btnSectionTwoDeep", "");
  if (div.className.indexOf("sectionTwoShow") == -1) {
    div.className += " sectionTwoShow";
    btn.className = btn.className.replace(" close", " open");
  } else {
    div.className = div.className.replace(" sectionTwoShow", "");
    btn.className = btn.className.replace(" open", "");
    btn.className += " close";
  }
}

function sectionThreeDeep() {
  var div = document.getElementById("containerSectionThreeDeep");
  var btn = document.getElementById("btnSectionThreeDeep");
  let loginId = localStorage.getItem("idStudent");
  track(loginId, "btnSectionThreeDeep", "");
  if (div.className.indexOf("sectionThreeShow") == -1) {
    div.className += " sectionThreeShow";
    btn.className = btn.className.replace(" close", " open");
  } else {
    div.className = div.className.replace(" sectionThreeShow", "");
    btn.className = btn.className.replace(" open", "");
    btn.className += " close";
  }
}
