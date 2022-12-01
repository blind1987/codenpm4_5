const myModal = new bootstrap.Modal(document.getElementById('modalContacto'));

const on = (element, event, selector, handler) => {
    element.addEventListener(event, (e) => {
        // es el padre mas cercano 
        if (e.target.closest(selector)) {
            handler(e)
        }
    });
}

on(document, "click", "#btnEditar", (e) => {
    const fila = e.target.parentNode.parentNode;
    edit_id.value = fila.children[0].innerHTML;
    edit_nombre.value = fila.children[1].innerHTML;
    edit_modelo.value = fila.children[2].innerHTML;
    edit_marca.value = fila.children[3].innerHTML;
    edit_descripcion.value = fila.children[4].innerHTML;
    edit_fecha_lanzamiento.value = fila.children[5].innerHTML;
    edit_imagen.value = fila.children[6].innerHTML;
    myModal.show();
});