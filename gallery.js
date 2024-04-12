const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const expandedImage = document.querySelector('.expanded-image');
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        imageContainer.appendChild(img.cloneNode(true));  // Clone image for expansion

        expandedImage.appendChild(imageContainer);
        expandedImage.classList.add('open');  // Show the expanded image

        const closeButton = document.createElement('i');
        closeButton.classList.add('fas', 'fa-times', 'close-button');  // Close button with fonts Awesome
        closeButton.addEventListener('click', () => {
            expandedImage.classList.remove('open');
            expandedImage.innerHTML = '';  // Clear expanded image container
        });

        expandedImage.appendChild(closeButton);
    });
});

document.addEventListener('DOMContentLoaded', function() { // Ensure DOM is loaded
    const galleryItems = document.querySelectorAll('.gallery-item');
    console.log('Gallery Items:', galleryItems); // Check if elements are found
});
