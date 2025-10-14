    //Asignamos el botón gracias a su ID a una variable para luego usarlo en JS
    const boton = document.querySelector('#boton-importante');
    /*Sería lo mismo que:
    const boton = document.getElementById('boton-importante');*/
    /* Añadimos un listener para que cuando se haga click en el botón se ejecute la función
    Una función se puede definir de varias maneras:
    function sumar(a, b) { return a + b; } (la clásica)
    const sumarArrow = (a, b) => { return a + b; }; (la de flecha o Arrow function)
    const sumarArrow2 = (a, b) => a + b; (la de flecha simplificada con return implícito)
        */
    boton.addEventListener('click', () => {
            console.log ("Esto que"); //Muestra una alerta
        });

        console.log("Hola, mundo");
