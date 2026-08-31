/**
 * Video Player Modal (Daniel De La Cruz presentation)
 */
export function initVideoPlayer() {
  const videoModal = document.getElementById('video-modal');
  const openVideoBtns = document.querySelectorAll('[data-open-video]');
  const closeVideoBtns = document.querySelectorAll('.video-close-btn');
  const videoIframe = document.getElementById('video-modal-iframe');

  if (!videoModal) return;

  function openVideo(url) {
    if (videoIframe && url) {
      videoIframe.src = url.includes('autoplay') ? url : `${url}${url.includes('?') ? '&' : '?'}autoplay=1`;
    }
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeVideo() {
    if (videoIframe) {
      videoIframe.src = '';
    }
    videoModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openVideoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const videoUrl = btn.getAttribute('data-video-url') || 'https://www.youtube.com/embed/dQw4w9WgXcQ';
      openVideo(videoUrl);
    });
  });

  closeVideoBtns.forEach(btn => {
    btn.addEventListener('click', closeVideo);
  });

  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) closeVideo();
  });
}
