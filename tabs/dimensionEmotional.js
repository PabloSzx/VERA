"use strict";
//Control del contenido para la dimensión Emocional del Autoconcepto //
var startViewEmotional = true;
function viewEmotional() {
  openMeAuto("viewSurveyOneEmotional", "buttonEmotional"); // Al presionar el btn Emocional, entonces muestro su contenido //
  //document.getElementById("introductionsurveyOne").style.display = "none"; // Oculto el texto introductorio de la encuesta //
  if (startViewEmotional) {
    startViewEmotional = false;
    module.getIntroductionFactor(
      "viewSurveyOneEmotional",
      "SurveyOne",
      "Emotional",
      " ",
      module.generateBtnSectionOne
    ); //Ejecuto la función que genera el texto de introducción y le paso como parametro la func para generar el btn para mostrar grafico 1
  }
}

function sectionOneEmotional() {
  var div = document.getElementById("containerSectionOneEmotional");
  var btn = document.getElementById("btnSectionOneEmotional");
  let loginId = localStorage.getItem("idStudent");
  track(loginId, "btnSectionOneEmotional", "");
  if (div.className.indexOf("sectionOneShow") == -1) {
    div.className += " sectionOneShow";
    btn.className = btn.className.replace(" close", " open");
  } else {
    div.className = div.className.replace(" sectionOneShow", "");
    btn.className = btn.className.replace(" open", "");
    btn.className += " close";
  }
}

function sectionTwoEmotional() {
  var div = document.getElementById("containerSectionTwoEmotional");
  var btn = document.getElementById("btnSectionTwoEmotional");
  let loginId = localStorage.getItem("idStudent"); // id del usuario
  track(loginId, "btnSectionTwoEmotional", "");
  if (div.className.indexOf("sectionTwoShow") == -1) {
    div.className += " sectionTwoShow";
    btn.className = btn.className.replace(" close", " open");
  } else {
    div.className = div.className.replace(" sectionTwoShow", "");
    btn.className = btn.className.replace(" open", "");
    btn.className += " close";
  }
}

function sectionThreeEmotional() {
  var div = document.getElementById("containerSectionThreeEmotional");
  var btn = document.getElementById("btnSectionThreeEmotional");
  let loginId = localStorage.getItem("idStudent"); // id del usuario
  track(loginId, "btnSectionThreeEmotional", "");
  if (div.className.indexOf("sectionThreeShow") == -1) {
    div.className += " sectionThreeShow";
    btn.className = btn.className.replace(" close", " open");
  } else {
    div.className = div.className.replace(" sectionThreeShow", "");
    btn.className = btn.className.replace(" open", "");
    btn.className += " close";
  }
}
