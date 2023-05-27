const btn = document.querySelector("#send");


btn.addEventListener("click", function (e) {

    e.preventDefault();

    const name = document.querySelector("#name");

    const valor = Number(name.value);

    const converte = valor / 3.6 ;

    //const converte1 = valor  * 3.6;

    document.getElementById("valor").innerHTML= (converte.toFixed(2) + " m/s ");
    //document.getElementById("valo").innerHTML= (converte1.toFixed(2) + " km/h ");

    console.log(converte);
    //console.log(converte1);
    console.log((typeof(converte)))
})
