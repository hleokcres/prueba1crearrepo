// DOMContentLoaded para asegurarnos que el HTML esté cargado
document.addEventListener("DOMContentLoaded", iniciarEventos);

function iniciarEventos() {
  // Evento: mouseover y mouseout en la caja
  const caja = document.getElementById("caja");
  caja.addEventListener("mouseover", function () {
    caja.style.border = "2px solid blue";
    caja.textContent = "¡Hola! Has pasado el ratón.";
  });
  caja.addEventListener("mouseout", function () {
    caja.style.border = "none";
    caja.textContent = "Pasa el ratón por aquí";
  });

  // Evento: focus y blur en el input nombre
  const inputNombre = document.querySelector("input[name='name']");
  inputNombre.addEventListener("focus", function () {
    inputNombre.style.backgroundColor = "#e0f7fa";
  });
  inputNombre.addEventListener("blur", function () {
    inputNombre.style.backgroundColor = "white";
  });

  // Evento: change en email
  const inputEmail = document.querySelector("input[name='email']");
  inputEmail.addEventListener("change", function () {
    console.log("Nuevo email ingresado:", inputEmail.value);
  });

  // Evento: keydown y keyup en todo el documento
  document.addEventListener("keydown", function (event) {
    console.log("Tecla presionada:", event.key);
  });
  document.addEventListener("keyup", function (event) {
    console.log("Tecla soltada:", event.key);
  });

  // Evento: doble clic en el título
  const titulo = document.getElementById("titulo");
  titulo.addEventListener("dblclick", function () {
    alert("¡Doble clic en el título!");
  });

  // Evento: submit del formulario
  const form = document.getElementById("formulario");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const password = form.elements["password"].value;
    alert(`Datos recibidos:\nNombre: ${name}\nEmail: ${email}`);
  });

  // Evento: input en campo en vivo
  const inputLive = document.querySelector("input[name='liveInput']");
  inputLive.addEventListener("input", function () {
    console.log("Texto en vivo:", inputLive.value);
  });
}
