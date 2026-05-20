document.addEventListener('DOMContentLoaded', () => {
    // Fade in the profile image
    const img = document.querySelector('.hero-image');
    if(img) {
        img.style.opacity = '0';
        img.style.transform = 'translateY(20px)';
        img.style.transition = 'all 1s ease';
        setTimeout(() => {
            img.style.opacity = '1';
            img.style.transform = 'translateY(0)';
        }, 300);
    }
});