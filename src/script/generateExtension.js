"use strict";
const axios = require("axios");

module.exports = ({
  createTextIntroSectionOne,
  generateGraphOneSurveyOne,
  generateGraphTwoSurveyOne,
  generateGraphTwoSurveyTwo,
  generateBtnSectionTwo,
  generateGraphOneSurveyTwo,
  generateAdviceSurveyTwo,
}) => {
  async function containerSectionOne(
    container,
    survey,
    factor,
    component,
    startConstructionGraphicOne
  ) {
    let loginId = localStorage.getItem("idStudent"); // recupero id del estudiante, para poder cargar informacion relacionada //
    const surveys = await axios.get("/vera/surveys");
    const response = surveys.data;
    if (survey === "SurveyOne" || factor === "Methodical") {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              var containerId =
                "containerSectionOne" + response.surveys[i].factors[j].id; //containerSectionOneEmotional //
              var containerClass =
                "containerSectionOne" + response.surveys[i].id;
              var newContainer = document.createElement("div");
              newContainer.setAttribute("id", containerId);
              newContainer.setAttribute("class", containerClass);
              document.getElementById(container).appendChild(newContainer);
            }
          }
        }
      }
      if (survey === "SurveyOne") {
        createTextIntroSectionOne(containerId, survey, factor, component); // genero texto de introduccion para el primer grafico //
        startConstructionGraphicOne(
          loginId,
          container,
          containerId,
          survey,
          factor,
          component,
          generateGraphOneSurveyOne,
          generateBtnSectionTwo
        );
      } else {
        // Para generar graficos de estrategias de aprendizaje, utilizo otros parametros //
        createTextIntroSectionOne(containerId, survey, factor, component);
        startConstructionGraphicOne(
          loginId,
          container,
          containerId,
          survey,
          factor,
          component,
          generateGraphOneSurveyTwo,
          generateBtnSectionTwo
        );
      }
    } else {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
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
                    k <
                    Object.keys(response.surveys[i].factors[j].components)
                      .length;
                    k++
                  ) {
                    if (
                      response.surveys[i].factors[j].components[k].id ===
                      component
                    ) {
                      var containerId =
                        "containerSectionOne" +
                        response.surveys[i].factors[j].components[k].id;
                      var containerClass =
                        "containerSectionOne" + response.surveys[i].id;
                      var newContainer = document.createElement("div");
                      newContainer.setAttribute("id", containerId);
                      newContainer.setAttribute("class", containerClass);
                      document
                        .getElementById(container)
                        .appendChild(newContainer);

                      createTextIntroSectionOne(
                        containerId,
                        survey,
                        factor,
                        component
                      );
                      startConstructionGraphicOne(
                        loginId,
                        container,
                        containerId,
                        survey,
                        factor,
                        component,
                        generateGraphOneSurveyTwo,
                        generateBtnSectionTwo
                      ); //envio el id del estudiante, id del contenedor nuevo para agregar elementos y el contenedor principal para luego generar otras secciones //
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  async function containerSectionTwo(
    containerMain,
    survey,
    factor,
    component,
    startConstructionGraphicTwo
  ) {
    const surveys = await axios.get("/vera/surveys");
    const response = surveys.data;
    let loginId = localStorage.getItem("idStudent"); // obtengo el id del usuario que ingreso a la herramienta //
    if (survey === "SurveyOne" || factor === "Methodical") {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              var containerId =
                "containerSectionTwo" + response.surveys[i].factors[j].id; //containerSectionTwoEmotional //
              var containerClass =
                "containerSectionTwo" + response.surveys[i].id;
              var newContainer = document.createElement("div");
              newContainer.setAttribute("id", containerId);
              newContainer.setAttribute("class", containerClass);
              document.getElementById(containerMain).appendChild(newContainer);
              if (survey === "SurveyOne") {
                createTextIntroSectionTwo(
                  containerId,
                  survey,
                  factor,
                  component
                );
                startConstructionGraphicTwo(
                  loginId,
                  containerId,
                  containerMain,
                  survey,
                  factor,
                  component,
                  generateGraphTwoSurveyOne
                );
              } else {
                createTextIntroSectionTwo(
                  containerId,
                  survey,
                  factor,
                  component
                );
                startConstructionGraphicTwo(
                  loginId,
                  containerId,
                  containerMain,
                  survey,
                  factor,
                  component,
                  generateGraphTwoSurveyTwo
                );
              }
            }
          }
        }
      }
    } else {
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
                k <
                Object.keys(response.surveys[i].factors[j].components).length;
                k++
              ) {
                if (
                  response.surveys[i].factors[j].components[k].id === component
                ) {
                  var containerId =
                    "containerSectionTwo" +
                    response.surveys[i].factors[j].components[k].id; //containerSectionTwoDeep //
                  var containerClass =
                    "containerSectionTwo" + response.surveys[i].id;
                  var newContainer = document.createElement("div");
                  newContainer.setAttribute("id", containerId);
                  newContainer.setAttribute("class", containerClass);
                  document
                    .getElementById(containerMain)
                    .appendChild(newContainer);
                }
              }
            }
          }
        }
      }
      createTextIntroSectionTwo(containerId, survey, factor, component);
      startConstructionGraphicTwo(
        loginId,
        containerId,
        containerMain,
        survey,
        factor,
        component,
        generateGraphTwoSurveyTwo
      );
    }
  }

  async function containerSectionThree(
    containerMain,
    survey,
    factor,
    component,
    startConstructionAdvice
  ) {
    const surveys = await axios.get("/vera/surveys");
    const response = surveys.data;
    if (survey === "SurveyOne" || factor === "Methodical") {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              var containerId =
                "containerSectionThree" + response.surveys[i].factors[j].id; //containerShowMoreEmotional
              var containerClass =
                "containerSectionThree" + response.surveys[i].id;
              var newContainer = document.createElement("div");
              newContainer.setAttribute("id", containerId);
              newContainer.setAttribute("class", containerClass);
              document.getElementById(containerMain).appendChild(newContainer);
            }
          }
        }
      }
      if (survey === "SurveyOne") {
        startConstructionAdvice(
          containerId,
          survey,
          factor,
          component,
          generateAdviceSurveyOne
        ); //ejecuto func createAdvice, paso identificador del contenedor al que deseo agregar contenido //
      } else {
        startConstructionAdvice(
          containerId,
          survey,
          factor,
          component,
          generateAdviceSurveyTwo
        );
      }
    } else {
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
                k <
                Object.keys(response.surveys[i].factors[j].components).length;
                k++
              ) {
                if (
                  response.surveys[i].factors[j].components[k].id === component
                ) {
                  var containerId =
                    "containerSectionThree" +
                    response.surveys[i].factors[j].components[k].id; //containerShowMoreEmotional
                  var containerClass =
                    "containerSectionThree" + response.surveys[i].id;
                  var newContainer = document.createElement("div");
                  newContainer.setAttribute("id", containerId);
                  newContainer.setAttribute("class", containerClass);
                  document
                    .getElementById(containerMain)
                    .appendChild(newContainer);

                  startConstructionAdvice(
                    containerId,
                    survey,
                    factor,
                    component,
                    generateAdviceSurveyTwo
                  );
                }
              }
            }
          }
        }
      }
    }
  }
  return {
    containerSectionOne,
    containerSectionTwo,
    containerSectionThree,
  };
};
