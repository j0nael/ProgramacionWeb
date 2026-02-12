function cambiarColor() {
    const caja = document.getElementById("caja");

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    caja.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    console.log("Color cambiado");
}


const cambioBtn = document.getElementById("Cambiar");

cambioBtn.addEventListener("click", cambiarColor);