document.addEventListener("DOMContentLoaded", () => {
  const searchToggle = document.getElementById("search-toggle");
  const searchBar = document.getElementById("search-bar");

  searchToggle.addEventListener("click", () => {
    searchBar.classList.toggle("visible");
  });
});
