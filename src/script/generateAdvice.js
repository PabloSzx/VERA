"use strict";
const surveyText = require("../data/surveyText.json");
const surveyResult = require("../data/surveyResult.json");
const recommendation = require("../data/recommendation.json");

function startConstructionAdvice(
  containerSection,
  survey,
  factor,
  component,
  generateAdvice
) {
  var response = surveyText;
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

function generateAdviceSurveyOne(
  container,
  factor,
  survey,
  component,
  showAdvice
) {
  // genero recomendación para Autoconcepto //
  let loginId = localStorage.getItem("idStudent");
  var response = surveyResult;
  var levelResponse;
  for (var i = 0; i < Object.keys(response.result).length; i++) {
    if (response.result[i].studentId === loginId) {
      for (
        var j = 0;
        j < Object.keys(response.result[i].studentResponses).length;
        j++
      ) {
        if (response.result[i].studentResponses[j].factorId === factor) {
          console.log(response.result[i].studentResponses[j]);
          levelResponse = response.result[i].studentResponses[j].levelId;
          switch (levelResponse) {
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
  }
}

function generateAdviceSurveyTwo(
  container,
  factor,
  survey,
  component,
  callback
) {
  // Recomendacion para encuesta estrategias de aprendizaje //

  let loginId = localStorage.getItem("idStudent");
  if (factor === "Methodical") {
    var response = surveyResult;
    var levelResponse;
    for (var i = 0; i < Object.keys(response.result).length; i++) {
      if (response.result[i].studentId === loginId) {
        for (
          var j = 0;
          j < Object.keys(response.result[i].studentResponses).length;
          j++
        ) {
          if (response.result[i].studentResponses[j].factorId === factor) {
            console.log(response.result[i].studentResponses[j]);
            levelResponse = response.result[i].studentResponses[j].levelId;
            switch (levelResponse) {
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
  } else {
    var response = surveyResult;
    var levelResponse;
    for (var i = 0; i < Object.keys(response.result).length; i++) {
      if (response.result[i].studentId === loginId) {
        for (
          var j = 0;
          j < Object.keys(response.result[i].studentResponses).length;
          j++
        ) {
          if (
            response.result[i].studentResponses[j].factorId === factor &&
            response.result[i].studentResponses[j].componentId === component
          ) {
            console.log(response.result[i].studentResponses[j]);
            levelResponse = response.result[i].studentResponses[j].levelId;
            switch (levelResponse) {
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
  }
}

function showAdvice(container, factor, survey, component, level) {
  //genero texto de la recomendacion //
  var getRecommendation;
  // factor de estudio metodico y las de autoconcepto cuentan de la misma estructura //
  var response = recommendation;
  if (survey === "SurveyOne" || factor === "Methodical") {
    //console.log(response);
    for (var i = 0; i < Object.keys(response.surveys).length; i++) {
      if ((response.surveys[i].id = survey)) {
        for (
          var j = 0;
          j < Object.keys(response.surveys[i].factors).length;
          j++
        ) {
          if (response.surveys[i].factors[j].id === factor) {
            if (level === "high") {
              var getRecommendation = response.surveys[i].factors[j].high;
            } else {
              var getRecommendation = response.surveys[i].factors[j].low;
            }
          }
        }
      }
    }
  } else {
    for (var i = 0; i < Object.keys(response.surveys).length; i++) {
      if ((response.surveys[i].id = survey)) {
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
                if (level === "high") {
                  var getRecommendation =
                    response.surveys[i].factors[j].components[k].high;
                } else {
                  var getRecommendation =
                    response.surveys[i].factors[j].components[k].low;
                }
              }
            }
          }
        }
      }
    }
  }
  var element = document.createElement("p");
  element.innerHTML = getRecommendation;
  document.getElementById(container).appendChild(element);
}

exports.startConstructionAdvice = startConstructionAdvice;
exports.showAdvice = showAdvice;
exports.generateAdviceSurveyTwo = generateAdviceSurveyTwo;
exports.generateAdviceSurveyOne = generateAdviceSurveyOne;
