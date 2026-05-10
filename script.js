document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            const output = document.getElementById("formMessage");

            if (name === "" || email === "" || message === "") {
                output.innerText = "Please fill all fields!";
                output.style.color = "red";
            } else {
                output.innerText = "Message sent successfully!";
                output.style.color = "lightgreen";
                form.reset();
            }
        });
    }

});