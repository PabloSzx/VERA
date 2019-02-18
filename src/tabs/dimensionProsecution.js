"use strict";
var startViewProsecution = true;

function viewProsecution() {
  openMeLS("viewSurveyTwoProsecution", "buttonProsecution");
  //document.getElementById("introductionsurveyTwo").style.display = "none";
  if (startViewProsecution) {
    startViewProsecution = false;
    module.getIntroductionFactor(
      "viewSurveyTwoProsecution",
      "SurveyTwo",
      "Prosecution",
      module.generateBtnSectionOne
    ); //Ejecuto la función que genera el texto de introducción y le paso como parametro la func para generar el btn para mostrar grafico 1
  } else {
    document.getElementById("introductionProsecution").style.display = "block";
  }
}
