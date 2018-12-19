"use strict";
var numberView = 0;
function getIntroductionText (view) { // genero contenido de introduccíon para cada una de las vistas //
    var surveyhttp = new XMLHttpRequest();
    surveyhttp.onreadystatechange = function () {
        if (this.readyState == 4 &&  this.status == 200) {
            var response = JSON.parse(surveyhttp.responseText);
            switch (view) {
                case "home":
                    var getText = response.home.introduction; // obtengo texto introductorio desde el archivo JSON //
                    break;    
                case "surveyOne":
                    var getText = response.surveys[0].introduction;
                    break; 
                case "surveyTwo":
                    var getText = response.surveys[1].introduction;
                    break;
            }
            var container = document.createElement("p");
            var id = "introduction"+view;
            container.setAttribute("id", id);
            container.setAttribute("class","textIntroduction");
            container.innerHTML = getText;
            document.getElementById(view).appendChild(container);
                
            if (view === "surveyOne") {
                createButtonFactors (0, view); // Para la vista AUTOCONCEPTO, genero los botones de sus dimensiones, paso como parametro la posicion de sus datos en el archivo JSON y el contenedor en el cual se agregara //
            }
            if (view === "surveyTwo") {
                createButtonFactors (1, view);
            }
        }
    }
    surveyhttp.open("GET", "data/surveyText.json",true);
    surveyhttp.send();
} 

function reference (container) {
    var referenceContainer = document.createElement("div"); //Se crea el contenedor con las referencias de los textos que se emplearan en el dashboard //
    referenceContainer.setAttribute("id", "divReference");
    referenceContainer.setAttribute("class", "containerReference");
    document.getElementById(container).appendChild(referenceContainer);
    //referenceContainer.innerHTML = "<br/><left>REFERENCIAS <br/><br/>";
    var surveyhttp = new XMLHttpRequest();
    surveyhttp.onreadystatechange = function () {
        if (this.readyState == 4 &&  this.status == 200) {
            var response = JSON.parse(surveyhttp.responseText);
            var countReferences = Object.keys(response.references).length; // Obtengo la cantidad de referencias en el JSON //
            for (var i = 0; i < countReferences; i++) { //Para cada referencia, creo una etiqueta `p` para agregarla //
                var getText = response.references[i].reference;
                var container = document.createElement("p");
                container.setAttribute("class","referenceText");
                container.innerHTML = getText+"<br/><br/>"; //"<center>" + getText + "</center><br/>";
                document.getElementById("divReference").appendChild(container);
            }   
        }
    }
    surveyhttp.open ("GET", "data/surveyText.json",true);
    surveyhttp.send ();
}

function createTextIntroSectionOne (container, survey, factor, component) {    //Corresponde a la introdución a el primer grafico //
    var surveyhttp = new XMLHttpRequest();
    surveyhttp.onreadystatechange = function () {
        if (this.readyState == 4 &&  this.status == 200) {
            var response = JSON.parse(surveyhttp.responseText);
            var cont = document.createElement("p");
            var id = "introductionSectionOne"+container;
            cont.setAttribute("id", id);
            cont.setAttribute("class","textIntroductionSectionOne");
            if ( survey === "SurveyOne" || factor === "Methodical") {

                for ( var i = 0 ; i < Object.keys(response.surveys).length ; i++ ) {
                    if (response.surveys[i].id === survey) {
                        for ( var j = 0 ; j < Object.keys(response.surveys[i].factors).length ; j++ ) {
                            if (response.surveys[i].factors[j].id === factor) {
                                cont.innerHTML = response.surveys[i].factors[j].textGraphic1;
                                document.getElementById(container).appendChild(cont);
                            }
                        }
                    }
                }
                
            } else {
                for ( var i = 0 ; i < Object.keys(response.surveys).length ; i++ ) {
                    if (response.surveys[i].id === survey) {
                        for ( var j = 0 ; j < Object.keys(response.surveys[i].factors).length ; j++ ) {
                            if (response.surveys[i].factors[j].id === factor) {
                                for ( var k = 0 ; k < Object.keys(response.surveys[i].factors[j].components).length ; k++ ) {
                                    if (response.surveys[i].factors[j].components[k].id === component) {
                                        cont.innerHTML = response.surveys[i].factors[j].components[k].textGraphic1;
                                        document.getElementById(container).appendChild(cont);
                                    }
                                }
                            }
                        }
                    }
                }
                                        
            }
        }   
    }
    surveyhttp.open ("GET", "data/surveyText.json",true);
    surveyhttp.send ();
}

function createTextIntroSectionTwo (container, survey, factor, component) {    //Corresponde a la introdución a el primer grafico //
    var surveyhttp = new XMLHttpRequest();
    surveyhttp.onreadystatechange = function () {
        if (this.readyState == 4 &&  this.status == 200) {
            var response = JSON.parse(surveyhttp.responseText);
            var cont = document.createElement("p");
            var id = "introductionSectionOne"+container;
            cont.setAttribute("id", id);
            cont.setAttribute("class","textIntroductionSectionOne");
            if ( survey === "SurveyOne" || factor === "Methodical") {
                for ( var i = 0 ; i < Object.keys(response.surveys).length ; i++ ) {   
                    if ( response.surveys[i].id === survey) { 
                        for ( var j = 0 ; j < Object.keys(response.surveys[i].factors).length ; j++ ) {
                            if (response.surveys[i].factors[j].id === factor) {
                                cont.innerHTML = response.surveys[i].factors[j].textGraphic2;
                                document.getElementById(container).appendChild(cont);
                            }
                        }
                    }
                }
            } else {
                for ( var i = 0 ; i < Object.keys(response.surveys).length ; i++ ) {
                    if (response.surveys[i].id === survey) {
                        for ( var j = 0 ; j < Object.keys(response.surveys[i].factors).length ; j++ ) {
                            if (response.surveys[i].factors[j].id === factor) {
                                for ( var k = 0 ; k < Object.keys(response.surveys[i].factors[j].components).length ; k++ ) {
                                    if (response.surveys[i].factors[j].components[k].id === component) {
                                        cont.innerHTML = response.surveys[i].factors[j].components[k].textGraphic2;
                                        document.getElementById(container).appendChild(cont);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }   
    }
    surveyhttp.open ("GET", "data/surveyText.json",true);
    surveyhttp.send ();
}