document.querySelector('#btnStart').addEventListener('click', startSession);

localStorage.clear();
function startSession(){
    var id = '';
    var access = false;
    id = document.querySelector('#txtId').value;
    access = validateUser(id);
    if(access == true){
        goToStudent(id);
    }else{
        window.alert("Acceso denegado, no existe el usuario")
    }
}

function goToStudent(id){
    saveLocalstorage (id); // Almaceno identificador de inicio en el localStorage para luego cargar datos //
    window.location.href = 'dashboard.html'
}

function getListUsers(){
    var listUsers = ["IDALU48","IDALU1602","IDALU1677","IDALU1552","IDALU1246","IDALU2205","IDALU1987","IDALU1373","IDALU1263","IDALU1888"]; // Lista de usuarios //
    return listUsers;
}

function validateUser(id){
    var listUsers = getListUsers();
    var access = false;
    for (var i = 0; i < listUsers.length; i++) {
        if(id === listUsers[i]){
            access = true;
        }
    }
    return access; 
}

function saveLocalstorage (id) {
    localStorage.setItem ("idStudent", id);
}


