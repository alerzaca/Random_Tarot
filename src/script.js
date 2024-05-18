document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('card');
    const front = card.querySelector('.front');
    const descriptionElement = document.getElementById('description');

    const tarotCards = [
        { image: '../images/Default_tarot_card_0.jpg', description: 'Description for Card 1' },
        { image: '../images/Default_tarot_card_1.jpg', description: 'Description for Card 2' },
        { image: '../images/Default_tarot_card_2.jpg', description: 'Description for Card 3' },
        // Add objects for all 20 card images with their descriptions
    ];

    card.addEventListener('click', () => {
        if (!card.classList.contains('flipped')) {
            const randomIndex = Math.floor(Math.random() * tarotCards.length);
            const selectedCard = tarotCards[randomIndex];
            front.style.backgroundImage = `url(${selectedCard.image})`;
            front.style.backgroundSize = 'cover';
            card.classList.add('flipped');
            descriptionElement.textContent = selectedCard.description;
            descriptionElement.classList.add('visible');
        }
    });
});