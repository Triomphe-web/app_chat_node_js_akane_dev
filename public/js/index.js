const checkBoxValue = document.getElementById("check");
var userinput = document.getElementById("inputMail");
const formValue = document.getElementById("pass");
var userName = document.getElementById("nom_for_add_user");
var radio_etud = document.getElementById('radio_etud');
var radio_etud = document.getElementById('radio_prof');
var select = document.getElementById("niveau")

function show_select(){
    select.style.display="block";
}
function hide_select(){
    select.style.display="none";
}
function changeValue(){
    if(formValue.type === "password"){
        formValue.type = "text";
    } else {
        formValue.type = "password";
      }
}

function checkName(){
    var regexforName = /[,|;|=|:|!|$|&|"|'|?]/g;

    if(userName.value.match(regexforName)){
        document.getElementById("error").innerHTML = "Caractère invalide pour un nom !";
        document.getElementById("error").classList.add("text-danger");
        document.getElementById("error").classList.add("text-sm");
        document.getElementById("key_button").setAttribute("disabled", "");
    }
    else{
        document.getElementById("error").innerHTML = "";
        document.getElementById("key_button").removeAttribute("disabled", "");
    }
}
function checkEmail(){
    var regexNonAutorized = /[,|;|=|:|!|$|&|"|'|?]/g;


    if(userinput.value.match(regexNonAutorized)){
        document.getElementById("err").innerHTML = "L'adresse mail ne doit pas contenir ses caractères !";
        document.getElementById("err").classList.add("text-danger");
        document.getElementById("err").classList.add("text-sm");
        document.getElementById("key_button").setAttribute("disabled", "");
    }
    else{
        document.getElementById("err").innerHTML = "";
        document.getElementById("key_button").removeAttribute("disabled", "");
    }
}

