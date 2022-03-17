// Funcion para leer numeros Reales
function leerNumero() {
    num = parseInt(prompt("Porfi, escribe un número"));
    return num;
}

function mostrarResultados(nf) {
    document.getElementById('td21').innerHTML = nf;
    document.getElementById('td22').innerHTML = factorial(nf);
}

// Ejercicio factorial

function mostrarFactorial(nf) {
    document.getElementById('td21').innerHTML = nf;
    document.getElementById('td22').innerHTML = factorial(nf);
}

function factorial(nf) {
    var factorial = 1;
    for ( i=1; i <= nf; i++ ) {
        factorial = factorial * i;
    }

    return factorial;
}

// Ejercicio múltiplos

function multiplosDeHasta (n, m) {
    mensaje= "Los múltiplos de " + n + " hasta " + m + " son: ";
    multiplo=0;
    for(i=1; multiplo<m; i++) {
    multiplo= n*i;
    mensaje = mensaje + multiplo + " ";
    }

    return mensaje;      

}

function mostrarMultiplos(n, m) {
    document.getElementById("td11").innerHTML=n;
    document.getElementById("td12").innerHTML=m;
    document.getElementById("td13").innerHTML= multiplosDeHasta(n, m);
}

