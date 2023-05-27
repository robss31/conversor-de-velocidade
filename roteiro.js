const btn = document.querySelector("#send");

btn.addEventListener("click", function (e) {

    e.preventDefault();

    const name = document.querySelector("#name");

    const valor = Number(name.value);

    const converte = valor / 3.6 ;

    document.getElementById("recebe").innerHTML= (converte.toFixed(2) + " m/s ");

})

const btn2 = document.querySelector("#send");

btn2.addEventListener("click", function (e) {

    e.preventDefau

    const name = document.querySelector("#name")

    const valor = Number(name.value);

    const converte1 = valor  * 3.6;

    document.getElementById("recebe1").innerHTML= (converte1.toFixed(2) + " km/h ");

})

function principal(){
    window.location.replace("http://127.0.0.1:5500/index.html")
}


function  km() {
    window.location.replace("http://127.0.0.1:5500/km.html")
}

function m() {
    window.location.replace("http://127.0.0.1:5500/ms.html")
}

function limpar(){
    document.getElementById("name").value = "";
    document.getElementById("recebe").innerHTML = "";
}

function limpar1(){
    document.getElementById("name").value = "";
    document.getElementById("recebe1").innerHTML = "";
}