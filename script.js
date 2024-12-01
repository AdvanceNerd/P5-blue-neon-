// Menambahkan event scroll untuk animasi
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Cek jika elemen sudah hampir terlihat
        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('visible'); // Menambahkan kelas 'visible' untuk memicu animasi
        }
    });
});

// Carousel auto swipe dan tombol navigasi
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slideWidth = slides[0].offsetWidth;
    const slideContainer = document.querySelector('.slides');
    slideContainer.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Auto slide setiap 3 detik
setInterval(nextSlide, 3000);

// Event listener untuk tombol
document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);


// Smooth Scroll for Navigation
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start'      // Scroll to the top of the section
            });
        }
    });
});



// document.getElementById('toggle-navbar').addEventListener('click', function() {
//     document.querySelector('.navbar').classList.toggle('mobile');
// });

// window.addEventListener('scroll', function() {
//     if (window.scrollY > 50) {
//         document.body.classList.add('scrolled');
//     } else {
//         document.body.classList.remove('scrolled');
//     }
// });


document.getElementById('toggle-navbar').addEventListener('click', function () {
    const navbar = document.querySelector('.navbar');
    const toggleButton = this;

    if (navbar.classList.contains('visible')) {
        // Hide navbar
        navbar.classList.remove('visible');
        navbar.classList.add('hidden');
        toggleButton.innerHTML = '<i class="fas fa-chevron-down"></i>'; // Change to down arrow
    } else {
        // Show navbar
        navbar.classList.remove('hidden');
        navbar.classList.add('visible');
        toggleButton.innerHTML = '<i class="fas fa-chevron-up"></i>'; // Change to up arrow
    }
});


