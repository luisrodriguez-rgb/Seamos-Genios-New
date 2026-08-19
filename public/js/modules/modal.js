/**
 * Modal & Auth Drawer Navigation Module (v2.1)
 */
export function initModal() {
  const authModal = document.getElementById('auth-modal');
  const openModalBtns = document.querySelectorAll('[data-open-modal]');
  const closeModalBtns = document.querySelectorAll('.modal-close-btn');

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Role Switcher in Auth Modal (Clean text, no emojis)
  const roleButtons = document.querySelectorAll('.role-tab-btn');
  const roleDescription = document.getElementById('modal-role-desc');
  const roleInput = document.getElementById('modal-role-input');

  roleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      roleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const role = btn.getAttribute('data-role');
      if (roleInput) roleInput.value = role;

      if (roleDescription) {
        if (role === 'colegio') {
          roleDescription.textContent = 'Acceso institucional para rectores, coordinadores y docentes.';
        } else if (role === 'padre') {
          roleDescription.textContent = 'Portal de seguimiento académico y reportes de progreso para acudientes.';
        } else {
          roleDescription.textContent = 'Acceso a simulacros calibrados, dashboard en vivo y neuroaprendizaje con IA.';
        }
      }
    });
  });

  // Mobile Menu Drawer Toggle
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileDrawer.classList.toggle('active');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!mobileDrawer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileDrawer.classList.remove('active');
      }
    });
  }

  // Open Modal Handlers
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (authModal) {
        authModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close Modal Handlers
  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  if (authModal) {
    authModal.addEventListener('click', (e) => {
      if (e.target === authModal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && authModal && authModal.classList.contains('active')) {
      closeModal();
    }
  });

  function closeModal() {
    if (authModal) {
      authModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  return { closeModal };
}
