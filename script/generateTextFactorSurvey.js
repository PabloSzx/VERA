"use strict";

function getIntroductionFactor (container, survey, factor, component, generateBtnSectionOne) { // Recibo factor (pos de la dimension en el JSON) y view(contenedor donde agrego el elemento) y la fun generateBtnSectionOne //
    switch (survey) {   //genera introducción a cada uno de los factores del autoconcepto
        case "SurveyOne" :
            var surveyhttp = new XMLHttpRequest();
            surveyhttp.onreadystatechange = function () {
                if (this.readyState == 4 &&  this.status == 200) {
                    var response = JSON.parse(surveyhttp.responseText);
                    var text = " ";
                    var element = document.createElement("p");
                    element.setAttribute("class","textIntroductionSelfconcept");
                    for ( var i = 0 ; i < Object.keys(response.surveys).length ; i++ ) {
                        if (response.surveys[i].id === survey) {
                            for ( var j = 0 ; j < Object.keys(response.surveys[i].factors).length ; j++ ) {
                                if (response.surveys[i].factors[j].id === factor) {
                                    text = response.surveys[i].factors[j].text1; 
                                }
                            }
                        }
                    }     
                    element.innerHTML = text;
                    document.getElementById(container).appendChild(element);
                    generateBtnSectionOne (container, survey, factor, component, containerSectionOne); // Ejecuto la función que imprime el texto de introduccion. Luego llamo a la función generateBtnSectionOne y paso como parametro containerSectionOne //     
                }
            }
            surveyhttp.open("GET", "data/surveyText.json",true);
            surveyhttp.send();
            break;

        case "SurveyTwo":
            var surveyhttp = new XMLHttpRequest();
            surveyhttp.onreadystatechange = function () {
                if (this.readyState == 4 &&  this.status == 200) {
                    var response = JSON.parse(surveyhttp.responseText);
                    var text = " ";
                    var element = document.createElement("p");
                    element.setAttribute("class","textIntroductionLearningStrategy");
                    for ( var i = 0 ; i < Object.keys(response.surveys).length ; i++ ) {
                        if (response.surveys[i].id === survey) {
                            for ( var j = 0 ; j < Object.keys(response.surveys[i].factors).length ; j++ ) {
                                if (response.surveys[i].factors[j].id === factor) {
                                    text = response.surveys[i].factors[j].text1; 
                                }
                            }
                        }
                    }
                    element.innerHTML = text;
                    document.getElementById(container).appendChild(element);
                    if (factor === "Methodical") {
                        generateBtnSectionOne (container, survey, factor, component, containerSectionOne); 
                    } else {
                        createButtonFactorsComponent(survey, factor, container); //Si se trata de la sección de procesamiento creo los btn de sus factores //
                    }
                }
            }
            surveyhttp.open("GET", "data/surveyText.json",true);
            surveyhttp.send();
            break;
    }
}

function getIntroductionComponent(container, survey, factor, component, generateBtnSectionOne) { /* Intro de cada dimensión de procesamiento de la info */
    var surveyhttp = new XMLHttpRequest();
    surveyhttp.onreadystatechange = function () {
        if (this.readyState == 4 &&  this.status == 200) {
            var response = JSON.parse(surveyhttp.responseText);
            var element = document.createElement("p");
            element.setAttribute("class","textIntroductionComponentProsecution");
            for ( var i = 0 ; i < Object.keys(response.surveys).length ; i++ ) {
                if (response.surveys[i].id === survey) {
                    for ( var j = 0 ; j < Object.keys(response.surveys[i].factors).length ; j++ ) {
                        if (response.surveys[i].factors[j].id === factor) {
                            for ( var k = 0 ; k < Object.keys(response.surveys[i].factors[j].components).length ; k++ ) {
                                if (response.surveys[i].factors[j].components[k].id === component) {
                                    element.innerHTML = response.surveys[i].factors[j].components[k].text1; 
                                    document.getElementById(container).appendChild(element);
                                }
                            }
                        }
                    }
                }
            }
           

            generateBtnSectionOne (container, survey, factor, component, containerSectionOne ); // Ejecuto la función que imprime el texto de introduccion. Luego llamo a la función generateBtnSectionOne y paso como parametro containerSectionOne //     
        }
    }
    surveyhttp.open("GET", "data/surveyText.json",true);
    surveyhttp.send();
}
