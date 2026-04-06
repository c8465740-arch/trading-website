// Modal JS
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close');

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        modal.style.display = 'block';
        modalTitle.innerText = card.innerText;

        if(card.innerText === "Forex Trading") {
            modalText.innerText = "Forex Trading: Professional Forex trading services with risk management and smart strategies for your profit growth.";
        } else if(card.innerText === "Crypto Trading") {
            modalText.innerText = "Crypto Trading: Expert crypto trading guidance, portfolio analysis, and risk management for digital currencies.";
        } else if(card.innerText === "Stock Analysis") {
            modalText.innerText = "Stock Analysis: Comprehensive stock market insights, investment planning, and portfolio recommendations.";
        }
    });
});

// Close modal
closeBtn.onclick = () => {
    modal.style.display = 'none';
}

// Close modal when click outside
window.onclick = (event) => {
    if(event.target == modal) {
        modal.style.display = 'none';
    }
}