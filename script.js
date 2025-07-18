// Create gentle floating petals
function createPetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.top = Math.random() * 100 + '%';
    petal.style.animationDelay = Math.random() * 8 + 's';

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    petal.style.background = 'rgba(${r}, ${g}, ${b}, 0.4)';

    document.querySelector('.floating-elements').appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 8000);
}

// Create butterflies
function createButterfly() {
    const butterfly = document.createElement('div');
    butterfly.className = 'butterfly';
    const butterflies = ['🦋', '🌸', '🌺', '🌻'];
    butterfly.innerHTML = butterflies[Math.floor(Math.random() * butterflies.length)];
    butterfly.style.top = Math.random() * 80 + 10 + '%';
    butterfly.style.animationDelay = Math.random() * 12 + 's';
    document.querySelector('.floating-elements').appendChild(butterfly);

    setTimeout(() => {
        butterfly.remove();
    }, 12000);
}

// Create floating clouds
function createCloud() {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.innerHTML = '☁';
    cloud.style.top = Math.random() * 30 + '%';
    cloud.style.animationDelay = Math.random() * 20 + 's';
    document.querySelector('.floating-elements').appendChild(cloud);

    setTimeout(() => {
        cloud.remove();
    }, 20000);
}

// Create sparkles effect
function createSparkles() {
    const sparkleContainer = document.querySelector('.container');
    const sparkleSymbols = ['✨', '⭐', '🌟', '💫'];

    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.innerHTML = sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 2 + 's';
            sparkleContainer.appendChild(sparkle);

            setTimeout(() => {
                sparkle.remove();
            }, 2000);
        }, i * 100);
    }
}

// Initialize gentle animations
document.addEventListener('DOMContentLoaded', function () {
    // Create initial petals
    for (let i = 0; i < 20; i++) {
        setTimeout(createPetal, i * 200);
    }

    // Continue creating petals
    setInterval(createPetal, 2000);

    // Create butterflies periodically
    setInterval(createButterfly, 8000);

    // Create clouds periodically
    setInterval(createCloud, 15000);

    // Auto-sparkles every 15 seconds
    setInterval(createSparkles, 15000);

    // Add hover effects to message text
    const messageText = document.querySelector('.message-text');
    if (messageText) {
        messageText.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });

        messageText.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    }
});