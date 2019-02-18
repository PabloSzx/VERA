"use strict";

const surveyResult = require("../data/surveyResult.json");
const surveyText = require("../data/surveyText.json");
module.exports = ({
  startConstructionAdvice,
  generateAdviceSurveyOne,
  generateAdviceSurveyTwo,
}) => {
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
  }

  function generateBtnSectionThree(
    containerMain,
    survey,
    factor,
    component,
    containerSectionThree
  ) {
    // Genera boton para visualizar el primer grafico simulando acordeon //
    var response = surveyText;
    if (survey === "SurveyOne" || factor === "Methodical") {
      var newButton = document.createElement("button");
      newButton.innerHTML = "¿ Que puedo hacer para mejorar ?";
      newButton.setAttribute("class", "btnSectionThree close");
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              var onclickName =
                "sectionThree" + response.surveys[i].factors[j].id + "()"; // SectionThreeEmotional() //
              newButton.setAttribute("onclick", onclickName);
              var buttonId =
                "btnSectionThree" + response.surveys[i].factors[j].id; // lbtnSectionThreeEmotional //
              newButton.setAttribute("id", buttonId);
              document.getElementById(containerMain).appendChild(newButton);

              containerSectionThree(
                containerMain,
                survey,
                factor,
                component,
                startConstructionAdvice
              ); // EJecuto containerSectionThree y paso como parametro la función genContainerSectionthree//
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
                  var newButton = document.createElement("button");
                  newButton.innerHTML = "¿ Que puedo hacer para mejorar ?";
                  newButton.setAttribute("class", "btnSectionThree close");
                  var onclickName =
                    "sectionThree" +
                    response.surveys[i].factors[j].components[k].id +
                    "()"; // SectionThreeEmotional() //
                  newButton.setAttribute("onclick", onclickName);
                  var buttonId =
                    "btnSectionThree" +
                    response.surveys[i].factors[j].components[k].id; // lbtnSectionThreeEmotional //
                  newButton.setAttribute("id", buttonId);
                  document.getElementById(containerMain).appendChild(newButton);

                  containerSectionThree(
                    containerMain,
                    survey,
                    factor,
                    component,
                    startConstructionAdvice
                  );
                }
              }
            }
          }
        }
      }
    }
  }

  function createTextIntroSectionTwo(container, survey, factor, component) {
    //Corresponde a la introdución a el primer grafico //
    var response = surveyText;
    var cont = document.createElement("p");
    var id = "introductionSectionOne" + container;
    cont.setAttribute("id", id);
    cont.setAttribute("class", "textIntroductionSectionOne");
    if (survey === "SurveyOne" || factor === "Methodical") {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              cont.innerHTML = response.surveys[i].factors[j].textGraphic2;
              document.getElementById(container).appendChild(cont);
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
                  cont.innerHTML =
                    response.surveys[i].factors[j].components[k].textGraphic2;
                  document.getElementById(container).appendChild(cont);
                }
              }
            }
          }
        }
      }
    }
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
  }

  function startConstructionGraphicOne(
    loginId,
    containerMain,
    containerSection,
    survey,
    factor,
    component,
    generateGraphOne,
    generateBtnSectionTwo
  ) {
    if (survey === "SurveyOne") {
      var response = surveyResult;
      var improve, enrich, persist, levelResponse;
      console.log(Object.keys(response.result).length);
      console.log(response);
      for (var i = 0; i < Object.keys(response.result).length; i++) {
        if (response.result[i].studentId === loginId) {
          for (
            var j = 0;
            j < Object.keys(response.result[i].groupData).length;
            j++
          ) {
            if (response.result[i].groupData[j].factorId === factor) {
              if (response.result[i].groupData[j].levelId === "Improve") {
                improve = response.result[i].groupData[j].cohortCount;
              }
              if (response.result[i].groupData[j].levelId === "Enrich") {
                enrich = response.result[i].groupData[j].cohortCount;
              }
              if (response.result[i].groupData[j].levelId === "Persist") {
                persist = response.result[i].groupData[j].cohortCount;
              }
            }
          }
          for (
            var j = 0;
            j < Object.keys(response.result[i].studentResponses).length;
            j++
          ) {
            if (response.result[i].studentResponses[j].factorId === factor) {
              levelResponse = response.result[i].studentResponses[j].levelId;
              console.log(levelResponse);
            }
          }
          generateGraphOne(
            loginId,
            levelResponse,
            containerMain,
            containerSection,
            survey,
            factor,
            component,
            improve,
            enrich,
            persist,
            generateBtnSectionTwo,
            containerSectionTwo
          );
          console.log("Improve: " + improve);
          console.log("Enrich: " + enrich);
          console.log("Persist: " + persist);
        }
      }

      //   var surveyhttp = new XMLHttpRequest();
      //   surveyhttp.onreadystatechange = function() {
      //     if (this.readyState == 4 && this.status == 200) {
      //       var response = JSON.parse(surveyhttp.responseText);
      //       var improve, enrich, persist, levelResponse;
      //       console.log(Object.keys(response.result).length);
      //       console.log(response);
      //       for (var i = 0; i < Object.keys(response.result).length; i++) {
      //         if (response.result[i].studentId === loginId) {
      //           for (
      //             var j = 0;
      //             j < Object.keys(response.result[i].groupData).length;
      //             j++
      //           ) {
      //             if (response.result[i].groupData[j].factorId === factor) {
      //               if (response.result[i].groupData[j].levelId === "Improve") {
      //                 improve = response.result[i].groupData[j].cohortCount;
      //               }
      //               if (response.result[i].groupData[j].levelId === "Enrich") {
      //                 enrich = response.result[i].groupData[j].cohortCount;
      //               }
      //               if (response.result[i].groupData[j].levelId === "Persist") {
      //                 persist = response.result[i].groupData[j].cohortCount;
      //               }
      //             }
      //           }
      //           for (
      //             var j = 0;
      //             j < Object.keys(response.result[i].studentResponses).length;
      //             j++
      //           ) {
      //             if (
      //               response.result[i].studentResponses[j].factorId === factor
      //             ) {
      //               levelResponse =
      //                 response.result[i].studentResponses[j].levelId;
      //               console.log(levelResponse);
      //             }
      //           }
      //           generateGraphOne(
      //             loginId,
      //             levelResponse,
      //             containerMain,
      //             containerSection,
      //             survey,
      //             factor,
      //             component,
      //             improve,
      //             enrich,
      //             persist,
      //             generateBtnSectionTwo
      //           );
      //           console.log("Improve: " + improve);
      //           console.log("Enrich: " + enrich);
      //           console.log("Persist: " + persist);
      //         }
      //       }
      //     }
      //   };
      //   surveyhttp.open("GET", "data/surveyResult.json", true);
      //surveyhttp.send();
    } else {
      var response = surveyResult;
      var veryLow, low, medium, high, veryHigh, levelResponse;
      if (factor === "Methodical") {
        for (var i = 0; i < Object.keys(response.result).length; i++) {
          if (response.result[i].studentId === loginId) {
            for (
              var j = 0;
              j < Object.keys(response.result[i].groupData).length;
              j++
            ) {
              if (response.result[i].groupData[j].factorId === factor) {
                if (response.result[i].groupData[j].levelId === "VeryLow") {
                  veryLow = response.result[i].groupData[j].cohortCount;
                }
                if (response.result[i].groupData[j].levelId === "Low") {
                  low = response.result[i].groupData[j].cohortCount;
                }
                if (response.result[i].groupData[j].levelId === "Medium") {
                  medium = response.result[i].groupData[j].cohortCount;
                }
                if (response.result[i].groupData[j].levelId === "High") {
                  high = response.result[i].groupData[j].cohortCount;
                }
                if (response.result[i].groupData[j].levelId === "VeryHigh") {
                  veryHigh = response.result[i].groupData[j].cohortCount;
                }
              }
            }
            for (
              var j = 0;
              j < Object.keys(response.result[i].studentResponses).length;
              j++
            ) {
              if (response.result[i].studentResponses[j].factorId === factor) {
                levelResponse = response.result[i].studentResponses[j].levelId;
                //console.log(levelResponse);
              }
            }
          }
        }
      } else {
        for (var i = 0; i < Object.keys(response.result).length; i++) {
          if (response.result[i].studentId === loginId) {
            for (
              var j = 0;
              j < Object.keys(response.result[i].groupData).length;
              j++
            ) {
              if (
                response.result[i].groupData[j].factorId === factor &&
                response.result[i].groupData[j].componentId === component
              ) {
                if (response.result[i].groupData[j].levelId === "VeryLow") {
                  veryLow = response.result[i].groupData[j].cohortCount;
                }
                if (response.result[i].groupData[j].levelId === "Low") {
                  low = response.result[i].groupData[j].cohortCount;
                }
                if (response.result[i].groupData[j].levelId === "Medium") {
                  medium = response.result[i].groupData[j].cohortCount;
                }
                if (response.result[i].groupData[j].levelId === "High") {
                  high = response.result[i].groupData[j].cohortCount;
                }
                if (response.result[i].groupData[j].levelId === "VeryHigh") {
                  veryHigh = response.result[i].groupData[j].cohortCount;
                }
              }
            }
            for (
              var j = 0;
              j < Object.keys(response.result[i].studentResponses).length;
              j++
            ) {
              if (
                response.result[i].studentResponses[j].factorId === factor &&
                response.result[i].studentResponses[j].componentId === component
              ) {
                levelResponse = response.result[i].studentResponses[j].levelId;
                //console.log(response.result[i].studentResponses[j]);
                // console.log(levelResponse);
              }
            }
          }
        }
      }
      generateGraphOne(
        loginId,
        levelResponse,
        containerMain,
        containerSection,
        survey,
        factor,
        component,
        veryLow,
        low,
        medium,
        high,
        veryHigh,
        generateBtnSectionTwo,
        containerSectionTwo
      );

    }
  }

  function generateGraphOneSurveyOne(
    loginId,
    levelResponse,
    containerMain,
    containerSection,
    survey,
    factor,
    component,
    improve,
    enrich,
    persist,
    generateBtnSectionTwo,
    containerSectionTwo
  ) {
    var totalRow = Math.round(Math.max(improve, enrich, persist) / 10 + 0.4);
    var maxHeight = 45 + totalRow * 18 + 30; // el largo del contenedor suma del espacio para label + las filas y un extra para indicar nivel //
    var maxWidth = 200;
    var newContainer = document.createElement("div");
    var nameClass = "graphicOne" + factor;
    newContainer.setAttribute("id", "graphicOne");
    newContainer.setAttribute("class", nameClass);
    document.getElementById(containerSection).appendChild(newContainer);

    var groupImprove = d3
      .select("." + nameClass)
      .append("svg")
      .attr("width", maxWidth) //ancho (lados)
      .attr("height", maxHeight) //largo (abajo)
      .attr("id", "lowLevel")
      .attr("class", "graphOne");

    groupImprove
      .append("text")
      .text("Mejorar")
      .attr("text-anchor", "middle")
      .attr("x", 100)
      .attr("y", 20)
      .attr("fill", "black");

    var posX = 10,
      posY = 40;
    for (var i = 1; i <= improve; i++) {
      if (i % 10 === 0) {
        groupImprove
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 9)
          .attr("fill", "gray");
        posY = posY + 20;
        posX = 10;
      } else {
        groupImprove
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 9)
          .attr("fill", "gray");
        posX = posX + 20;
      }
    }

    var groupEnrich = d3
      .select("." + nameClass)
      .append("svg")
      .attr("width", maxWidth)
      .attr("height", maxHeight)
      .attr("id", "mediumLevel")
      .attr("class", "graphOne");

    groupEnrich
      .append("text")
      .text("Enriquecer")
      .attr("text-anchor", "middle")
      .attr("x", 100)
      .attr("y", 20)
      .attr("fill", "black");

    (posX = 10), (posY = 40);
    for (var i = 1; i <= enrich; i++) {
      if (i % 10 === 0) {
        groupEnrich
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 9)
          .attr("fill", "gray");
        posY = posY + 20;
        posX = 10;
      } else {
        groupEnrich
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 9)
          .attr("fill", "gray");
        posX = posX + 20;
      }
    }

    var groupPersist = d3
      .select("." + nameClass)
      .append("svg")
      .attr("width", maxWidth)
      .attr("height", maxHeight)
      .attr("id", "highLevel")
      .attr("class", "graphOne");

    groupPersist
      .append("text")
      .text("Persistir")
      .attr("text-anchor", "middle")
      .attr("x", 100)
      .attr("y", 20)
      .attr("fill", "black");

    (posX = 10), (posY = 40);
    for (var i = 1; i <= persist; i++) {
      if (i % 10 === 0) {
        groupPersist
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 9)
          .attr("fill", "gray");
        posY = posY + 20;
        posX = 10;
      } else {
        groupPersist
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 9)
          .attr("fill", "gray");
        posX = posX + 20;
      }
    }

    switch (levelResponse) {
      case "Improve":
        markPosition(groupImprove, maxHeight, maxWidth);
        break;
      case "Enrich":
        markPosition(groupEnrich, maxHeight, maxWidth);
        break;
      case "Persist":
        markPosition(groupPersist, maxHeight, maxWidth);
        break;
    }

    var newContainerTwo = document.createElement("div"); // contenedor que contendra a cada gráfico //
    newContainerTwo.setAttribute("class", "levelIndicators" + factor);
    newContainerTwo.setAttribute("id", "levelIndicators");
    document.getElementById(containerSection).appendChild(newContainerTwo);

    var labelIndicatorsLow = d3
      .select(".levelIndicators" + factor)
      .append("text")
      .text("Nivel Bajo " + "(" + improve + ")")
      .attr("class", "indicatorLevel")
      .attr("id", "indicatorLowLevel");

    var labelIndicatorsNormal = d3
      .select(".levelIndicators" + factor)
      .append("text")
      .text("Nivel Medio " + "(" + enrich + ")")
      .attr("class", "indicatorLevel")
      .attr("id", "indicatorNormalLevel");

    var labelIndicatorsHigh = d3
      .select(".levelIndicators" + factor)
      .append("text")
      .text("Nivel Alto " + "(" + persist + ")")
      .attr("class", "indicatorLevel")
      .attr("id", "indicatorHighLevel");

    generateBtnSectionTwo(
      containerMain,
      survey,
      factor,
      component,
      containerSectionTwo
    );
    //generateBtnSectionThree(containerMain, survey, factor, component,  containerSectionThree);
  }

  function generateGraphOneSurveyTwo(
    loginId,
    levelResponse,
    containerMain,
    containerSection,
    survey,
    factor,
    component,
    veryLow,
    low,
    medium,
    high,
    veryHigh,
    generateBtnSectionTwo,
    containerSectionTwo
  ) {
    var totalRow = Math.round(
      Math.max(veryLow, low, medium, high, veryHigh) / 10 + 0.4
    );
    var maxHeight = 40 + totalRow * 18 + 25; // el largo del contenedor suma del espacio para label + las filas y un extra para indicar nivel //
    var maxWidth = 160;
    var divContainer = document.createElement("div");
    var nameClass = "graphicOneLS" + containerSection;
    divContainer.setAttribute("id", "graphicOneLS");
    divContainer.setAttribute("class", nameClass);
    document.getElementById(containerSection).appendChild(divContainer);

    var groupVeryLow = d3
      .select("." + nameClass) // Contenedor para los estudiantes en el nivel más bajo //
      .append("svg")
      .attr("width", maxWidth)
      .attr("height", maxHeight)
      .attr("id", "veryLow")
      .attr("class", "graphOne");

    groupVeryLow
      .append("text")
      .text("Muy Bajo " + "(" + veryLow + ")")
      .attr("text-anchor", "middle")
      .attr("x", 80)
      .attr("y", 20)
      .attr("fill", "black");

    var posX = 8,
      posY = 40;
    for (var i = 1; i <= veryLow; i++) {
      if (i % 10 === 0) {
        groupVeryLow
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 7)
          .attr("fill", "gray");
        posY = posY + 16;
        posX = 8;
      } else {
        groupVeryLow
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 7)
          .attr("fill", "gray");
        posX = posX + 16;
      }
    }

    var groupLow = d3
      .select("." + nameClass) // segundo contenedor para los estudiantes en el nivel bajo //
      .append("svg")
      .attr("width", maxWidth)
      .attr("height", maxHeight)
      .attr("id", "low")
      .attr("class", "graphOne");

    groupLow
      .append("text")
      .text("Bajo " + "(" + low + ")")
      .attr("text-anchor", "middle")
      .attr("x", 80)
      .attr("y", 20)
      .attr("fill", "black");

    posX = 8;
    posY = 40;
    for (var i = 1; i <= low; i++) {
      if (i % 10 === 0) {
        groupLow
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 7)
          .attr("fill", "gray");
        posY = posY + 16;
        posX = 8;
      } else {
        groupLow
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 7)
          .attr("fill", "gray");
        posX = posX + 16;
      }
    }

    var groupMedium = d3
      .select("." + nameClass) // Tercer contenedor para los estudiantes en el nivel medio //
      .append("svg")
      .attr("width", maxWidth) //ancho (lados)
      .attr("height", maxHeight) //largo (abajo)
      .attr("id", "medium")
      .attr("class", "graphOne");

    groupMedium
      .append("text")
      .text("Medio " + "(" + medium + ")")
      .attr("text-anchor", "middle")
      .attr("x", 80)
      .attr("y", 20)
      .attr("fill", "black");

    posX = 8;
    posY = 40;
    for (var i = 1; i <= medium; i++) {
      if (i % 10 === 0) {
        groupMedium
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 7)
          .attr("fill", "gray");
        posY = posY + 16;
        posX = 8;
      } else {
        groupMedium
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 7)
          .attr("fill", "gray");
        posX = posX + 16;
      }
    }

    var groupHigh = d3
      .select("." + nameClass) // Cuarto contenedor para los estudiantes en el nivel medio //
      .append("svg")
      .attr("width", maxWidth) //ancho (lados)
      .attr("height", maxHeight) //largo (abajo)
      .attr("id", "high")
      .attr("class", "graphOne");

    groupHigh
      .append("text")
      .text("Alto " + "(" + high + ")")
      .attr("text-anchor", "middle")
      .attr("x", 80)
      .attr("y", 20)
      .attr("fill", "black");

    posX = 8;
    posY = 40;
    for (var i = 1; i <= high; i++) {
      if (i % 10 === 0) {
        groupHigh
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 7)
          .attr("fill", "gray");
        posY = posY + 16;
        posX = 8;
      } else {
        groupHigh
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 7)
          .attr("fill", "gray");
        posX = posX + 16;
      }
    }

    var groupVeryHigh = d3
      .select("." + nameClass)
      .append("svg")
      .attr("width", maxWidth)
      .attr("height", maxHeight)
      .attr("id", "veryHigh")
      .attr("class", "graphOne");

    groupVeryHigh
      .append("text")
      .text("Muy Alto " + "(" + veryHigh + ")")
      .attr("text-anchor", "middle")
      .attr("x", 80)
      .attr("y", 20)
      .attr("fill", "black");

    posX = 8;
    posY = 40;
    for (var i = 1; i <= veryHigh; i++) {
      if (i % 10 === 0) {
        groupVeryHigh
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 7)
          .attr("fill", "gray");
        posY = posY + 16;
        posX = 8;
      } else {
        groupVeryHigh
          .append("circle")
          .attr("cx", posX)
          .attr("cy", posY)
          .attr("r", 7)
          .attr("fill", "gray");
        posX = posX + 16;
      }
    }
    console.log(levelResponse);
    switch (levelResponse) {
      case "Muy Bajo":
        markPosition(groupVeryLow, maxHeight, maxWidth);
        break;
      case "Bajo":
        markPosition(groupLow, maxHeight, maxWidth);
        break;
      case "Medio":
        markPosition(groupMedium, maxHeight, maxWidth);
        break;
      case "Alto":
        markPosition(groupHigh, maxHeight, maxWidth);
        break;
      case "Muy Alto":
        markPosition(groupVeryHigh, maxHeight, maxWidth);
        break;
    }

    generateBtnSectionTwo(
      containerMain,
      survey,
      factor,
      component,
      containerSectionTwo
    );
  }

  function startConstructionGraphicTwo(
    loginId,
    containerSection,
    containerMain,
    survey,
    factor,
    component,
    generateGraphTwo
  ) {
    if (survey === "SurveyOne") {
      var response = surveyResult;
      var improve, enrich, persist;
      for (var i = 0; i < Object.keys(response.result).length; i++) {
        if (response.result[i].studentId === loginId) {
          for (
            var j = 0;
            j < Object.keys(response.result[i].groupData).length;
            j++
          ) {
            if (response.result[i].groupData[j].factorId === factor) {
              if (response.result[i].groupData[j].levelId === "Improve") {
                improve = response.result[i].groupData[j].historic;
              }
              if (response.result[i].groupData[j].levelId === "Enrich") {
                enrich = response.result[i].groupData[j].historic;
              }
              if (response.result[i].groupData[j].levelId === "Persist") {
                persist = response.result[i].groupData[j].historic;
              }
            }
          }
        }
      }
      generateGraphTwo(
        loginId,
        containerSection,
        containerMain,
        survey,
        factor,
        component,
        improve,
        enrich,
        persist,
        generateBtnSectionThree
      );

    } else {
      var response = surveyResult;
      var veryLow, low, medium, high, veryHigh;
      if (factor === "Methodical") {
        for (var i = 0; i < Object.keys(response.result).length; i++) {
          if (response.result[i].studentId === loginId) {
            for (
              var j = 0;
              j < Object.keys(response.result[i].groupData).length;
              j++
            ) {
              if (response.result[i].groupData[j].factorId === factor) {
                if (response.result[i].groupData[j].levelId === "VeryLow") {
                  veryLow = response.result[i].groupData[j].historic;
                }
                if (response.result[i].groupData[j].levelId === "Low") {
                  low = response.result[i].groupData[j].historic;
                }
                if (response.result[i].groupData[j].levelId === "Medium") {
                  medium = response.result[i].groupData[j].historic;
                }
                if (response.result[i].groupData[j].levelId === "High") {
                  high = response.result[i].groupData[j].historic;
                }
                if (response.result[i].groupData[j].levelId === "VeryHigh") {
                  veryHigh = response.result[i].groupData[j].historic;
                }
              }
            }
          }
        }
      } else {
        for (var i = 0; i < Object.keys(response.result).length; i++) {
          if (response.result[i].studentId === loginId) {
            for (
              var j = 0;
              j < Object.keys(response.result[i].groupData).length;
              j++
            ) {
              if (
                response.result[i].groupData[j].factorId === factor &&
                response.result[i].groupData[j].componentId === component
              ) {
                if (response.result[i].groupData[j].levelId === "VeryLow") {
                  veryLow = response.result[i].groupData[j].historic;
                }
                if (response.result[i].groupData[j].levelId === "Low") {
                  low = response.result[i].groupData[j].historic;
                }
                if (response.result[i].groupData[j].levelId === "Medium") {
                  medium = response.result[i].groupData[j].historic;
                }
                if (response.result[i].groupData[j].levelId === "High") {
                  high = response.result[i].groupData[j].historic;
                }
                if (response.result[i].groupData[j].levelId === "VeryHigh") {
                  veryHigh = response.result[i].groupData[j].historic;
                }
              }
            }
          }
        }
      }
      generateGraphTwo(
        loginId,
        containerSection,
        containerMain,
        survey,
        factor,
        component,
        veryLow,
        low,
        medium,
        high,
        veryHigh,
        generateBtnSectionThree
      );

    }
  }

  function generateGraphTwoSurveyOne(
    loginId,
    containerSection,
    containerMain,
    survey,
    factor,
    component,
    improve,
    enrich,
    persist,
    generateBtnSectionThree
  ) {
    var heightMax = 265,
      widthMax = 200;
    var newContainer = document.createElement("div"); // contenedor que contendra a cada gráfico //
    var nameClass = "graphicTwo" + containerSection;
    newContainer.setAttribute("id", "graphicTwo");
    newContainer.setAttribute("class", nameClass);
    newContainer.setAttribute("height", heightMax);
    document.getElementById(containerSection).appendChild(newContainer);

    var groupImprove = d3
      .select("." + nameClass) // contenedor individual por categoria //
      .append("svg")
      .attr("width", widthMax)
      .attr("height", heightMax)
      .attr("id", "lowLevelTwo")
      .attr("class", "graphTwo");

    groupImprove
      .append("text")
      .text("Mejorar")
      .attr("text-anchor", "middle")
      .attr("x", 100)
      .attr("y", 25)
      .attr("fill", "black");

    if (
      Math.round(improve[0]) + Math.round(improve[1]) + Math.round(improve[2]) >
      100
    ) {
      improve[0]--;
    }
    if (
      Math.round(improve[0]) +
        Math.round(improve[1]) +
        Math.round(improve[2]) ===
      99
    ) {
      improve[2]++;
    }
    console.log(
      Math.round(improve[0]) + Math.round(improve[1]) + Math.round(improve[2])
    );

    groupImprove
      .append("text")
      .text(
        "Nivel Bajo " +
          "(" +
          Math.round(improve[2]) +
          " - " +
          Math.round(improve[1]) +
          " - " +
          Math.round(improve[0]) +
          ")"
      )
      .attr("text-anchor", "middle")
      .attr("x", 100)
      .attr("y", 260)
      .attr("fill", "black")
      .attr("font-size", "12");

    var groupEnrich = d3
      .select("." + nameClass)
      .append("svg")
      .attr("width", widthMax)
      .attr("height", heightMax)
      .attr("id", "mediumLevelTwo")
      .attr("class", "graphTwo");

    groupEnrich
      .append("text")
      .text("Enriquecer")
      .attr("text-anchor", "middle")
      .attr("x", 100)
      .attr("y", 25)
      .attr("fill", "black");

    if (
      Math.round(enrich[0]) + Math.round(enrich[1]) + Math.round(enrich[2]) >
      100
    ) {
      enrich[0]--;
    }
    if (
      Math.round(enrich[0]) + Math.round(enrich[1]) + Math.round(enrich[2]) ===
      99
    ) {
      enrich[2]++;
    }
    //console.log(Math.round(enrich[0])+ Math.round(enrich[1])+ Math.round(enrich[2]) )
    groupEnrich
      .append("text")
      .text(
        "Nivel Medio " +
          "(" +
          Math.round(enrich[2]) +
          " - " +
          Math.round(enrich[1]) +
          " - " +
          Math.round(enrich[0]) +
          ")"
      )
      .attr("text-anchor", "middle")
      .attr("x", 100)
      .attr("y", 260)
      .attr("fill", "black")
      .attr("font-size", "12");

    var groupPersist = d3
      .select("." + nameClass)
      .append("svg")
      .attr("width", widthMax)
      .attr("height", heightMax)
      .attr("id", "highLevelTwo")
      .attr("class", "graphTwo");

    groupPersist
      .append("text")
      .text("Persistir")
      .attr("text-anchor", "middle")
      .attr("x", 100)
      .attr("y", 25)
      .attr("fill", "black");

    if (
      Math.round(persist[0]) + Math.round(persist[1]) + Math.round(persist[2]) >
      100
    ) {
      persist[0]--;
    }
    if (
      Math.round(persist[0]) +
        Math.round(persist[1]) +
        Math.round(persist[2]) ===
      99
    ) {
      persist[2]++;
    }
    //console.log(Math.round(persist[0])+ Math.round(persist[1])+ Math.round(persist[2])  );

    groupPersist
      .append("text")
      .text(
        "Nivel Alto " +
          "(" +
          Math.round(persist[2]) +
          " - " +
          Math.round(persist[1]) +
          " - " +
          Math.round(persist[0]) +
          ")"
      )
      .attr("text-anchor", "middle")
      .attr("x", 100)
      .attr("y", 260)
      .attr("fill", "black")
      .attr("font-size", "12");

    //  AGREGAR ELEMENTOS
    //  Desde los arreglos con los porcentajes por nivel, la posición cero es la más baja, la posición uno la media y la dos la más alta
    //  Nivel Bajo
    var width = 18,
      height = 18,
      posX = 0,
      posY = 40,
      aux = posX,
      jumpLine = 1;
    for (var i = 1; i <= Math.round(improve[2]); i++) {
      if (i % 10 === 0) {
        groupImprove
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = posX;
        jumpLine = 0;
        posY = posY + 20;
      } else {
        groupImprove
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = aux + 20;
      }
      jumpLine++;
    }

    for (var i = 1; i <= Math.round(improve[1]); i++) {
      if (jumpLine % 10 === 0) {
        groupImprove
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        jumpLine = 0;
        aux = posX;
        posY = posY + 20;
      } else {
        groupImprove
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = aux + 20;
      }
      jumpLine++;
    }

    for (var i = 1; i <= Math.round(improve[0]); i++) {
      if (jumpLine % 10 === 0) {
        groupImprove
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        jumpLine = 0;
        aux = posX;
        posY = posY + 20;
      } else {
        groupImprove
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = aux + 20;
      }
      jumpLine++;
    }

    //Nivel Medio
    (posX = 0), (posY = 40), (aux = posX), (jumpLine = 1);
    for (var i = 1; i <= Math.round(enrich[2]); i++) {
      if (jumpLine % 10 === 0) {
        groupEnrich
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = posX;
        posY = posY + 20;
        jumpLine = 0;
      } else {
        groupEnrich
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = aux + 20;
      }
      jumpLine++;
    }

    for (var i = 1; i <= Math.round(enrich[1]); i++) {
      if (jumpLine % 10 === 0) {
        groupEnrich
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = posX;
        posY = posY + 20;
        jumpLine = 0;
      } else {
        groupEnrich
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = aux + 20;
      }
      jumpLine++;
    }

    for (var i = 1; i <= Math.round(enrich[0]); i++) {
      if (jumpLine % 10 === 0) {
        groupEnrich
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = posX;
        posY = posY + 20;
        jumpLine = 0;
      } else {
        groupEnrich
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = aux + 20;
      }
      jumpLine++;
    }

    //Nivel Alto
    (posX = 0), (posY = 40), (aux = posX), (jumpLine = 1);
    for (var i = 1; i <= Math.round(persist[2]); i++) {
      if (jumpLine % 10 === 0) {
        groupPersist
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = posX;
        posY = posY + 20;
        jumpLine = 0;
      } else {
        groupPersist
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = aux + 20;
      }
      jumpLine++;
    }

    for (var i = 1; i <= Math.round(persist[1]); i++) {
      if (jumpLine % 10 === 0) {
        groupPersist
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = posX;
        posY = posY + 20;
        jumpLine = 0;
      } else {
        groupPersist
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = aux + 20;
      }
      jumpLine++;
    }

    for (var i = 1; i <= Math.round(persist[0]); i++) {
      if (jumpLine % 10 === 0) {
        groupPersist
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = posX;
        posY = posY + 20;
        jumpLine = 0;
      } else {
        groupPersist
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = aux + 20;
      }
      jumpLine++;
    }

    var newContainerTwo = document.createElement("div"); // contenedor que contendra a cada gráfico //
    newContainerTwo.setAttribute("id", "symbology" + factor);
    newContainerTwo.setAttribute("class", "symbologyGraph");
    document.getElementById(containerSection).appendChild(newContainerTwo);
    newContainerTwo.innerHTML =
      "<br/> <center><svg width='18' height = '18' > <rect width='18' height='18' style='fill:#a1d99b'/></svg> Aprobaron todas sus asignaturas &nbsp;&nbsp;&nbsp; <svg width='18' height = '18' > <rect width='18' height='18' style='fill:#fed976'/></svg> Reprobaron una asignatura &nbsp;&nbsp;&nbsp; <svg width='18' height = '18' > <rect width='18' height='18' style='fill:#ffab91'/></svg>   Reprobaron dos o más asignaturas </center>";

    generateBtnSectionThree(
      containerMain,
      survey,
      factor,
      component,
      containerSectionThree
    );
  }

  function generateGraphTwoSurveyTwo(
    loginId,
    containerSection,
    containerMain,
    survey,
    factor,
    component,
    veryLow,
    low,
    medium,
    high,
    veryHigh,
    generateBtnSectionThree
  ) {
    var heightMax = 200;
    var widthMax = 160;
    var svgContainer = document.createElement("div");
    var nameClass = "graphicTwo" + containerSection;
    svgContainer.setAttribute("id", "graphicTwo");
    svgContainer.setAttribute("class", nameClass);
    svgContainer.setAttribute("height", heightMax);
    document.getElementById(containerSection).appendChild(svgContainer);

    var sad, good, normal;

    sad = Math.round(veryLow[0]);
    normal = Math.round(veryLow[1]);
    good = Math.round(veryLow[2]);

    if (sad + good + normal > 100) {
      sad--;
    }
    if (good + sad + normal === 99) {
      good++;
    }

    var groupVeryLow = d3
      .select("." + nameClass) // Sección nivel másbajo //
      .append("svg")
      .attr("width", widthMax)
      .attr("height", heightMax)
      .attr("id", "veryLowTwo")
      .attr("class", "graphTwo");

    groupVeryLow
      .append("text")
      .text("Muy Bajo")
      .attr("text-anchor", "middle")
      .attr("x", 80)
      .attr("y", 17)
      .attr("fill", "black");

    groupVeryLow
      .append("text") // Contenido con los porcentajes //
      .attr("x", 80)
      .attr("y", 30)
      .attr("text-anchor", "middle")
      .text("(" + good + " - " + normal + " - " + sad + ")")
      .style("font-size", "11px");

    var width = 14,
      height = 14,
      posX = 0,
      posY = 40,
      aux = posX,
      jumpLine = 1;
    for (var i = 1; i <= good; i++) {
      if (i % 10 === 0) {
        groupVeryLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupVeryLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = aux + 16;
      }
      jumpLine++;
    }

    for (var i = 1; i <= normal; i++) {
      if (jumpLine % 10 === 0) {
        groupVeryLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupVeryLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = aux + 16;
      }
      jumpLine++;
    }

    for (var i = 1; i <= sad; i++) {
      if (jumpLine % 10 === 0) {
        groupVeryLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupVeryLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = aux + 16;
      }
      jumpLine++;
    }

    var groupLow = d3
      .select("." + nameClass)
      .append("svg")
      .attr("width", widthMax)
      .attr("height", heightMax)
      .attr("id", "lowTwo")
      .attr("class", "graphTwo");

    groupLow
      .append("text")
      .text("Bajo")
      .attr("text-anchor", "middle")
      .attr("x", 80)
      .attr("y", 17)
      .attr("fill", "black");

    sad = Math.round(low[0]);
    normal = Math.round(low[1]);
    good = Math.round(low[2]);

    if (sad + good + normal > 100) {
      sad--;
    }
    if (good + sad + normal === 99) {
      good++;
    }

    groupLow
      .append("text") // Contenido con los porcentajes //
      .attr("x", 80)
      .attr("y", 30)
      .attr("text-anchor", "middle")
      .text("(" + good + " - " + normal + " - " + sad + ")")
      .style("font-size", "11px");

    posY = 40;
    (aux = posX), (jumpLine = 1);
    for (var i = 1; i <= good; i++) {
      if (i % 10 === 0) {
        groupLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = aux + 16;
      }
      jumpLine++;
    }

    for (var i = 1; i <= normal; i++) {
      if (jumpLine % 10 === 0) {
        groupLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = aux + 16;
      }
      jumpLine++;
    }

    for (var i = 1; i <= sad; i++) {
      if (jumpLine % 10 === 0) {
        groupLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupLow
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = aux + 16;
      }
      jumpLine++;
    }

    var groupMedium = d3
      .select("." + nameClass)
      .append("svg")
      .attr("width", widthMax)
      .attr("height", heightMax)
      .attr("id", "mediumTwo")
      .attr("class", "graphTwo");

    groupMedium
      .append("text")
      .text("Medio")
      .attr("text-anchor", "middle")
      .attr("x", 80)
      .attr("y", 17)
      .attr("fill", "black");

    sad = Math.round(medium[0]);
    normal = Math.round(medium[1]);
    good = Math.round(medium[2]);

    if (sad + good + normal > 100) {
      sad--;
    }
    if (good + sad + normal === 99) {
      good++;
    }

    groupMedium
      .append("text") // Contenido con los porcentajes //
      .attr("x", 80)
      .attr("y", 30)
      .attr("text-anchor", "middle")
      .text("(" + good + " - " + normal + " - " + sad + ")")
      .style("font-size", "11px");

    jumpLine = 1;
    posY = 40;
    aux = posX;
    for (var i = 1; i <= good; i++) {
      if (i % 10 === 0) {
        groupMedium
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupMedium
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = aux + 16;
      }
      jumpLine++;
    }

    for (var i = 1; i <= normal; i++) {
      if (jumpLine % 10 === 0) {
        groupMedium
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupMedium
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = aux + 16;
      }
      jumpLine++;
    }

    for (var i = 1; i <= sad; i++) {
      if (jumpLine % 10 === 0) {
        groupMedium
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupMedium
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = aux + 16;
      }
      jumpLine++;
    }

    var groupHigh = d3
      .select("." + nameClass)
      .append("svg")
      .attr("width", widthMax)
      .attr("height", heightMax)
      .attr("id", "highTwo")
      .attr("class", "graphTwo");

    groupHigh
      .append("text")
      .text("Alto")
      .attr("text-anchor", "middle")
      .attr("x", 80)
      .attr("y", 17)
      .attr("fill", "black");

    sad = Math.round(high[0]);
    normal = Math.round(high[1]);
    good = Math.round(high[2]);

    if (sad + good + normal > 100) {
      sad--;
    }
    if (good + sad + normal === 99) {
      good++;
    }

    groupHigh
      .append("text") // Contenido con los porcentajes //
      .attr("x", 80)
      .attr("y", 30)
      .attr("text-anchor", "middle")
      .text("(" + good + " - " + normal + " - " + sad + ")")
      .style("font-size", "11px");

    jumpLine = 1;
    posY = 40;
    aux = posX;
    for (var i = 1; i <= good; i++) {
      if (i % 10 === 0) {
        groupHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = aux + 16;
      }
      jumpLine++;
    }

    for (var i = 1; i <= normal; i++) {
      if (jumpLine % 10 === 0) {
        groupHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = aux + 16;
      }
      jumpLine++;
    }

    for (var i = 1; i <= sad; i++) {
      if (jumpLine % 10 === 0) {
        groupHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = aux + 16;
      }
      jumpLine++;
    }

    var groupVeryHigh = d3
      .select("." + nameClass)
      .append("svg")
      .attr("width", widthMax)
      .attr("height", heightMax)
      .attr("id", "veryHighTwo")
      .attr("class", "graphTwo");

    groupVeryHigh
      .append("text")
      .text("Muy Alto")
      .attr("text-anchor", "middle")
      .attr("x", 80)
      .attr("y", 17)
      .attr("fill", "black");

    sad = Math.round(veryHigh[0]);
    normal = Math.round(veryHigh[1]);
    good = Math.round(veryHigh[2]);

    if (sad + good + normal > 100) {
      sad--;
    }
    if (good + sad + normal === 99) {
      good++;
    }

    groupVeryHigh
      .append("text") // Contenido con los porcentajes //
      .attr("x", 80)
      .attr("y", 30)
      .attr("text-anchor", "middle")
      .text("(" + good + " - " + normal + " - " + sad + ")")
      .style("font-size", "11px");

    jumpLine = 1;
    posY = 40;
    aux = posX;
    for (var i = 1; i <= good; i++) {
      if (i % 10 === 0) {
        groupVeryHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupVeryHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#a1d99b");
        aux = aux + 16;
      }
      jumpLine++;
    }

    for (var i = 1; i <= normal; i++) {
      if (jumpLine % 10 === 0) {
        groupVeryHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupVeryHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#fed976");
        aux = aux + 16;
      }
      jumpLine++;
    }

    for (var i = 1; i <= sad; i++) {
      if (jumpLine % 10 === 0) {
        groupVeryHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = posX;
        jumpLine = 0;
        posY = posY + 16;
      } else {
        groupVeryHigh
          .append("rect")
          .attr("x", aux)
          .attr("y", posY)
          .attr("width", width)
          .attr("height", height)
          .attr("rx", 2)
          .attr("ry", 2)
          .attr("fill", "#ffab91");
        aux = aux + 16;
      }
      jumpLine++;
    }

    var newContainerTwo = document.createElement("div"); // contenedor que contendra a cada gráfico //
    newContainerTwo.setAttribute("id", "symbology" + factor + component);
    newContainerTwo.setAttribute("class", "symbologyGraph");
    document.getElementById(containerSection).appendChild(newContainerTwo);
    newContainerTwo.innerHTML =
      " <br/><center> <svg width='14' height = '14' > <rect width='14' height='14' style='fill:#a1d99b'/> </svg> Aprobaron todas sus asignaturas. &nbsp;&nbsp;&nbsp; <svg width='14' height = '14' > <rect width='14' height='14' style='fill:#fed976'/></svg> Reprobaron una asignatura. &nbsp;&nbsp;&nbsp; <svg width='14' height = '14' > <rect width='14' height='14' style='fill:#ffab91'/></svg>   Reprobaron dos o más asignaturas.</center>";

    generateBtnSectionThree(
      containerMain,
      survey,
      factor,
      component,
      containerSectionThree
    );
  }

  function markPosition(category, height, widthx) {
    // Añade marcador de posicion en función de los puntajes obtenidos //
    category
      .append("text")
      .html("&#8679; Tu nivel")
      .attr("text-anchor", "middle")
      .attr("x", widthx / 2)
      .attr("y", height - 10)
      .attr("fill", "#800026");
  }

  return {
    startConstructionGraphicOne,
    generateGraphOneSurveyOne,
    generateGraphOneSurveyTwo,
    startConstructionGraphicTwo,
    generateGraphTwoSurveyOne,
    generateGraphTwoSurveyTwo,
    markPosition,
  };
};
