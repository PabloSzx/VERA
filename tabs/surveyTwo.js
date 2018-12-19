"use strict";
// CONTENIDO DE LA PESTAÑA DE ESTRATEGIAS DE APRENDIZAJE //
var blockFunctionsThree = true;
function openSurveyTwo () {
    openMe("surveyTwo","buttonSurveyTwo"); // Deja visible la vista de las Estrategias de aprendizaje //
    if(blockFunctionsThree){
        blockFunctionsThree = false;
        getIntroductionText("surveyTwo");   // Genero texto de introduccion en el contenedor `surveyTwo' pasado como parametro //
    }
}
