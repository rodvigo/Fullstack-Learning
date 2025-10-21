
    /** 
     * Asignamos el botón gracias a su ID a una variable para luego usarlo en JS
     * queryselector para 1 y querySelectorAll para varios. También podríamos usar getElementsByClassName.
     * Cambia la manera de introducir el filtro en función del comando de arriba elegido: getElementsByClassName("button-apply-job");
     * querylesector devuelve solo el primer elemento y null si no enceuntra nada.
     * Esto se puede combar con if para comprobar si existe o no. if (boton != null) { ... }
     * Otra manera de aplicarlo es mediante optional chaining, esto es añadir ? tras el nombre de la variable
     *  y antes de una propiedad o método:
     * boton?.addEventListener(...) que solo ejecuta el método si boton no es null.
     * querySelectorAll devuelve una lista de nodos (NodeList) y una lista vacía si no encuentra nada.
     */

    //const botones = document.querySelectorAll('.button-apply-job'); Comentado para hacerlo de una majera mejor

    /*Sería lo mismo que:
    const boton = document.getElementById('boton-importante');*/
    /* Añadimos un listener para que cuando se haga click en el botón se ejecute la función
    Una función se puede definir de varias maneras:
    function sumar(a, b) { return a + b; } (la clásica)
    const sumarArrow = (a, b) => { return a + b; }; (la de flecha o Arrow function)
    const sumarArrow2 = (a, b) => a + b; (la de flecha simplificada con return implícito)
        */

    /**
     * Lo de abajo es correcto y hay quien siempre trabaja así, pero se puede hacer mejor.
     * No es necesario añadir un listener a cada botón si queremos que todos hagan lo mismo.
     * Se puede usar delegación de eventos, que consiste en añadir un listener a un elemento padre común
     * y luego comprobar si el objetivo del evento es uno de los botones.
     * Es más eficiente y además funciona aunque se añadan más botones dinámicamente.
     
    botones.forEach ((boton) => {   
        boton.addEventListener('click', () => {
           boton.textContent='¡Aplicado!'; 
           boton.disabled=true;
           boton.classList.add('is-applied');
        })
   
    })
    */
// Selecionamos el contenedor padre de los botones   
const jobsListingSection = document.querySelector('.jobs-listings');

// Añadimos un listener al contenedor padre y si se clicka en un botón aplicamos el resto de acciones
jobsListingSection.addEventListener('click', function(event) {
    //event.target nos da el elemento que ha sido clickado
    const element = event.target;
    // Si se clicka en un botón. Esta propagación o bubbling se puede evitar con event.stopPropagation() pero es peligroso
    if (element.classList.contains('button-apply-job')) { 
        element.textContent='¡Aplicado!'; 
        element.disabled=true;
        element.classList.add('is-applied');
    }
})
   
   
   console.log("Hola, mundo"); //Esto pasa siempore
