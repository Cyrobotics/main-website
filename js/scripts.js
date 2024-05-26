document.addEventListener("DOMContentLoaded", function() {
    const productCards = document.querySelectorAll('.product-card button');
    productCards.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = button.parentElement;
            const productName = productCard.querySelector('h2').innerText;
            const productPrice = productCard.querySelector('p').innerText;
            const productImage = productCard.querySelector('img').src;
            displayProductDetails(productName, productPrice, productImage);
        });
    });

    function displayProductDetails(name, price, image) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">&times;</span>
                <img src="${image}" alt="${name}">
                <h2>${name}</h2>
                <p>${price}</p>
                <button>Add to Cart</button>
            </div>
        `;
        document.body.appendChild(modal);
        modal.querySelector('.close-button').addEventListener('click', () => {
            modal.remove();
        });
    }
});
