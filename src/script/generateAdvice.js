"use strict";
const axios = require("axios");

async function startConstructionAdvice(
  containerSection,
  survey,
  factor,
  component,
  generateAdvice
) {
  const surveys = await axios.post("/vera/surveys");
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
            var id = "containerAdvice" + response.surveys[i].factors[j].id; // containerAdviceEmotional //
            var containerAdvice = document.createElement("div");
            var className = "ContainerAdvice";
            containerAdvice.setAttribute("id", id);
            containerAdvice.setAttribute("class", className);
            document
              .getElementById(containerSection)
              .appendChild(containerAdvice);
          }
        }
      }
    }
    generateAdvice(id, factor, survey, component, showAdvice);
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
              k < Object.keys(response.surveys[i].factors[j].components).length;
              k++
            ) {
              if (
                response.surveys[i].factors[j].components[k].id === component
              ) {
                var id =
                  "containerAdvice" +
                  response.surveys[i].factors[j].components[k].id;
                var containerAdvice = document.createElement("div");
                var className = "ContainerAdvice";
                containerAdvice.setAttribute("id", id);
                containerAdvice.setAttribute("class", className);
                document
                  .getElementById(containerSection)
                  .appendChild(containerAdvice);
              }
            }
          }
        }
      }
    }
    generateAdvice(id, factor, survey, component, showAdvice);
  }
}

async function generateAdviceSurveyOne(
  container,
  factor,
  survey,
  component,
  showAdvice
) {
  // genero recomendación para Autoconcepto //
  let id = localStorage.getItem("idStudent");

  const response = await axios.post("/vera/result", { id });
  const result = response.data;

  for (const studentResponse of result.studentResponses) {
    if (studentResponse.factorId === factor) {
      switch (studentResponse.levelId) {
        case "Improve":
          showAdvice(container, factor, survey, component, "low");
          break;
        case "Enrich":
          showAdvice(container, factor, survey, component, "low");
          break;
        case "Persist":
          showAdvice(container, factor, survey, component, "high");
          break;
      }
    }
  }
}

async function generateAdviceSurveyTwo(
  container,
  factor,
  survey,
  component,
  callback
) {
  // Recomendacion para encuesta estrategias de aprendizaje //

  let id = localStorage.getItem("idStudent");
  const response = await axios.post("/vera/result", { id });
  const result = response.data;

  if (factor === "Methodical") {
    for (const studentResponse of result.studentResponses) {
      if (studentResponse.factorId === factor) {
        switch (studentResponse.levelId) {
          case "Muy Bajo":
            showAdvice(container, factor, survey, component, "low");
            break;
          case "Bajo":
            showAdvice(container, factor, survey, component, "low");
            break;
          case "Medio":
            showAdvice(container, factor, survey, component, "low");
            break;
          case "Alto":
            showAdvice(container, factor, survey, component, "high");
            break;
          case "Muy Alto":
            showAdvice(container, factor, survey, component, "high");
            break;
        }
      }
    }
  } else {
    for (const studentResponse of result.studentResponses) {
      if (
        studentResponse.factorId === factor &&
        studentResponse.componentId === component
      ) {
        switch (studentResponse.levelId) {
          case "Muy Bajo":
            showAdvice(container, factor, survey, component, "low");
            break;
          case "Bajo":
            showAdvice(container, factor, survey, component, "low");
            break;
          case "Medio":
            showAdvice(container, factor, survey, component, "low");
            break;
          case "Alto":
            showAdvice(container, factor, survey, component, "high");
            break;
          case "Muy Alto":
            showAdvice(container, factor, survey, component, "high");
            break;
        }
      }
    }
  }
}

async function showAdvice(container, factor, survey, component, level) {
  //genero texto de la recomendacion //
  // factor de estudio metodico y las de autoconcepto cuentan de la misma estructura //
  var response = await axios.post("/vera/recommendation", {
    survey,
    factor,
    component,
    level,
  });

  const getRecommendation = response.data;

  var element = document.createElement("p");
  element.innerHTML = getRecommendation;
  document.getElementById(container).appendChild(element);
}

exports.startConstructionAdvice = startConstructionAdvice;
exports.showAdvice = showAdvice;
exports.generateAdviceSurveyTwo = generateAdviceSurveyTwo;
exports.generateAdviceSurveyOne = generateAdviceSurveyOne;
