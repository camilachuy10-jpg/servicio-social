
const pages = [
  "pagina1.jpg",
  "pagina2.jpg",
  "pagina3.jpg"
];

let currentPage = 0;

const comicImg = document.getElementById("comic-page");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pageNumText = document.getElementById("page-num");
const overlay = document.getElementById("block-overlay");

function updateViewer() {
  comicImg.src = pages[currentPage];
  pageNumText.textContent = `Página ${currentPage + 1} de ${pages.length}`;

  
  prevBtn.disabled = currentPage === 0;

  
  if (currentPage === pages.length - 1) {
    nextBtn.textContent = "Ver más";
  } else {
    nextBtn.textContent = "Siguiente";
  }
}

nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updateViewer();
  } else {

    overlay.classList.remove("hidden");
  }
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    overlay.classList.add("hidden");
    currentPage--;
    updateViewer();
  }
});