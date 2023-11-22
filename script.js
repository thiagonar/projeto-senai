document.addEventListener("DOMContentLoaded", function() {
   
    if (!localStorage.getItem("usuario")) {
  
        var usuarioPadrao = {
            nome: "Nome do Usuário",
            email: "email@example.com"
        };

        // Armazenar o usuário padrão no localStorage
        localStorage.setItem("usuario", JSON.stringify(usuarioPadrao));
    }

   
    updateCadastroLink();
});

function updateCadastroLink() {
    var cadastroLink = document.getElementById("openModalBtn");

    if (cadastroLink) {
        var storedUser = localStorage.getItem("usuario");

        if (storedUser) {
            var usuario = JSON.parse(storedUser);
            cadastroLink.textContent = usuario.nome;
            cadastroLink.href = "#";
        }
    }
}
$(document).ready(function(){
    $('.story-carousel').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'
    });
});

document.addEventListener("DOMContentLoaded", function() {
    $('.milesmorales-carousel').slick({
        autoplay: false, 
        dots: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'
    });
});

var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");




function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}


function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}


document.getElementById("openModalBtn").onclick = openModal;


document.getElementById("closeModalBtn").onclick = closeModal;

window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const myobserver = new IntersectionObserver( (entries) => {
    entries.forEach ((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach ((element) => myobserver.observe (element))




