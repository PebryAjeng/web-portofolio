const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const description = document.getElementById("description");

    document.querySelectorAll(".error-message").forEach((el) => el.remove());

    const showError = (input, message) => {
        const errorMessage = document.createElement("p");
        errorMessage.innerHTML = message;
        errorMessage.classList.add("error-message");
        errorMessage.style.color = "rgb(255, 0, 157)";
        input.insertAdjacentElement("afterend", errorMessage);
    };

    let isValid = true;
    if (name.value.trim() === "") {
        showError(name, "Input Your Full Name!");
        isValid = false;
    }
    if (email.value.trim() === "") {
        showError(email, "Input Your Email!");
        isValid = false;
    }
    if (phone.value.trim() === "") {
        showError(phone, "Input Your Phone Number!");
        isValid = false;
    }
    if (description.value.trim() === "") {
        showError(description, "Input Your Description!");
        isValid = false;
    }

    if (isValid) {
        const whatsappMessage = `Halo, saya ${name.value}\nEmail: ${email.value}\nNomor HP: ${phone.value}\nDeskripsi: ${description.value}`;

        const phoneNumber = "your_phone_number";

        const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappLink, "_blank");
    }
});