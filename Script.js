// Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Global variable - accessible everywhere
let globalCounter = 0;

// Function with parameters and return value
function calculateSum(a, b) {
    // Local variables - only accessible within this function
    const result = a + b;
    globalCounter++; // Modifying global variable
    
    return result;
}

// Function to demonstrate scope
function demonstrateScope() {
    // Function-scoped variable
    var functionScoped = "I'm function scoped";
    
    if (true) {
        // Block-scoped variable
        let blockScoped = "I'm block scoped";
        
        // Display inside the block
        document.getElementById('scopeOutput').innerHTML = 
            `<strong>Inside block:</strong> ${blockScoped} <br>
             <strong>Inside function:</strong> ${functionScoped} <br>
             <strong>Global counter:</strong> ${globalCounter}`;
    }
    
    // This would cause an error - uncomment to see the error
    // console.log(blockScoped);
}

// Function to calculate and display sum
function calculate() {
    const a = Number(document.getElementById('param1').value);
    const b = Number(document.getElementById('param2').value);
    
    const result = calculateSum(a, b);
    
    document.getElementById('calcOutput').textContent = `Result: ${result}`;
}

// Reusable text formatting function
function formatText(formatType) {
    const text = document.getElementById('textInput').value;
    let formattedText;
    
    if (formatType === 'uppercase') {
        formattedText = text.toUpperCase();
    } else if (formatType === 'lowercase') {
        formattedText = text.toLowerCase();
    }
    
    document.getElementById('textOutput').textContent = `Formatted text: ${formattedText}`;
    return formattedText;
}

// Part 3: Combining CSS Animations with JavaScript

// Toggle animation on the box
function toggleAnimation() {
    const box = document.getElementById('animatedBox');
    box.classList.toggle('animate-bounce');
}

// Flip card animation
function flipCard() {
    const card = document.getElementById('flipCard');
    card.classList.toggle('flipped');
}

// Open modal with animation
function openModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('active');
}

// Close modal with animation
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}

// Reusable function to animate elements
function animateElement(elementId, animationType) {
    const element = document.getElementById(elementId);
    
    // Remove any existing animation classes
    const animationClasses = ['animate-bounce', 'animate-spin', 'animate-pulse', 'animate-shake'];
    element.classList.remove(...animationClasses);
    
    // Add the new animation class
    element.classList.add(`animate-${animationType}`);
    
    // Remove the animation class when it completes
    element.addEventListener('animationend', () => {
        element.classList.remove(`animate-${animationType}`);
    });
}

// Initialize page with some animations
document.addEventListener('DOMContentLoaded', function() {
    // Start bounce animation on the first box
    document.getElementById('animatedBox').classList.add('animate-bounce');
    
    // Make boxes clickable to trigger animations
    document.getElementById('animatedBox').addEventListener('click', function() {
        this.classList.toggle('animate-bounce');
    });
    
    // Add click event to flip card
    document.getElementById('flipCard').addEventListener('click', flipCard);
    
    // Close modal when clicking outside content
    document.getElementById('modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // Demonstrate scope on page load
    demonstrateScope();
});