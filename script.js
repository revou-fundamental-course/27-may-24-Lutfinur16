function replaceName () {
    let name = prompt("Siapakah nama anda ?", "")
    document.getElementById("name").innerHTML=name
}

replaceName();

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscribeForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Mencegah form dari reload halaman

        const name = form.name.value.trim();
        const email = form.email.value.trim();

        if (name === "" || email === "") {
            messageDiv.textContent = "Please fill in both fields.";
            messageDiv.style.color = "red";
        } else if (!validateEmail(email)) {
            messageDiv.textContent = "Please enter a valid email address.";
            messageDiv.style.color = "red";
        } else {
            messageDiv.textContent = `Terima kasih ${name}, ditunggu ya informasi dari kami!`;
            messageDiv.style.color = "#19B65B";
            form.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});



let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'flex' : 'none';
    });
}

function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides();
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
    setInterval(() => moveSlide(1), 5000); 
    
});
