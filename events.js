document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
  
    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        // Close other cards
        cards.forEach(function (otherCard) {
          if (otherCard !== card) {
            otherCard.classList.remove("flip");
          }
        });
  
        // Toggle this card
        card.classList.toggle("flip");
      });
    });
  
    // Close all cards when clicking outside
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".card")) {
        cards.forEach(card => card.classList.remove("flip"));
      }
    });
  });
  