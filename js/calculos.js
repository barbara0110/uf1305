// Funcion para leer numeros Reales

function leerNumero() {
    num = parseInt(prompt("Indica un número, por favor"));
    return num;
}

// Funcion para leer texto

function leerTexto() {
    var texto = prompt("Escribe aquí, por favor");
    return texto;

}



// Esta función es genérica para mostrar los resultados de todos los ejercicios
// Así no haría falta la función mostrarFactorial ni la mostrarMultiplos
// Serviriía esta función para ambos ejercicios cambiando los datos que se pasan por parámetro en el onClick


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
        // Esta ahora no la estamos usando, usamos mostrarResultados
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

    
        // Hacer lo mismo que la función anterior pero con un WHILE en vez de que un FOR

        function multiplosDeHasta(n, m) {
            mensaje= "Los múltiplos de " + n + " hasta " + m + " son: ";
            multiplo=0;
            i=1
            while (multiplo<m) {
                multiplo=n*i;
                mensaje = mensaje + multiplo + " ";
                i++;
            
            }
            return mensaje;   

        }
            
// Función para sumar dos números

function sumar(s1, s2) {
    var suma= s1+s2;
    return suma;

}

// Función multiplicar dos números

function multiplicar(f1,f2) {
    var producto= f1*f2;
    return producto;
}

   
        // Esta ahora no la estamos usando, usamos mostrarResultados
function mostrarMultiplos(n, m) {
    document.getElementById("td11").innerHTML=n;
    document.getElementById("td12").innerHTML=m;
    document.getElementById("td13").innerHTML= multiplosDeHasta(n, m);
}


// Función para insertar texto en el html

function mostrarTexto(id, texto) {
    var elemento= document.getElementById(id);
    // Insertamos en texto pasado por parámetro al elemento con ID pasado por parámetro
    elemento.innerHTML = texto;


}

// Ahora usamos está función en vez de la anterior

function mostrarInfo(id, tag, info, texto) {
    var elemento= document.getElementById(id);
    var etiqueta = "<" + tag +">";
    etiqueta += info;
    etiqueta += "</" + tag + "> "
    etiqueta += texto;

    elemento.innerHTML = etiqueta;
    
}