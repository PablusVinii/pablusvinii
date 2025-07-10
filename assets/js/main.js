import { desafios } from "./desafios.js";
import { projetos } from "./projetos.js";

const navigation = document.querySelector("#navigation");
const backToTopButton = document.querySelector("#backToTopButton");
const toggle = document.querySelector("#sw-checkbox");
const projectsSection = document.querySelector("#projects .wrapper");

// Adicionando referências para as novas seções para activateMenuAtCurrentSection
const education = document.querySelector("#education");
const knowledge = document.querySelector("#knowledge");
const softSkills = document.querySelector("#soft-skills");
const resume = document.querySelector("#resume");
// 'about' e 'contact' provavelmente já são selecionados ou não precisam ser se não existirem no HTML original com esses IDs para a função.
// Se 'about' e 'contact' são IDs de seções, eles precisam ser definidos como constantes também.
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");


const notebook_1 = document.querySelector("#notebook-1");
const notebook_2 = document.querySelector("#notebook-2");
const notebook_2_white = document.querySelector("#notebook-2-white");
const vidro = document.querySelector("#vidro");

window.addEventListener("load", function begin() {
  projetos(projectsSection);
  const desafioBtn = document.querySelector("#desafio");

  desafioBtn.addEventListener("click", () => {
    desafios(projectsSection);
    document
      .querySelector("#backToProjectsBtn")
      .addEventListener("click", begin);
  });
});

window.addEventListener("scroll", onScroll);
onScroll();

window.onload = setTimeout(() => {
  notebook_1.style.opacity = 0;

  notebook_1.style.animation = "none";
  notebook_2.style.animation = "none";
  notebook_2_white.style.animation = "none";
  vidro.style.animation = "none";
}, 4000);

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(projects);
  activateMenuAtCurrentSection(education);
  activateMenuAtCurrentSection(resume); // Adicionada a seção resume
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  if (!section) return; // Adiciona verificação para seção nula ou indefinida

  const targetLine = scrollY + innerHeight / 2;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");

  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

openMenu();
function openMenu() {
  const openBtns = document.querySelectorAll(".open");
  openBtns.forEach((e) => {
    e.addEventListener("click", () => {
      document.body.classList.add("menu-expanded");
    });
  });
}

closeMenu();
function closeMenu() {
  const closeBtns = document.querySelectorAll(".close");
  closeBtns.forEach((e) => {
    e.addEventListener("click", () => {
      document.body.classList.remove("menu-expanded");
    });
  });
}

ScrollReveal({
  origin: "bottom",
  distance: "50px",
  duration: 1000,
}).reveal(
  `#home, 
  #home img, 
  #about, 
  #about header, 
  #about p,
  #about img,
  #projects,
  #projects header,
  #projects .card,
  #knowledge,
  #knowledg header,
  #knowledg .skills-category, /* Atualizado de .card para .skills-category */

  #experience header,
  #experience .timeline-item,
  #education,
  #education header,
  #education .education-item,
  #soft-skills,
  #soft-skills header,
  #soft-skills .skills-list li,
  #resume,                /* Adicionada a seção resume */
  #resume header,
  #resume .content p,
  #resume .button,
  #contact,
  #contact header`
);

if (toggle) {
  toggle.addEventListener("change", () => {
    console.log("Toggle clicado. Novo estado checked:", toggle.checked);
    if (toggle.checked) {
      document.body.classList.add("light-mode");
      console.log("Modo claro ativado. Classes do body:", document.body.className);
    } else {
      document.body.classList.remove("light-mode");
      console.log("Modo escuro ativado. Classes do body:", document.body.className);
    }
  });
} else {
  console.error("Elemento #sw-checkbox não encontrado.");
}
