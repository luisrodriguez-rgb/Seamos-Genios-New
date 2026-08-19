/**
 * Video Player & FAQ Demo Tour Module
 */
export function initVideoPlayer() {
  const videoPreviewCard = document.getElementById('faq-video-card');
  const videoModal = document.getElementById('video-modal');
  const videoModalClose = document.getElementById('video-modal-close');
  const videoFrame = document.getElementById('video-frame');

  function openVideoModal() {
    if (videoModal) {
      videoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      // Load or play video if iframe exists
      if (videoFrame && videoFrame.dataset.src) {
        videoFrame.src = videoFrame.dataset.src;
      }
    }
  }

  function closeVideoModal() {
    if (videoModal) {
      videoModal.classList.remove('active');
      document.body.style.overflow = '';
      if (videoFrame) {
        videoFrame.src = '';
      }
    }
  }

  if (videoPreviewCard) {
    videoPreviewCard.addEventListener('click', openVideoModal);
  }

  if (videoModalClose) {
    videoModalClose.addEventListener('click', closeVideoModal);
  }

  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
      closeVideoModal();
    }
  });
}
