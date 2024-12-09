// favs page
const images = [ 
    "hobbyimgs/fries.jpg",
    "hobbyimgs/waffles.jpg",
    "hobbyimgs/pesto.jpg",
    "hobbyimgs/pho.jpg",
    "hobbyimgs/PumpkinPie2-2.jpg",
    "hobbyimgs/strawberries.jpg",
    "hobbyimgs/bread.jpg",
    "hobbyimgs/Mozzarellastick.jpg",
    "hobbyimgs/donuts.jpg",
    "hobbyimgs/friedChicken.jpg"
];

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }
}

function shuffleImages() {
    const shuffledImages = images.slice();;
    shuffleArray(shuffledImages);
    const imageElements = document.querySelectorAll('.grid-container4 .foodItem');
    imageElements.forEach((img, index) => {
        if (index < 4) {
            img.src = shuffledImages[index];
            img.style.display = 'block'; 
        } else {
            img.style.display = 'none';
        }
    });
}

window.addEventListener('DOMContentLoaded', (event) => {
    shuffleImages(); 
});

setInterval(shuffleImages, 3000);

// funFacts page
let button = document.getElementById("funFactButton");
let factBox = document.getElementById("factPlace");

const facts = [
    "I've been stung by a jellyfish!", "I've been skydiving!",
    "I've never broken a bone!", "I can touch my nose with my tongue!",
    "I love cows!", "I'm double jointed in my jaw", "My first concert was a Wiggles concert",
    "I love to bake!", "I'm allergic to cats and dogs but still have them!"

];

function showFunFact() {
    const randomFact = Math.floor(Math.random() * facts.length);
    const fact = facts[randomFact];
    console.log("Selected Fact: " + fact);
    factBox.innerHTML = fact; 
}

button.addEventListener('click', showFunFact);