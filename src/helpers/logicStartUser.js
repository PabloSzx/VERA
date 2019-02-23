const axios = require("axios");
const _ = require("lodash");
document.querySelector("#btnStart").addEventListener("click", startSession);

localStorage.clear();

function saveLocalstorage(id) {
  localStorage.setItem("idStudent", id);
}

function goToStudent(id) {
  saveLocalstorage(id); // Almaceno identificador de inicio en el localStorage para luego cargar datos //
  window.location.href = "dashboard.html";
}

async function startSession() {
  try {
    const id = document.querySelector("#txtId").value;
    const request = await axios.post("/vera/validateUser", { id });

    const access = _.get(request, "data.access", false);
    console.log("access", access);
    if (access == true) {
      goToStudent(id);
    } else {
      window.alert("Acceso denegado, no existe el usuario");
    }
  } catch (err) {
    window.alert("Acceso denegado, no existe el usuario");
    console.error(err);
  }
}
