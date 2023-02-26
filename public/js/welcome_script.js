let add_desc = document.getElementById('add_desc');
let desc = document.getElementById('desc');
let text_desc = document.getElementById('bio');
let email_value = document.getElementById('email_value');
let email_form = document.getElementById('email_form'); 
let niv_update = document.getElementById('niv_update');
const profil_navbar = document.getElementById('profil_navbar')
const mess_navbar = document.getElementById('mess_navbar')
let none_3_mess = document.getElementById('none_3_mess')
let none_2_profil= document.getElementById('none_2_profil')
let none_1_profil = document.getElementById('none_1_profil')
let div_profile = document.getElementById('div_show_mze_profile_pic')
// -------------------------------------------------

let email_tabs = document.getElementById('email_tabs');
let niveau_tabs = document.getElementById('niveau_tabs');
let pass_tabs = document.getElementById('pass_tabs');
let mail_div = document.getElementById('mail_div');
let niveau_div = document.getElementById('niveau_div');
let pass_div = document.getElementById('password');
let username = document.getElementById('username').textContent;
let profil = document.getElementById('user_profiles').textContent;

text_desc.addEventListener('click',_=>{
    add_desc.style.display = "block"
})
mess_navbar.addEventListener('click',(e)=>{
    e.preventDefault()
    none_1_profil.classList.add('d-none')
    none_2_profil.classList.add('d-none')
    none_3_mess.classList.remove('d-none')
})
profil_navbar.addEventListener('click',(e)=>{
    e.preventDefault()
    none_1_profil.classList.remove('d-none')
    none_2_profil.classList.remove('d-none')
    none_3_mess.classList.remove('d-none')
    none_3_mess.classList.add('d-none')
})
function change_desc(){
    if(text_desc.value === ""){
        let result = "";
        if (profil === '[ etudiant ]') {
            fetch(`http://localhost:3000/api/welcome/get_biographie_etud/${username}`)
                .then(response => response.json())
                .then(data => result = data.biographie)
                .then(result => desc.innerText = "😊 "+result)
        }
        else{
            fetch(`http://localhost:3000/api/welcome/get_biographie_prof/${username}`)
            .then(response => response.json())
            .then(data => result = data.biographie)
            .then(result => desc.innerText = "😊 "+result) 
        }
    }
    else{
        
        if (profil === '[ etudiant ]') {
            fetch(`http://localhost:3000/api/welcome/biographie_etud/${text_desc.value}/${username}`)
                .then(response => response.json())
                .then(data => result = JSON.stringify(data))
                .then(desc.innerText = "😊 "+text_desc.value)
        }
        else{
            fetch(`http://localhost:3000/api/welcome/biographie_prof/${text_desc.value}/${username}`)
                .then(response => response.json())
                .then(data => result = JSON.stringify(data))
                .then(desc.innerText = "😊 "+text_desc.value)
        }
    }
    text_desc.innerText = "";
    add_desc.style.display = "none";
}

function email_tabs_action(){
    email_tabs.classList.add('active');
    niveau_tabs.classList.remove('active');
    pass_tabs.classList.remove('active');
    mail_div.classList.add('show');
    niveau_div.classList.remove('show');
    niveau_div.classList.add('hide');
    pass_div.classList.remove('show');
    pass_div.classList.add('hide');
}
function niveau_tabs_action(){
    mail_div.classList.remove('show');
    mail_div.classList.add('hide');
    email_tabs.classList.remove('active');
    niveau_tabs.classList.add('active');
    pass_tabs.classList.remove('active');
    niveau_div.classList.remove('hide'); 
    niveau_div.classList.add('show');
    pass_div.classList.remove('show'); 
    pass_div.classList.add('hide');
}
function pass_tabs_action(){
    mail_div.classList.remove('show');
    mail_div.classList.add('hide');
    email_tabs.classList.remove('active');
    pass_tabs.classList.add('active');
    niveau_tabs.classList.remove('active');
    niveau_div.classList.remove('show'); 
    niveau_div.classList.add('hide');
    pass_div.classList.remove('hide'); 
    pass_div.classList.add('show');
}
function change_email() {
    if (profil === '[ etudiant ]') {
        fetch(`http://localhost:3000/api/set_email_etud/${username}/${email_form.value}`)
            .then(response => response.json())
            .then(email_value.innerText = email_form.value)
            email_form.classList.add('disabled')
            document.getElementById('btn_mail_update').style.display = "none";

    }
    else{
        fetch(`http://localhost:3000/api/set_email_prof/${username}/${email_form.value}`)
            .then(response => response.json())
            .then(email_value.innerText = email_form.value)
            email_form.innerText = ""
            document.getElementById('btn_mail_update').style.display = "none";
    }
}

function change_niveau() {
    let niveau = document.getElementById('niveau').value
    fetch(`http://localhost:3000/api/set_niveau_etud/${username}/${niveau}`)
            .then(response => response.json())
            .then(niv_update.innerText = niveau)
            email_form.innerText = ""
            document.getElementById('btn_niv_update').style.display = "none";
}