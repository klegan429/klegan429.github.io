
// home page
const image = document.getElementById("slidingImage");

image.addEventListener("click", function() {
    // Check if the image has already moved (to reset the position when clicked again)
    const currentLeft = parseInt(window.getComputedStyle(image).left, 10);
    
    if (currentLeft === 0) {
        image.style.left = "100vw"; // Move the image to the right side (outside of the screen)
    } else {
        image.style.left = "0"; // Reset the position to the left side
    }
});
 