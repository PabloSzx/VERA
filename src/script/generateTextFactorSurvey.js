"use strict";

const axios = require("axios");

module.exports = ({ containerSectionOne, createButtonFactorsComponent }) => {
  async function getIntroductionFactor(
    container,
    survey,
    factor,
    component,
    generateBtnSectionOne
  ) {
    // Recibo factor (pos de la dimension en el JSON) y view(contenedor donde agrego el elemento) y la fun generateBtnSectionOne //
    const surveys = await axios.get("/vera/surveys");
    const response = surveys.data;

    switch (
      survey //genera introducción a cada uno de los factores del autoconcepto
    ) {
      case "SurveyOne":
        var text = " ";
        var element = document.createElement("p");
        element.setAttribute("class", "textIntroductionSelfconcept");
        for (var i = 0; i < Object.keys(response.surveys).length; i++) {
          if (response.surveys[i].id === survey) {
            for (
              var j = 0;
              j < Object.keys(response.surveys[i].factors).length;
              j++
            ) {
              if (response.surveys[i].factors[j].id === factor) {
                text = response.surveys[i].factors[j].text1;
              }
            }
          }
        }
        element.innerHTML = text;
        document.getElementById(container).appendChild(element);
        generateBtnSectionOne(
          container,
          survey,
          factor,
          component,
          containerSectionOne
        ); // Ejecuto la función que imprime el texto de introduccion. Luego llamo a la función generateBtnSectionOne y paso como parametro containerSectionOne //

        break;

      case "SurveyTwo":
        var text = " ";
        var element = document.createElement("p");
        element.setAttribute("class", "textIntroductionLearningStrategy");
        for (var i = 0; i < Object.keys(response.surveys).length; i++) {
          if (response.surveys[i].id === survey) {
            for (
              var j = 0;
              j < Object.keys(response.surveys[i].factors).length;
              j++
            ) {
              if (response.surveys[i].factors[j].id === factor) {
                text = response.surveys[i].factors[j].text1;
              }
            }
          }
        }
        element.innerHTML = text;
        document.getElementById(container).appendChild(element);
        if (factor === "Methodical") {
          generateBtnSectionOne(
            container,
            survey,
            factor,
            component,
            containerSectionOne
          );
        } else {
          createButtonFactorsComponent(survey, factor, container); //Si se trata de la sección de procesamiento creo los btn de sus factores //
        }

        break;
    }
  }

  async function getIntroductionComponent(
    container,
    survey,
    factor,
    component,
    generateBtnSectionOne
  ) {
    /* Intro de cada dimensión de procesamiento de la info */
    const surveys = await axios.get("/vera/surveys");
    const response = surveys.data;
    var element = document.createElement("p");
    element.setAttribute("class", "textIntroductionComponentProsecution");
    for (var i = 0; i < Object.keys(response.surveys).length; i++) {
      if (response.surveys[i].id === survey) {
        for (
          var j = 0;
          j < Object.keys(response.surveys[i].factors).length;
          j++
        ) {
          if (response.surveys[i].factors[j].id === factor) {
            for (
              var k = 0;
              k < Object.keys(response.surveys[i].factors[j].components).length;
              k++
            ) {
              if (
                response.surveys[i].factors[j].components[k].id === component
              ) {
                element.innerHTML =
                  response.surveys[i].factors[j].components[k].text1;
                document.getElementById(container).appendChild(element);
              }
            }
          }
        }
      }
    }

    generateBtnSectionOne(
      container,
      survey,
      factor,
      component,
      containerSectionOne
    ); // Ejecuto la función que imprime el texto de introduccion. Luego llamo a la función generateBtnSectionOne y paso como parametro containerSectionOne //
  }
  return {
    getIntroductionFactor,
    getIntroductionComponent,
  };
};
