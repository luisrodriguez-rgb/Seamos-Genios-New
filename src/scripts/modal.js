/**
 * SEAMOS GENIOS - AUTH & REGISTRATION MODAL (v3.0)
 * Dual-Mode: Inscribirme (Registro / Diagnóstico) & Iniciar Sesión (Acceso a Plataforma)
 */

export function initModal() {
  const authModal = document.getElementById('auth-modal');
  const openModalBtns = document.querySelectorAll('[data-open-modal]');
  const closeModalBtns = document.querySelectorAll('.modal-close-btn');

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Mode Switcher Tabs (Inscribirme vs Iniciar Sesión)
  const modeTabs = document.querySelectorAll('.auth-mode-tab');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-role-desc');
  const modalSubmitBtn = document.getElementById('modal-submit-btn');
  const fieldNameWrapper = document.getElementById('field-name-wrapper');
  const fieldPhoneWrapper = document.getElementById('field-phone-wrapper');
  const fieldSchoolWrapper = document.getElementById('field-school-wrapper');
  const modalFormMode = document.getElementById('modal-form-mode');

  // Role Switcher
  const roleButtons = document.querySelectorAll('.role-tab-btn');
  const roleInput = document.getElementById('modal-role-input');

  let currentMode = 'register'; // 'register' | 'login'
  let currentRole = 'estudiante'; // 'estudiante' | 'colegio' | 'padre' | 'docente'

  function updateFormState() {
    if (currentMode === 'login') {
      if (modalTitle) modalTitle.textContent = 'Iniciar Sesión en Seamos Genios';
      if (modalDesc) modalDesc.textContent = 'Ingresa tus credenciales para acceder a tus simulacros y dashboard.';
      if (modalSubmitBtn) modalSubmitBtn.textContent = 'Ingresar a mi Cuenta →';
      if (fieldNameWrapper) fieldNameWrapper.style.display = 'none';
      if (fieldPhoneWrapper) fieldPhoneWrapper.style.display = 'none';
      if (fieldSchoolWrapper) fieldSchoolWrapper.style.display = 'none';
      if (modalFormMode) modalFormMode.value = 'login';
    } else {
      if (modalTitle) modalTitle.textContent = 'Bienvenido a Seamos Genios';
      if (modalSubmitBtn) modalSubmitBtn.textContent = 'Inscribirme / Agendar Diagnóstico →';
      if (fieldNameWrapper) fieldNameWrapper.style.display = 'block';
      if (fieldPhoneWrapper) fieldPhoneWrapper.style.display = 'block';
      if (modalFormMode) modalFormMode.value = 'register';

      // Role specific description
      if (currentRole === 'colegio') {
        if (modalDesc) modalDesc.textContent = 'Acceso y cotización institucional para rectores y coordinadores.';
        if (fieldSchoolWrapper) fieldSchoolWrapper.style.display = 'block';
      } else if (currentRole === 'padre') {
        if (modalDesc) modalDesc.textContent = 'Portal de seguimiento y asesoría vocacional para familias.';
        if (fieldSchoolWrapper) fieldSchoolWrapper.style.display = 'none';
      } else if (currentRole === 'docente') {
        if (modalDesc) modalDesc.textContent = 'Herramientas pedagógicas y banco de preguntas para docentes.';
        if (fieldSchoolWrapper) fieldSchoolWrapper.style.display = 'none';
      } else {
        if (modalDesc) modalDesc.textContent = 'Acceso a simulacros calibrados de 254 preguntas y tutor con IA.';
        if (fieldSchoolWrapper) fieldSchoolWrapper.style.display = 'none';
      }
    }
  }

  // Mode tab switching
  modeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      modeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentMode = tab.getAttribute('data-mode') || 'register';
      updateFormState();
    });
  });

  // Role pill buttons in modal
  roleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      roleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentRole = btn.getAttribute('data-role') || 'estudiante';
      if (roleInput) roleInput.value = currentRole;
      updateFormState();
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
      const requestedMode = btn.getAttribute('data-modal-mode');
      if (requestedMode && ['login', 'register'].includes(requestedMode)) {
        currentMode = requestedMode;
        modeTabs.forEach(tab => {
          if (tab.getAttribute('data-mode') === currentMode) tab.classList.add('active');
          else tab.classList.remove('active');
        });
        updateFormState();
      }

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

  // Form submission handler
  const leadForm = document.getElementById('modal-lead-form');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = leadForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<span>Procesando...</span>`;
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.innerHTML = `<span>Solicitud Recibida con Exito</span>`;
          submitBtn.style.background = '#10B981';

          setTimeout(() => {
            closeModal();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = '';
            leadForm.reset();
          }, 1800);
        }, 1000);
      }
    });
  }

  return { closeModal, updateFormState };
}
