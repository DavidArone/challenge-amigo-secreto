// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
// Lista auxiliar que se usará para saber qué amigos aún no han sido sorteados
let amigosRestantes = [];

// ===============================
// Funciones principales (Botones)
// ===============================
function agregarAmigo() {
    // Tomamos el valor ingresado en el input con id="txtAmigo"
    let nombreAmigo = document.getElementById("txtAmigo").value;

    // Validamos que el nombre no esté vacío
    if (validarNombreAmigo(nombreAmigo)) {
        // Damos formato: primera letra en mayúscula y sin espacios extra
        nombreAmigo = darFormatoAmigo(nombreAmigo);

        // Limpiamos el área de resultados (por si ya había algo mostrado)
        limpiarResultado();

        // Validamos que el nombre no esté repetido en la lista principal
        if (validarNombreUnico(nombreAmigo)) {
            // Agregamos el nombre al arreglo de amigos
            amigos.push(nombreAmigo);

            // Limpiamos el input para escribir un nuevo nombre
            document.getElementById("txtAmigo").value = "";

            // Mostramos en pantalla la lista actualizada
            mostrarEnLista();

            // Copiamos los amigos a la lista de "restantes"
            // (los que pueden salir sorteados todavía)
            amigosRestantes = [...amigos];
        } else {
            // Mensaje si el nombre ya existía en la lista
            alert("El nombre ya se encuentra registrado. Inserte un nuevo nombre.");
        }
    } else {
        // Mensaje si el campo estaba vacío
        alert("Por favor, inserte un nombre.");
    }

    // Volvemos a enfocar el cursor en el input para comodidad del usuario
    document.getElementById("txtAmigo").focus();
}
