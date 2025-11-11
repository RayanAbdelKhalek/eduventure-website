const images = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const close = document.querySelector('.close');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const img = entry.target;
    const previewSrc = img.dataset.preview;
    const fullSrc = img.dataset.full;

    // Preload the mid-quality preview
    const preview = new Image();
    preview.src = previewSrc;
    preview.onload = () => {
      img.src = previewSrc;
      img.classList.add('loaded');
    };

    // Save fullSrc for lightbox
    img.dataset.full = fullSrc;

    obs.unobserve(img);
  });
}, { threshold: 0.1 });

images.forEach(img => observer.observe(img));

// Lightbox handling (upgraded);

// Create arrows dynamically if not already in HTML
let arrowLeft = document.querySelector('.arrow.left');
let arrowRight = document.querySelector('.arrow.right');

if (!arrowLeft || !arrowRight) {
  arrowLeft = document.createElement('span');
  arrowLeft.className = 'arrow left';
  arrowLeft.innerHTML = '&#10094;';
  arrowRight = document.createElement('span');
  arrowRight.className = 'arrow right';
  arrowRight.innerHTML = '&#10095;';
  lightbox.appendChild(arrowLeft);
  lightbox.appendChild(arrowRight);
}

let currentIndex = 0;
const imageArray = Array.from(images);

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.dataset.full;
    currentIndex = index;
  });
});

close.addEventListener('click', () => (lightbox.style.display = 'none'));

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});

// Function to switch image
function showImage(offset) {
  currentIndex = (currentIndex + offset + imageArray.length) % imageArray.length;
  const nextImage = imageArray[currentIndex];
  lightboxImg.src = nextImage.dataset.full;
}

// Arrow controls
arrowLeft.addEventListener('click', () => showImage(-1));
arrowRight.addEventListener('click', () => showImage(1));

// Keyboard controls
document.addEventListener('keydown', e => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowRight') showImage(1);
    if (e.key === 'ArrowLeft') showImage(-1);
    if (e.key === 'Escape') lightbox.style.display = 'none';
  }
});


// Video section interaction
document.addEventListener('DOMContentLoaded', () => {
  const videoTrigger = document.getElementById('video-trigger');
  const videoEmbed = document.getElementById('video-embed');

  if (videoTrigger && videoEmbed) {
    videoTrigger.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = "https://www.youtube.com/embed/JMZx9GbG28A?autoplay=1";
      iframe.title = "EduVenture Demo Video";
      iframe.allowFullscreen = true;
      iframe.allow = "autoplay; encrypted-media";
      videoEmbed.appendChild(iframe);

      videoTrigger.style.display = 'none';
      videoEmbed.style.display = 'block';
    });
  }
});
