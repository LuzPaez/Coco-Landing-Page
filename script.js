const form = document.getElementById("fashionForm");
const mensaje = document.getElementById("formMessage");
const boton = document.getElementById("conocer");
const modal = document.getElementById("modalEmpresa");
const cerrar = document.querySelector(".cerrar");


form.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let text = document.getElementById("message").value.trim();

    if (name === "" || email === "" || text === "") {
        mensaje.style.color = "red";
        mensaje.textContent = "Por favor completa todos los campos"
        return;
    }

    mensaje.style.color = "green";
    mensaje.textContent = "Formulario enviado correctamente";
    form.reset();


});


boton.addEventListener("click", function () {
    modal.style.display = "flex";
});

cerrar.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});