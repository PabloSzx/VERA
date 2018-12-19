"use strict";
window.onload = startDashboard (mainContainer) ; //funcion que inica el esquema base de la pagina web, entrego como parametro la función que permite visualizar el contenido de INICIO//
function startDashboard (mainContainer) {
   
    var newContainer = document.createElement("div"); //contenedor de los btn principales del dashboard //
    newContainer.setAttribute("id","btnContainer")
    newContainer.setAttribute("class", "containerBtnMain");
    document.getElementById("dashboard").appendChild(newContainer);

    var xhttp = new XMLHttpRequest ();
        xhttp.onreadystatechange = function () {
        if (this.readyState == 4 &&  this.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            
            var newButton = document.createElement("button"); //genero btn del menu de inicio //
            newButton.setAttribute("id", "buttonHome");
            newButton.setAttribute("class", "buttonMain");
            newButton.setAttribute("onclick","home()");
            newButton.innerHTML = "INICIO";
            document.getElementById("btnContainer").appendChild(newButton);

            for (var i = 0; i < Object.keys(response.surveys).length; i++) {
                var newButton = document.createElement("button");
                var id = "button"+response.surveys[i].id; 
                var onclick = "open"+response.surveys[i].id+"()"; 
                newButton.setAttribute("id", id);
                newButton.setAttribute("class", "buttonMain");
                newButton.setAttribute("onclick",onclick);
                newButton.innerHTML = response.surveys[i].label;
                document.getElementById("btnContainer").appendChild(newButton);
            }  
            mainContainer (showHome); //corre la función mainContainer y paso como parametro la función showHome     
        }    
    }
    xhttp.open("GET", "data/surveyText.json", true);
    xhttp.send();   
}

function mainContainer (showHome) {
    // genero los contenedores principales, para que despues pueda agregar todo el contenido necesario //
    var containerHome = document.createElement("div");
    containerHome.setAttribute("id", "home");
    containerHome.setAttribute("class", "containerViewMain");
    document.getElementById("dashboard").appendChild(containerHome);

    var containerSurveyOne = document.createElement("div");
    containerSurveyOne.setAttribute("id", "surveyOne");
    containerSurveyOne.setAttribute("class", "containerViewMain");
    document.getElementById("dashboard").appendChild(containerSurveyOne);

    var containerSurveyTwo = document.createElement("div");
    containerSurveyTwo.setAttribute("id", "surveyTwo");
    containerSurveyTwo.setAttribute("class", "containerViewMain");
    document.getElementById("dashboard").appendChild(containerSurveyTwo);

    showHome (loadItems); //inicia la función showHome //
}

function showHome (loadItems) {
    // Permite que al iniciar la página esta cargue el contenido de la pestaña de inicio //
    openMe("home","buttonHome"); //home: nombre del contenedor, buttonHome: nombre del boton para modificar aspecto //
    loadItems ();
}
function loadItems () {
    getIntroductionText("home"); //Obtengo el texto de introduccion y lo agrega al contenedor home //
    reference ("dashboard"); //con esta función se imprimen toda las referencias en el contenedor dashboard //
}

