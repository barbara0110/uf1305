// Funcion para leer numeros Reales

function leerNumero() {
    num = parseInt(prompt("Indica un número, por favor"));
    return num;
}

// Esta función es genérica para mostrar los resultados de todos los ejercicios
// Así no haría falta la función mostrarFactorial ni la mostrarMultiplos
// Serviriía esta función para ambos ejercicios


function mostrarResultados(op, n1, n2=0) {
    switch (op) {
        case "multiplo":
            document.getElementById("td11").innerHTML=n1;
            document.getElementById("td12").innerHTML=n2;
            document.getElementById("td13").innerHTML= multiplosDeHasta(n1, n2);
        break;

        case "factorial":
            document.getElementById('td21').innerHTML = n1;
            document.getElementById('td22').innerHTML = factorial(n1);
        break;
        default:
    }
    
}

// Ejercicio factorial

function factorial(nf) {
    var factorial = 1;
    for ( i=1; i <= nf; i++ ) {
        factorial = factorial * i;
    }

    return factorial;
}

function mostrarFactorial(nf) {
    document.getElementById('td21').innerHTML = nf;
    document.getElementById('td22').innerHTML = factorial(nf);
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

