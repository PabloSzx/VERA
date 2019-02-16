"use strict";

const surveyText = require("../data/surveyText.json");
//const { createTextIntroSectionOne } = require("./generateMainTextView");
//console.log("1createTextIntroSectionOne :", createTextIntroSectionOne);
// const {
//   generateGraphOneSurveyOne,
//   generateGraphTwoSurveyOne,
//   generateGraphTwoSurveyTwo,
// } = require("./generateGraph");
// console.log("1generateGraphOneSurveyOne", generateGraphOneSurveyOne);

const { generateBtnSectionTwo } = require("./generateButtons");

module.exports = ({
  createTextIntroSectionOne,
  generateGraphOneSurveyOne,
  generateGraphTwoSurveyOne,
  generateGraphTwoSurveyTwo,
}) => {
  function containerSectionOne(
    container,
    survey,
    factor,
    component,
    startConstructionGraphicOne
  ) {
    let loginId = localStorage.getItem("idStudent"); // recupero id del estudiante, para poder cargar informacion relacionada //
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

    //   var surveyhttp = new XMLHttpRequest();
    //   surveyhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //       var response = JSON.parse(surveyhttp.responseText);
    //       if (survey === "SurveyOne" || factor === "Methodical") {
    //         for (var i = 0; i < Object.keys(response.surveys).length; i++) {
    //           if (response.surveys[i].id === survey) {
    //             for (
    //               var j = 0;
    //               j < Object.keys(response.surveys[i].factors).length;
    //               j++
    //             ) {
    //               if (response.surveys[i].factors[j].id === factor) {
    //                 var containerId =
    //                   "containerSectionOne" + response.surveys[i].factors[j].id; //containerSectionOneEmotional //
    //                 var containerClass =
    //                   "containerSectionOne" + response.surveys[i].id;
    //                 var newContainer = document.createElement("div");
    //                 newContainer.setAttribute("id", containerId);
    //                 newContainer.setAttribute("class", containerClass);
    //                 document.getElementById(container).appendChild(newContainer);
    //               }
    //             }
    //           }
    //         }
    //         if (survey === "SurveyOne") {
    //           createTextIntroSectionOne(containerId, survey, factor, component); // genero texto de introduccion para el primer grafico //
    //           startConstructionGraphicOne(
    //             loginId,
    //             container,
    //             containerId,
    //             survey,
    //             factor,
    //             component,
    //             generateGraphOneSurveyOne
    //           );
    //         } else {
    //           // Para generar graficos de estrategias de aprendizaje, utilizo otros parametros //
    //           createTextIntroSectionOne(containerId, survey, factor, component);
    //           startConstructionGraphicOne(
    //             loginId,
    //             container,
    //             containerId,
    //             survey,
    //             factor,
    //             component,
    //             generateGraphOneSurveyTwo
    //           );
    //         }
    //       } else {
    //         for (var i = 0; i < Object.keys(response.surveys).length; i++) {
    //           if (response.surveys[i].id === survey) {
    //             for (var i = 0; i < Object.keys(response.surveys).length; i++) {
    //               if (response.surveys[i].id === survey) {
    //                 for (
    //                   var j = 0;
    //                   j < Object.keys(response.surveys[i].factors).length;
    //                   j++
    //                 ) {
    //                   if (response.surveys[i].factors[j].id === factor) {
    //                     for (
    //                       var k = 0;
    //                       k <
    //                       Object.keys(response.surveys[i].factors[j].components)
    //                         .length;
    //                       k++
    //                     ) {
    //                       if (
    //                         response.surveys[i].factors[j].components[k].id ===
    //                         component
    //                       ) {
    //                         var containerId =
    //                           "containerSectionOne" +
    //                           response.surveys[i].factors[j].components[k].id;
    //                         var containerClass =
    //                           "containerSectionOne" + response.surveys[i].id;
    //                         var newContainer = document.createElement("div");
    //                         newContainer.setAttribute("id", containerId);
    //                         newContainer.setAttribute("class", containerClass);
    //                         document
    //                           .getElementById(container)
    //                           .appendChild(newContainer);

    //                         createTextIntroSectionOne(
    //                           containerId,
    //                           survey,
    //                           factor,
    //                           component
    //                         );
    //                         startConstructionGraphicOne(
    //                           loginId,
    //                           container,
    //                           containerId,
    //                           survey,
    //                           factor,
    //                           component,
    //                           generateGraphOneSurveyTwo
    //                         ); //envio el id del estudiante, id del contenedor nuevo para agregar elementos y el contenedor principal para luego generar otras secciones //
    //                       }
    //                     }
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   };
    //   surveyhttp.open("GET", "data/surveyText.json", true);
    //surveyhttp.send();
  }

  function containerSectionTwo(
    containerMain,
    survey,
    factor,
    component,
    startConstructionGraphicTwo
  ) {
    var response = surveyText;
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

    //   var surveyhttp = new XMLHttpRequest();
    //   surveyhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //       var response = JSON.parse(surveyhttp.responseText);
    //       let loginId = localStorage.getItem("idStudent"); // obtengo el id del usuario que ingreso a la herramienta //
    //       if (survey === "SurveyOne" || factor === "Methodical") {
    //         for (var i = 0; i < Object.keys(response.surveys).length; i++) {
    //           if (response.surveys[i].id === survey) {
    //             for (
    //               var j = 0;
    //               j < Object.keys(response.surveys[i].factors).length;
    //               j++
    //             ) {
    //               if (response.surveys[i].factors[j].id === factor) {
    //                 var containerId =
    //                   "containerSectionTwo" + response.surveys[i].factors[j].id; //containerSectionTwoEmotional //
    //                 var containerClass =
    //                   "containerSectionTwo" + response.surveys[i].id;
    //                 var newContainer = document.createElement("div");
    //                 newContainer.setAttribute("id", containerId);
    //                 newContainer.setAttribute("class", containerClass);
    //                 document
    //                   .getElementById(containerMain)
    //                   .appendChild(newContainer);
    //                 if (survey === "SurveyOne") {
    //                   createTextIntroSectionTwo(
    //                     containerId,
    //                     survey,
    //                     factor,
    //                     component
    //                   );
    //                   startConstructionGraphicTwo(
    //                     loginId,
    //                     containerId,
    //                     containerMain,
    //                     survey,
    //                     factor,
    //                     component,
    //                     generateGraphTwoSurveyOne
    //                   );
    //                 } else {
    //                   createTextIntroSectionTwo(
    //                     containerId,
    //                     survey,
    //                     factor,
    //                     component
    //                   );
    //                   startConstructionGraphicTwo(
    //                     loginId,
    //                     containerId,
    //                     containerMain,
    //                     survey,
    //                     factor,
    //                     component,
    //                     generateGraphTwoSurveyTwo
    //                   );
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       } else {
    //         for (var i = 0; i < Object.keys(response.surveys).length; i++) {
    //           if (response.surveys[i].id === survey) {
    //             for (
    //               var j = 0;
    //               j < Object.keys(response.surveys[i].factors).length;
    //               j++
    //             ) {
    //               if (response.surveys[i].factors[j].id === factor) {
    //                 for (
    //                   var k = 0;
    //                   k <
    //                   Object.keys(response.surveys[i].factors[j].components).length;
    //                   k++
    //                 ) {
    //                   if (
    //                     response.surveys[i].factors[j].components[k].id ===
    //                     component
    //                   ) {
    //                     var containerId =
    //                       "containerSectionTwo" +
    //                       response.surveys[i].factors[j].components[k].id; //containerSectionTwoDeep //
    //                     var containerClass =
    //                       "containerSectionTwo" + response.surveys[i].id;
    //                     var newContainer = document.createElement("div");
    //                     newContainer.setAttribute("id", containerId);
    //                     newContainer.setAttribute("class", containerClass);
    //                     document
    //                       .getElementById(containerMain)
    //                       .appendChild(newContainer);
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         }
    //         createTextIntroSectionTwo(containerId, survey, factor, component);
    //         startConstructionGraphicTwo(
    //           loginId,
    //           containerId,
    //           containerMain,
    //           survey,
    //           factor,
    //           component,
    //           generateGraphTwoSurveyTwo
    //         );
    //       }
    //     }
    //   };
    //   surveyhttp.open("GET", "data/surveyText.json", true);
    //surveyhttp.send();
  }

  function containerSectionThree(
    containerMain,
    survey,
    factor,
    component,
    startConstructionAdvice
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

    //   var surveyhttp = new XMLHttpRequest();
    //   surveyhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //       var response = JSON.parse(surveyhttp.responseText);
    //       if (survey === "SurveyOne" || factor === "Methodical") {
    //         for (var i = 0; i < Object.keys(response.surveys).length; i++) {
    //           if (response.surveys[i].id === survey) {
    //             for (
    //               var j = 0;
    //               j < Object.keys(response.surveys[i].factors).length;
    //               j++
    //             ) {
    //               if (response.surveys[i].factors[j].id === factor) {
    //                 var containerId =
    //                   "containerSectionThree" + response.surveys[i].factors[j].id; //containerShowMoreEmotional
    //                 var containerClass =
    //                   "containerSectionThree" + response.surveys[i].id;
    //                 var newContainer = document.createElement("div");
    //                 newContainer.setAttribute("id", containerId);
    //                 newContainer.setAttribute("class", containerClass);
    //                 document
    //                   .getElementById(containerMain)
    //                   .appendChild(newContainer);
    //               }
    //             }
    //           }
    //         }
    //         if (survey === "SurveyOne") {
    //           startConstructionAdvice(
    //             containerId,
    //             survey,
    //             factor,
    //             component,
    //             generateAdviceSurveyOne
    //           ); //ejecuto func createAdvice, paso identificador del contenedor al que deseo agregar contenido //
    //         } else {
    //           startConstructionAdvice(
    //             containerId,
    //             survey,
    //             factor,
    //             component,
    //             generateAdviceSurveyTwo
    //           );
    //         }
    //       } else {
    //         for (var i = 0; i < Object.keys(response.surveys).length; i++) {
    //           if (response.surveys[i].id === survey) {
    //             for (
    //               var j = 0;
    //               j < Object.keys(response.surveys[i].factors).length;
    //               j++
    //             ) {
    //               if (response.surveys[i].factors[j].id === factor) {
    //                 for (
    //                   var k = 0;
    //                   k <
    //                   Object.keys(response.surveys[i].factors[j].components).length;
    //                   k++
    //                 ) {
    //                   if (
    //                     response.surveys[i].factors[j].components[k].id ===
    //                     component
    //                   ) {
    //                     var containerId =
    //                       "containerSectionThree" +
    //                       response.surveys[i].factors[j].components[k].id; //containerShowMoreEmotional
    //                     var containerClass =
    //                       "containerSectionThree" + response.surveys[i].id;
    //                     var newContainer = document.createElement("div");
    //                     newContainer.setAttribute("id", containerId);
    //                     newContainer.setAttribute("class", containerClass);
    //                     document
    //                       .getElementById(containerMain)
    //                       .appendChild(newContainer);

    //                     startConstructionAdvice(
    //                       containerId,
    //                       survey,
    //                       factor,
    //                       component,
    //                       generateAdviceSurveyTwo
    //                     );
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   };
    //   surveyhttp.open("GET", "data/surveyText.json", true);
    //surveyhttp.send();
  }
  return {
    containerSectionOne,
    containerSectionTwo,
    containerSectionThree,
  };
};
