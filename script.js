// let slideimages=document.querySelectorAll('img');
// //Access next and prev buttons

// let next=document.querySelectorAll('.next');
// let prev=document.querySelectorAll('.prev');
// // Access the indicators
//  let dots=document.querySelectorAll('.dot');

// var counter=0;
// // code for the next button
// next.addEventListener('click',slideNext);
// function slideNext(){
//     slideImages[counter].style.animation='next1 0.5s ease-in forwards';
//     if(counter>=slideImages.length-1){
//         counter=0;
//     }
//     else{
//         counter++;
//     }
//     slideImages[counter].style.animation='next2 0.5s ease-in forwards';
    
    

// }
// // code for prev button
// next.addEventListener('click',slidePrev);
// function slideNext(){
//     slideImages[counter].style.animation='Prev1 0.5s ease-in forwards';
//     if(counter>=slideImages.length-1){
//         counter=0;
//     }
//     else{
//         counter++;
//     }
//     slideImages[counter].style.animation='Prev2 0.5s ease-in forwards';
// }


// // Access slide images
// let slideImages = document.querySelectorAll('.slides img');
// // Access next and prev buttons
// let next = document.querySelector('.next');
// let prev = document.querySelector('.prev');
// // Access the dots
// let dots = document.querySelectorAll('.dot');

// let counter = 0; // Start with the first image
// let autoSlideInterval; // Interval for auto-slide

// // Function to update active slide and dot
// function updateSlide() {
//     slideImages.forEach((img, index) => {
//         img.classList.remove('active');
//         if (index === counter) {
//             img.classList.add('active');
//         }
//     });

//     dots.forEach((dot, index) => {
//         dot.classList.remove('active');
//         if (index === counter) {
//             dot.classList.add('active');
//         }
//     });
// }

// // Next button functionality
// next.addEventListener('click', () => {
//     counter = (counter + 1) % slideImages.length; // Loop back to the first image
//     updateSlide();
//     resetAutoSlide(); // Reset auto-slide timer
// });

// // Prev button functionality
// prev.addEventListener('click', () => {
//     counter = (counter - 1 + slideImages.length) % slideImages.length; // Loop back to the last image
//     updateSlide();
//     resetAutoSlide(); // Reset auto-slide timer
// });

// // Dots click functionality
// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         counter = index;
//         updateSlide();
//         resetAutoSlide(); // Reset auto-slide timer
//     });
// });

// // Auto-slide functionality
// function autoSlide() {
//     autoSlideInterval = setInterval(() => {
//         counter = (counter + 1) % slideImages.length; // Move to the next slide
//         updateSlide();
//     }, 5000); // 5-second interval
// }

// // Reset auto-slide timer
// function resetAutoSlide() {
//     clearInterval(autoSlideInterval); // Stop the current timer
//     autoSlide(); // Restart the timer
// }

// // Stop auto-slide on mouse hover
// const slideContainer = document.querySelector('.slide-container');
// slideContainer.addEventListener('mouseenter', () => {
//     clearInterval(autoSlideInterval); // Stop auto-slide when mouse is over the slider
// });

// // Resume auto-slide on mouse leave
// slideContainer.addEventListener('mouseleave', () => {
//     autoSlide(); // Restart auto-slide when mouse leaves the slider
// });

// // Start auto-slide on page load
// autoSlide();

// // Access slide images
// let slideImages = document.querySelectorAll('.slides img');
// // Access next and prev buttons
// let next = document.querySelector('.next');
// let prev = document.querySelector('.prev');
// // Access the dots
// let dots = document.querySelectorAll('.dot');

// let counter = 0; // Start with the first image
// let autoSlideInterval; // Interval for auto-slide

// // Function to update active slide and dot
// function updateSlide() {
//     slideImages.forEach((img, index) => {
//         img.classList.remove('active');
//         if (index === counter) {
//             img.classList.add('active');
//         }
//     });

//     dots.forEach((dot, index) => {
//         dot.classList.remove('active');
//         if (index === counter) {
//             dot.classList.add('active');
//         }
//     });
// }

// // Next button functionality
// next.addEventListener('click', () => {
//     counter = (counter + 1) % slideImages.length; // Loop back to the first image
//     updateSlide();
//     resetAutoSlide(); // Reset auto-slide timer
// });

// // Prev button functionality
// prev.addEventListener('click', () => {
//     counter = (counter - 1 + slideImages.length) % slideImages.length; // Loop back to the last image
//     updateSlide();
//     resetAutoSlide(); // Reset auto-slide timer
// });

// // Dots click functionality
// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         counter = index;
//         updateSlide();
//         resetAutoSlide(); // Reset auto-slide timer
//     });
// });

// // Auto-slide functionality
// function autoSlide() {
//     autoSlideInterval = setInterval(() => {
//         counter = (counter + 1) % slideImages.length; // Move to the next slide
//         updateSlide();
//     }, 5000); // 5-second interval
// }

// // Reset auto-slide timer
// function resetAutoSlide() {
//     clearInterval(autoSlideInterval); // Stop the current timer
//     autoSlide(); // Restart the timer
// }

// // Stop auto-slide on mouse hover
// const slideContainer = document.querySelector('.slide-container');
// slideContainer.addEventListener('mouseenter', () => {
//     clearInterval(autoSlideInterval); // Stop auto-slide when mouse is over the slider
//     console.log("Auto-sliding stopped"); // Debugging log
// });

// // Resume auto-slide on mouse leave
// slideContainer.addEventListener('mouseleave', () => {
//     autoSlide(); // Restart auto-slide when mouse leaves the slider
//     console.log("Auto-sliding resumed"); // Debugging log
// });

// // Start auto-slide on page load
// autoSlide();


// // Get slide images, buttons, and dots
// let slideImages = document.querySelectorAll('.slides img');
// let nextBtn = document.querySelector('.next');
// let prevBtn = document.querySelector('.prev');
// let dots = document.querySelectorAll('.dot');
// let slideContainer = document.querySelector('.slide-container');

// let counter = 0; // Track current slide index
// let autoSlideInterval; // Interval for auto-slide

// // Function to update slides and dots
// function updateSlide() {
//     slideImages.forEach((img, index) => {
//         img.classList.remove('active');
//         dots[index].classList.remove('active');

//         if (index === counter) {
//             img.classList.add('active');
//             dots[index].classList.add('active');
//         }
//     });
// }

// // Function to go to next slide
// function nextSlide() {
//     counter = (counter + 1) % slideImages.length;
//     updateSlide();
//     resetAutoSlide();
// }

// // Function to go to previous slide
// function prevSlide() {
//     counter = (counter - 1 + slideImages.length) % slideImages.length;
//     updateSlide();
//     resetAutoSlide();
// }

// // Function to auto-slide every 5 seconds
// function autoSlide() {
//     autoSlideInterval = setInterval(() => {
//         nextSlide();
//     }, 5000);
// }

// // Function to reset auto-slide on user interaction
// function resetAutoSlide() {
//     clearInterval(autoSlideInterval);
//     autoSlide();
// }

// // Click event for next button
// nextBtn.addEventListener('click', nextSlide);

// // Click event for previous button
// prevBtn.addEventListener('click', prevSlide);

// // Click event for dots
// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         counter = index;
//         updateSlide();
//         resetAutoSlide();
//     });
// });

// // Stop auto-slide when hovering over the slider
// slideContainer.addEventListener('mouseenter', () => {
//     clearInterval(autoSlideInterval);
// });

// // Resume auto-slide when mouse leaves the slider
// slideContainer.addEventListener('mouseleave', () => {
//     autoSlide();
// });

// // Start auto-slide when the page loads
// autoSlide();




document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    let slideImages = document.querySelectorAll(".slides img");
    let nextBtn = document.querySelector(".next");
    let prevBtn = document.querySelector(".prev");
    let dots = document.querySelectorAll(".dot");

    let counter = 0;
    let autoSlideInterval;

    // Function to update slides and dots
    function updateSlide() {
        slideImages.forEach((img, index) => {
            img.classList.remove("active");
            dots[index].classList.remove("active");

            if (index === counter) {
                img.classList.add("active");
                dots[index].classList.add("active");
            }
        });
    }

    // Next Slide
    function nextSlide() {
        counter = (counter + 1) % slideImages.length;
        updateSlide();
        resetAutoSlide();
    }

    // Previous Slide
    function prevSlide() {
        counter = (counter - 1 + slideImages.length) % slideImages.length;
        updateSlide();
        resetAutoSlide();
    }

    // Auto-slide function
    function autoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlide();
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            counter = index;
            updateSlide();
            resetAutoSlide();
        });
    });

    autoSlide();
});



// our products slider

let slideIndex = 0;

function moveSlide(step) {
    let slides = document.querySelectorAll(".slide");
    let totalSlides = slides.length;
    
    slideIndex += step;
    
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    document.querySelector(".slider").style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Auto Slide Functionality
setInterval(() => {
    moveSlide(1);
}, 5000);

// Show Product Information
function showDetails(index) {
    let info = document.querySelectorAll(".product-info");
    info[index].style.display = info[index].style.display === "block" ? "none" : "block";
}


// auto slider section
// let slideIndex = 0;
// let slides = document.querySelectorAll(".slide");
// let totalSlides = slides.length;

// // Function to move slides in a circular direction
// function moveSlide(step) {
//     slideIndex += step;

//     // Circular transition
//     if (slideIndex >= totalSlides) {
//         slideIndex = 0;
//     } else if (slideIndex < 0) {
//         slideIndex = totalSlides - 1;
//     }

//     document.querySelector(".slider").style.transform = `translateX(${-slideIndex * 100}%)`;
// }

// // Auto Slide Functionality (Circular)
// setInterval(() => {
//     moveSlide(1);
// }, 5000);

// // Show Product Information
// function showDetails(index) {
//     let info = document.querySelectorAll(".product-info");
//     info[index].style.display = info[index].style.display === "block" ? "none" : "block";
// }


























// JavaScript for menu toggle functionality
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

// Mobile Menu Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
});


// Testimonial slider:-
let currentIndex = 0;

const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = 'none';
    });
    // Show the current testimonial
    testimonials[index].style.display = 'block';
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    showTestimonial(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentIndex);
});

// Show the first testimonial on load
showTestimonial(currentIndex);
