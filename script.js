const slider = document.querySelector('.slider');
let cards = Array.from(document.querySelectorAll('.card')); // Convert NodeList to Array
let isDragging = false;
let startY = 0;
let scrollTop = 0;

// Clone the cards for infinite scroll
cards.forEach((card) => {
    const cloneTop = card.cloneNode(true);
    const cloneBottom = card.cloneNode(true);
    slider.prepend(cloneTop); // Add clones at the top
    slider.append(cloneBottom); // Add clones at the bottom
});

// Re-initialize the `cards` list with clones included
cards = Array.from(document.querySelectorAll('.card'));

// Adjust slider position to the middle of the cloned cards
slider.scrollTop = slider.scrollHeight / 2;

// Mouse down event
slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    slider.style.cursor = 'grabbing';
    startY = e.pageY - slider.offsetTop;
    scrollTop = slider.scrollTop;
});

// Mouse move event
slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const y = e.pageY - slider.offsetTop;
    const walk = (y - startY) * 2; // Sensitivity factor
    slider.scrollTop = scrollTop - walk;

    handleInfiniteScroll();
});

// Mouse up event
slider.addEventListener('mouseup', () => {
    isDragging = false;
    slider.style.cursor = 'grab';
});

// Mouse leave event
slider.addEventListener('mouseleave', () => {
    isDragging = false;
    slider.style.cursor = 'grab';
});

// Function to handle infinite scroll behavior
function handleInfiniteScroll() {
    if (slider.scrollTop <= 0) {
        // If scrolled past the top, reposition to the middle
        slider.scrollTop = slider.scrollHeight / 2 - slider.clientHeight;
    } else if (slider.scrollTop >= slider.scrollHeight - slider.clientHeight) {
        // If scrolled past the bottom, reposition to the middle
        slider.scrollTop = slider.scrollHeight / 2 - slider.clientHeight;
    }
}

// Function to update card scaling
function updateCardSizes() {
    const sliderRect = slider.getBoundingClientRect();

    cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.top + cardRect.height / 2;
        const sliderCenter = sliderRect.top + sliderRect.height / 2;

        const distance = Math.abs(sliderCenter - cardCenter);

        // Adjust scaling based on distance
        card.classList.remove('current', 'neighbor');
        if (distance < cardRect.height / 2) {
            card.classList.add('current');
        } else if (distance < cardRect.height) {
            card.classList.add('neighbor');
        }
    });
}

// Event listener for scrolling the slider
slider.addEventListener('scroll', () => {
    handleInfiniteScroll();
    updateCardSizes();
});

// Initial call to set the scaling
updateCardSizes();