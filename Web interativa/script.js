function cambiarColor() {
    const caja = document.getElementById("caja");

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const c = Math.floor(Math.random() * 256);

    caja.style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${c})`;

    console.log("Color cambiado correctamente");
}
