const btn = document.querySelector("#send");

btn.addEventListener("click", function (e) {

    e.preventDefault();

    const name = document.querySelector("#name");

    const valor = Number(name.value);

    const converte = valor / 3.6 ;

    document.getElementById("recebe").innerHTML= ("Resultado: "+ converte.toFixed(2) + " m/s ");

})

const btn2 = document.querySelector("#send");

btn2.addEventListener("click", function (e) {

    e.preventDefau

    const name = document.querySelector("#name")

    const valor = Number(name.value);

    const converte1 = valor  * 3.6;

    document.getElementById("recebe1").innerHTML= ("Resultado: " + converte1.toFixed(2) + " km/h ");

})

function principal(){
    window.location.replace("http://127.0.0.1:5500/index.html")
     window.location.replace(" https://robss31.github.io/conversor-de-velocidade/index.html")
}


function  km() {
    window.location.replace("http://127.0.0.1:5500/km.html")
    window.location.replace(" https://robss31.github.io/conversor-de-velocidade/km.html")
}

function m() {
    window.location.replace("http://127.0.0.1:5500/ms.html")
    window.location.replace(" https://robss31.github.io/conversor-de-velocidade/ms.html")
}

function limpar(){
    document.getElementById("name").value = "";
    document.getElementById("recebe").innerHTML = "";
}

function limpar1(){
    document.getElementById("name").value = "";
    document.getElementById("recebe1").innerHTML = "";
}
