// Toggle search bar
document.addEventListener("DOMContentLoaded", () => {
    const searchToggle = document.getElementById("search-toggle");
    const searchBar = document.getElementById("search-bar");
  
    searchToggle.addEventListener("click", () => {
      if (searchBar.style.display === "block") {
        searchBar.style.display = "none";
      } else {
        searchBar.style.display = "block";
      }
    });
  });