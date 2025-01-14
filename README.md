# Draggable-Card-Slider

Vertical Draggable Card Slider A customizable vertical draggable card slider with infinite scrolling functionality and an elegant scaling effect using JavaScript, CSS, and HTML.

🚀 Features Vertical Draggable Slider: Allows users to drag and scroll cards vertically with smooth interaction. Infinite Scrolling: Clones cards at the top and bottom to provide a seamless scrolling experience. Dynamic Card Scaling: Cards resize dynamically based on their proximity to the center of the slider. Glassmorphism Design: Stylish, semi-transparent cards with a glass-like blur effect. Customizable: Modify card contents and styling easily for various use cases.

📂 Project Structure

graphql Copy code project/ │ ├── index.html # Main HTML file ├── style.css # Styling for the slider and cards └── script.js # JavaScript logic for draggable slider and infinite scrolling

📄 Usage Instructions 1️⃣ HTML (index.html) This file defines the structure of the card slider.

Main Container: Contains the slider and cards. Card Elements: Each card consists of a header and body, designed with placeholders for further customization. Key Section: html

2️⃣ CSS (style.css) Handles the visual styling of the slider and cards.

Key Features: Glassmorphism Cards: Semi-transparent cards with a blur effect. Responsive Scaling: Centered cards scale dynamically for a focused effect. Smooth Hover Effects: Hovering over a card triggers a scaling animation.

Key Classes: .card: Basic card styling. .card.current: Styling for the center card (enlarged). .card.neighbor: Styling for cards adjacent to the center.

3️⃣ JavaScript (script.js) Provides interactive functionality for the slider.

## Key Functionalities:

Draggable Slider: Enables dragging the slider vertically using mouse events. Infinite Scrolling: Clones cards to ensure seamless scrolling when reaching the top or bottom. Card Scaling: Dynamically adjusts the size of cards based on their position relative to the center.

## Key Functions:

handleInfiniteScroll(): Ensures infinite scrolling by repositioning the slider when it reaches its bounds.

updateCardSizes(): Dynamically adjusts the scaling of cards based on their position.

Event Listeners: mousedown, mousemove, mouseup, and mouseleave for dragging behavior. scroll for infinite scrolling and updating card scaling.
