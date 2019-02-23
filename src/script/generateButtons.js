"use strict";
const axios = require("axios");

module.exports = ({
  startConstructionGraphicOne,
  startConstructionGraphicTwo,
}) => {
  async function createButtonFactors(survey, view) {
    // Genera btn correspondientes a las dimensiones de cada encuesta //
    const surveys = await axios.post("/vera/surveys");
    const response = surveys.data;

    var countFactors = Object.keys(response.surveys[survey].factors).length; // Entrega la cantidad de factores que posee la encuesta //
    var nameSurvey = response.surveys[survey].id; // Nombre de la encuesta para la cual debo generar los btns (Selfconcept or LearningStrategy)//

    var containerButtons = document.createElement("div"); // Genero el contenedor de btnes para las dimensiones del autoconcepto dada la cantidad de factores //
    var idContainerButton = "containerBtn" + nameSurvey; // containerBtnSelfconcept //
    containerButtons.setAttribute("id", idContainerButton);
    var classContBtn = "containerButton" + nameSurvey; //containerButtonSelfconcept //
    containerButtons.setAttribute("class", classContBtn);
    document.getElementById(view).appendChild(containerButtons);

    for (var i = 0; i < countFactors; i++) {
      // Creo btn segun la cantidad de dimensiones de cada encuesta //
      var btn = document.createElement("button");
      btn.innerHTML = response.surveys[survey].factors[i].label; // Obtengo label de cada factor de las encuestas //
      var onclickName = "view" + response.surveys[survey].factors[i].id + "()"; //viewEmotional --> funcion onclick //
      btn.setAttribute("onclick", onclickName);
      var classBtn = "button" + nameSurvey; //buttonSelfconcept //
      btn.setAttribute("class", classBtn);
      var idButton = "button" + response.surveys[survey].factors[i].id; //ButtonEmotional
      btn.setAttribute("id", idButton);
      document.getElementById(idContainerButton).appendChild(btn); //agregro cada btn generado al contenedor recientemente generado //

      var cont = document.createElement("div"); // Contenedor que contendra los elementos de cada factor de cada una de las encuestas, Se generara cuando presione un el btn correspondiente a la dimension //
      var idContainer =
        "view" + nameSurvey + response.surveys[survey].factors[i].id; //viewSelfconceptEmotional
      cont.setAttribute("id", idContainer);
      var classView = "containerDimension" + nameSurvey; // containerDimensionSelfconcept //
      cont.setAttribute("class", classView);
      document.getElementById(view).appendChild(cont);
    }
  }

  async function createButtonFactorsComponent(survey, factor, container) {
    // Genera btn correspondientes a las dimensiones de cada encuesta //
    const surveys = await axios.post("/vera/surveys");
    const response = surveys.data;

    for (var i = 0; i < Object.keys(response.surveys).length; i++) {
      if (response.surveys[i].id === survey) {
        for (
          var j = 0;
          j < Object.keys(response.surveys[i].factors).length;
          j++
        ) {
          if (response.surveys[i].factors[j].id === factor) {
            var countFactors = Object.keys(
              response.surveys[i].factors[j].components
            ).length; // Entrega la cantidad de factores que posee la encuesta //
            var nameSurvey = response.surveys[i].id + "Component"; // Nombre de la encuesta para la cual debo generar los btns (LearningStrategy)//

            var containerButtons = document.createElement("div"); // Genero el contenedor de btnes para las dimensiones  dada la cantidad de factores //
            var idContainerButton = "containerBtn" + nameSurvey; // containerBtnLearningStrategy//
            containerButtons.setAttribute("id", idContainerButton);
            var classContBtn = "containerButton" + nameSurvey; //containerButtonLearningStrategy //
            containerButtons.setAttribute("class", classContBtn);
            document.getElementById(container).appendChild(containerButtons);

            for (var k = 0; k < countFactors; k++) {
              // Creo btn segun la cantidad de dimensiones de cada encuesta //
              var btn = document.createElement("button");
              btn.innerHTML =
                response.surveys[i].factors[j].components[k].label; // Obtengo label de cada factor de las encuestas //
              var onclickName =
                "view" + response.surveys[i].factors[j].components[k].id + "()"; //viewEmotional --> funcion onclick //
              btn.setAttribute("onclick", onclickName);
              var classBtn = "button" + nameSurvey; //buttonSelfconcept //
              btn.setAttribute("class", classBtn);
              var idButton =
                "button" + response.surveys[i].factors[j].components[k].id; //ButtonEmotional
              btn.setAttribute("id", idButton);
              document.getElementById(idContainerButton).appendChild(btn); //agregro cada btn generado al contenedor recientemente generado //

              var cont = document.createElement("div"); // Contenedor que contendra los elementos de cada factor de cada una de las encuestas, Se generara cuando presione un el btn correspondiente a la dimension //
              var idContainer =
                "view" +
                nameSurvey +
                response.surveys[i].factors[j].components[k].id; // viewLearningStrategyMethodical //
              cont.setAttribute("id", idContainer);
              var classView = "containerDimension" + nameSurvey;
              cont.setAttribute("class", classView);
              document.getElementById(container).appendChild(cont);
            }
          }
        }
      }
    }
  }

  async function generateBtnSectionOne(
    container,
    survey,
    factor,
    component,
    containerSectionOne
  ) {
    // Genera boton para visualizar el primer grafico simulando acordeon //
    const surveys = await axios.post("/vera/surveys");
    const response = surveys.data;
    var newButton = document.createElement("button");
    if (survey === "SurveyOne") {
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              newButton.innerHTML =
                "Tu " +
                response.surveys[i].label +
                " " +
                response.surveys[i].factors[j].label; // Nombre del boton: TU AUTOCONCEPTO EMOCIONAL //
              newButton.setAttribute("class", "btnSectionOne close");
              var onclickName =
                "sectionOne" + response.surveys[i].factors[j].id + "()"; // showMoreEmotional() //
              newButton.setAttribute("onclick", onclickName);
              var buttonId =
                "btnSectionOne" + response.surveys[i].factors[j].id; // linkShowMoreEmotional //
              newButton.setAttribute("id", buttonId);
              document.getElementById(container).appendChild(newButton);
            }
          }
        }
      }
      containerSectionOne(
        container,
        survey,
        factor,
        component,
        startConstructionGraphicOne
      ); // EJecuto containerSectionOne y paso como parametro la función graphicOne //
    } else {
      // Para la encuesta de estrategias de aprendizaje, son diferentes las estructura de nombre //
      if (factor === "Methodical") {
        for (var i = 0; i < Object.keys(response.surveys).length; i++) {
          if (response.surveys[i].id === survey) {
            for (
              var j = 0;
              j < Object.keys(response.surveys[i].factors).length;
              j++
            ) {
              if (response.surveys[i].factors[j].id === factor) {
                newButton.innerHTML =
                  "Tu " + response.surveys[i].factors[j].label;
                newButton.setAttribute("class", "btnSectionOne close");
                var onclickName =
                  "sectionOne" + response.surveys[i].factors[j].id + "()"; // showMoreEmotional() //
                newButton.setAttribute("onclick", onclickName);
                var buttonId =
                  "btnSectionOne" + response.surveys[i].factors[j].id; // linkShowMoreEmotional //
                newButton.setAttribute("id", buttonId);
                document.getElementById(container).appendChild(newButton);
              }
            }
          }
        }
        containerSectionOne(
          container,
          survey,
          factor,
          component,
          startConstructionGraphicOne
        );
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
                        newButton.innerHTML =
                          "Tu nivel de procesamiento " +
                          response.surveys[i].factors[j].components[k].label;
                        newButton.setAttribute("class", "btnSectionOne close");
                        var onclickName =
                          "sectionOne" +
                          response.surveys[i].factors[j].components[k].id +
                          "()";
                        newButton.setAttribute("onclick", onclickName);
                        var buttonId =
                          "btnSectionOne" +
                          response.surveys[i].factors[j].components[k].id;
                        newButton.setAttribute("id", buttonId);
                        document
                          .getElementById(container)
                          .appendChild(newButton);
                      }
                    }
                  }
                }
              }
            }
          }
        }
        containerSectionOne(
          container,
          survey,
          factor,
          component,
          startConstructionGraphicOne
        );
      }
    }
  }

  async function generateBtnSectionTwo(
    containerMain,
    survey,
    factor,
    component,
    containerSectionTwo
  ) {
    // Genera el btn que permitira ver o esconcer el contenido del grafico 2 //
    const surveys = await axios.post("/vera/surveys");
    const response = surveys.data;
    if (survey === "SurveyOne" || factor === "Methodical") {
      var newButton = document.createElement("button");
      newButton.innerHTML = "Promociones anteriores";
      newButton.setAttribute("class", "btnSectionTwo close");
      for (var i = 0; i < Object.keys(response.surveys).length; i++) {
        if (response.surveys[i].id === survey) {
          for (
            var j = 0;
            j < Object.keys(response.surveys[i].factors).length;
            j++
          ) {
            if (response.surveys[i].factors[j].id === factor) {
              var onclickName =
                "sectionTwo" + response.surveys[i].factors[j].id + "()";
              newButton.setAttribute("onclick", onclickName);
              var buttonId =
                "btnSectionTwo" + response.surveys[i].factors[j].id;
              newButton.setAttribute("id", buttonId);
              document.getElementById(containerMain).appendChild(newButton);

              containerSectionTwo(
                containerMain,
                survey,
                factor,
                component,
                startConstructionGraphicTwo
              );
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
                  newButton.innerHTML = "Promociones anteriores";
                  newButton.setAttribute("class", "btnSectionTwo close");
                  var onclickName =
                    "sectionTwo" +
                    response.surveys[i].factors[j].components[k].id +
                    "()";
                  newButton.setAttribute("onclick", onclickName);
                  var buttonId =
                    "btnSectionTwo" +
                    response.surveys[i].factors[j].components[k].id; //linkShowMoreEmotional //
                  newButton.setAttribute("id", buttonId);
                  document.getElementById(containerMain).appendChild(newButton);
                }
              }
            }
          }
        }
      }
      containerSectionTwo(
        containerMain,
        survey,
        factor,
        component,
        startConstructionGraphicTwo
      );
    }
  }

  async function generateBtnSectionThree(
    containerMain,
    survey,
    factor,
    component,
    containerSectionThree
  ) {
    // Genera boton para visualizar el primer grafico simulando acordeon //
    const surveys = await axios.post("/vera/surveys");
    const response = surveys.data;
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

  return {
    createButtonFactors,
    createButtonFactors,
    createButtonFactorsComponent,
    generateBtnSectionThree,
    generateBtnSectionOne,
    generateBtnSectionTwo,
  };
};
