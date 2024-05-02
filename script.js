// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle visibility of share icons
document.querySelectorAll('.share-icon').forEach(icon => {
    icon.addEventListener('click', function () {
        const shareIcons = this.parentElement.querySelector('.share-icons');
        shareIcons.classList.toggle('active');
    });
});

// Toggle visibility of comments
document.querySelectorAll('.comment-icon').forEach(icon => {
    icon.addEventListener('click', function () {
        const comments = this.parentElement.querySelector('.comments');
        comments.classList.toggle('active');
    });
});
