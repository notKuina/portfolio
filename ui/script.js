    function scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }

    function scrollToContact() {
      scrollToSection("contact");
    }


    document.querySelectorAll('#navbarLinks a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href').substring(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  });
});

    document.getElementById('projectsBtn').addEventListener('click', () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

//cv
 function downloadCV() {
    const link = document.createElement('a');
    link.href = '/path/to/your-cv.pdf';
    link.download = 'Samjhana_Gharti_Magar_CV.pdf'; // name for downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
 }


 //projects
const projects = [
  {
    name: "Vacation of Africa",
    year: "Mar 2022",
    align: "right",
    image: "images/website1.jpeg",
    link: "https://yourusername.github.io/vacation-of-africa-demo/",
    description: "A travel landing page showcasing the beauty and culture of Africa using responsive layout and animations.",
  },
  {
    name: "Moola App",
    year: "Sept 2022",
    align: "left",
    image: "images/website2.jpeg",
    link: "https://github.com/yourusername/moola-app",
    description: "A simple budgeting and expense tracking application built with JavaScript and Firebase.",
  },
  {
    name: "Tourzania",
    year: "Jan 2023",
    align: "right",
    image: "images/website3.jpeg",
    link: "https://yourusername.github.io/tourzania-demo/",
    description: "A tourism web app allowing users to explore and book tour packages through a clean UI.",
  },
  {
    name: "Bank of Luck",
    year: "May 2024",
    align: "left",
    image: "images/website4.jpeg",
    link: "https://github.com/yourusername/bank-of-luck",
    description: "A gamified banking concept app designed to teach kids money management through fun interactions.",
  },
];

function renderProjects() {
  const container = document.getElementById("projectsList");
  container.innerHTML = ""; // clear existing content

  projects.forEach((project) => {
    const alignClass = project.align === "left" ? "md:flex-row" : "md:flex-row-reverse";

    const projectHTML = `
      <div class="flex w-full sm:flex-col-reverse items-center gap-8 justify-end sm:flex-col ${alignClass}">
        <div>
          <h2 class="md:text-3xl sm:text-2xl text-yellow-300">${project.name}</h2>
          <h2 class="text-xl font-thin text-white font-serif sm:text-center ${
            project.align === "left" ? "md:text-right" : "md:text-left"
          }">${project.year}</h2>
          <p class="text-gray-400 mt-4 mb-2 text-justify">${project.description}</p>
          <a href="${project.link}" target="_blank" rel="noopener noreferrer" 
            class="text-lg flex gap-2 items-center text-green-700 hover:text-yellow-300 transition-all duration-500 cursor-pointer sm:justify-self-center ${
              project.align === "left" ? "md:justify-self-end" : "md:justify-self-start"
            }">
            View
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 3a.5.5 0 0 1 .5.5v6.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.498.498 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L7.5 10.293V3.5A.5.5 0 0 1 8 3z"/>
            </svg>
          </a>
        </div>
        <div class="relative max-h-[220px] max-w-[400px] rounded-xl overflow-hidden border border-white transition-transform duration-500 hover:scale-110">
          <div class="absolute top-0 left-0 w-full h-full opacity-50 hover:opacity-0 transition-opacity duration-500 hidden md:block"></div>
          <img src="${project.image}" alt="${project.name}" class="w-full h-full object-cover" />
        </div>
      </div>
    `;

    container.insertAdjacentHTML("beforeend", projectHTML);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
});

//contact
  emailjs.init("I6HAT5mUZH7WHabGE");

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("fromName");
    const emailInput = document.getElementById("fromEmail");
    const messageInput = document.getElementById("message");
    const successMessage = document.getElementById("successMessage");

    // Clear any previous message
    successMessage.textContent = "";
    successMessage.classList.remove("text-red-500", "text-green-300");

    // Simple Validation
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      successMessage.textContent = "All fields are required.";
      successMessage.classList.add("text-red-500");
      return;
    }

    if (!emailRegex.test(email)) {
      successMessage.textContent = "Please enter a valid email.";
      successMessage.classList.add("text-red-500");
      return;
    }

    // Send email via EmailJS
    emailjs.send("service_ko3hmpt", "template_ahbmmqd", {
      from_name: name,
      from_email: email,
      message: message,
    }).then(
      function () {
        successMessage.textContent = "Message Sent Successfully!";
        successMessage.classList.add("text-green-300");

        // Clear form
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
      },
      function (error) {
        successMessage.textContent = "Message failed to send. Please try again.";
        successMessage.classList.add("text-red-500");
        console.log("FAILED...", error);
      }
    );
  });




  //gobacktotop
 document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.remove("hidden");
    } else {
      backToTopBtn.classList.add("hidden");
    }
  });
});
