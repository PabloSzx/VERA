"use strict";
// Contenido de la pestaña de AUTOCONCEPTO //
var blockFunctionsTwo = true;
function openSurveyOne () { 
    openMe ("surveyOne","buttonSurveyOne"); // Hace visible el contenido de la vista AUTOCONCEPTO //
    if (blockFunctionsTwo) {
        blockFunctionsTwo = false;
        getIntroductionText ("surveyOne"); // Agrega el texto de introducción en el contenedor 'surveyOne' //
    }else {
        document.getElementById ("introductionsurveyOne").style.display = "block"; // Hace visible el texto de introducción en la pestaña AUTOCONCEPTO //
    }   
}

