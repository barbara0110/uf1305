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

// Con esta nueva función, cuando el ususario introduce los datos, en vez de escribir en el html solo "Pascasio"
// Escribirá "Personaje(en negrita): Pascasio"

function mostrarInfo(id, tag, info, texto) {
    var elemento= document.getElementById(id);
    var etiqueta = "<" + tag +">";
    etiqueta += info;
    etiqueta += "</" + tag + "> "
    etiqueta += texto;

    elemento.innerHTML = etiqueta;
    
}

// Creamos una función nueva para meter toda la info en un solo botón con un Id y que lo escriba en una lista y no en 3 botones

function mostrarTodo(id, personaje, aldea, clan, poder, vidas) {
    var personaje = "<strong>Personaje: </strong>" + personaje;
    var aldea = "<strong>Aldea: </strong>" + aldea;
    var clan = "<strong>Clan: </strong>" + clan;
    var poder = "<strong>Superpoder: </strong>" + poder;
    var vidas = "<strong>Vidas: </strong>" + vidas;

    var lis = "<li>" + personaje + "</li>";
    lis += "<li>" + aldea + "</li>";
    lis += "<li>" + clan + "</li>";
    lis += "<li>" + poder + "</li>";
    lis += "<li>" + vidas + "</li>";

    var elemento= document.getElementById(id);

    elemento.innerHTML = lis;

}

// Ahora vamos a trabajar con el método createElement()

function mostrarLista(id, personaje, aldea, clan, poder, vidas) {
    var personaje = "<strong>Personaje: </strong>" + personaje;
    var aldea = "<strong>Aldea: </strong>" + aldea;
    var clan = "<strong>Clan: </strong>" + clan;
    var poder = "<strong>Superpoder: </strong>" + poder;
    var vidas = "<strong>Vidas: </strong>" + vidas;

    //Creamos una instancia de la ul con id="datos"
    var lista= document.getElementById(id);
    // Creamos una instancia de un elemento HTML vacio
    var item = document.createElement("li");
    // Agregamos contenido a ese elemento HTML li
    item.innerHTML = personaje;
    // Insertamos el elemento li y su contenido como último hijo de la ul id="datos"
    lista.appendChild(item);

    item = document.createElement("li");
    item.innerHTML = aldea;
    lista.appendChild(item);

    item = document.createElement("li")
    item.innerHTML = clan;
    lista.appendChild(item);

    item = document.createElement("li")
    item.innerHTML = poder;
    lista.appendChild(item);

    item = document.createElement("li")
    item.innerHTML = vidas;
    lista.appendChild(item);

}