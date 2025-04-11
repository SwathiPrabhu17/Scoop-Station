document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll('.product-card');
  
    productCards.forEach(card => {
      const img = card.querySelector('img');
      const priceTag = card.querySelector('.price');
      const sizeBtns = card.querySelectorAll('.size-btn');
      const cartBtn = card.querySelector('.cart-btn');
  
      const img1 = card.getAttribute('data-img1');
      const img2 = card.getAttribute('data-img2');
      let isImg1 = true;
  
      // Toggle between two images on click
      if (img && img1 && img2) {
        img.addEventListener('click', () => {
          img.src = isImg1 ? img2 : img1;
          isImg1 = !isImg1;
        });
      }
  
      // Size button logic to update price
      sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          sizeBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
  
          const size = btn.getAttribute('data-size');
          const price = card.getAttribute(`data-price-${size}`);
          if (price) {
            priceTag.textContent = `₹${price}`;
          }
        });
      });
  
      // Add to Cart button logic
      if (cartBtn) {
        cartBtn.addEventListener('click', () => {
          const name = card.getAttribute('data-name') || 'Unknown Product';
          const activeSizeBtn = card.querySelector('.size-btn.active');
          const size = activeSizeBtn ? activeSizeBtn.getAttribute('data-size') : 'Unknown';
          const price = priceTag ? priceTag.textContent : '₹0';
  
          alert(`🛒 Added to cart:\n${name} - ${size}ml - ${price}`);
        });
      }
    });
  });
  