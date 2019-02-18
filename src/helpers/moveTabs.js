function openMe(inside, btn) {
  //btn: id del button presionado
  let loginId = localStorage.getItem("idStudent"); // id del usuario
  //track(loginId,btn,"");

  var content = document.getElementsByClassName("containerViewMain");
  var mainBtn = document.getElementsByClassName("buttonMain");
  for (var i = 0; i < content.length; i++) {
    content[i].style.display = "none";
    mainBtn[i].style.borderBottom = "2px solid #ccc";
  }
  document.getElementById(inside).style.display = "block";
  document.getElementById(btn).style.borderBottom = "none";
}

function openMeAuto(inside, btn) {
  // Cambio de pestaña Dimensiones Autoconcepto //
  let loginId = localStorage.getItem("idStudent"); // id del usuario
  //track(loginId,btn,"");
  var content = document.getElementsByClassName("containerDimensionSurveyOne");
  var selconceptBtn = document.getElementsByClassName("buttonSurveyOne");
  for (var i = 0; i < content.length; i++) {
    content[i].style.display = "none";
    selconceptBtn[i].style.borderBottom = "1px solid #ccc";
  }
  document.getElementById(inside).style.display = "block";
  document.getElementById(btn).style.borderBottom = "none";
}

function openMeLS(inside, btn) {
  //Cambio de pestañas dimensiones de Estrategias de aprendizaje //
  let loginId = localStorage.getItem("idStudent"); // id del usuario
  //track(loginId,btn,"");
  var content = document.getElementsByClassName("containerDimensionSurveyTwo");
  var selconceptBtn = document.getElementsByClassName("buttonSurveyTwo");

  for (var i = 0; i < content.length; i++) {
    content[i].style.display = "none";
    selconceptBtn[i].style.borderBottom = "1px solid #ccc";
  }
  document.getElementById(inside).style.display = "block";
  document.getElementById(btn).style.borderBottom = "none";
}

function openMeComponent(inside, btn) {
  //Cambio de pestañas dimensiones de Estrategias de aprendizaje //
  let loginId = localStorage.getItem("idStudent"); // id del usuario
  //track(loginId,btn,"");
  var content = document.getElementsByClassName(
    "containerDimensionSurveyTwoComponent"
  );
  var selconceptBtn = document.getElementsByClassName(
    "buttonSurveyTwoComponent"
  );

  for (var i = 0; i < content.length; i++) {
    content[i].style.display = "none";
    selconceptBtn[i].style.borderBottom = "1px solid #ccc";
  }
  document.getElementById(inside).style.display = "block";
  document.getElementById(btn).style.borderBottom = "none";
}
