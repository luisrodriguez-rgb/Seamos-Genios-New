/**
 * SEAMOS GENIOS - MULTI-ROLE GUIDE & INTERACTIVE HUB (v3.0)
 * Seamless tab switching between Estudiante, Colegio, Familia, Docente
 */

export function initRoleGuide() {
  const roleSelectBtns = document.querySelectorAll('.role-select-btn');
  const rolePanels = document.querySelectorAll('.role-panel');

  function switchRole(targetRole) {
    // Update active button
    roleSelectBtns.forEach(btn => {
      const role = btn.getAttribute('data-role');
      if (role === targetRole) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });

    // Update active panel
    rolePanels.forEach(panel => {
      const panelRole = panel.getAttribute('data-role-panel');
      if (panelRole === targetRole) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    // Update hero helper if present
    const heroRoleText = document.getElementById('hero-role-helper-text');
    if (heroRoleText) {
      if (targetRole === 'estudiante') {
        heroRoleText.textContent = 'Modo Estudiante: Simulacros reales, tutoría con IA y meta de 400+ puntos.';
      } else if (targetRole === 'colegio') {
        heroRoleText.textContent = 'Modo Colegio: Dashboard institucional, analítica por salón y Facturación DIAN.';
      } else if (targetRole === 'padre') {
        heroRoleText.textContent = 'Modo Familia: Reportes quincenales por WhatsApp y acompañamiento seguro.';
      } else if (targetRole === 'docente') {
        heroRoleText.textContent = 'Modo Docente: Banco de preguntas ICFES y analítica de brechas de aprendizaje.';
      }
    }
  }

  // Click handler on role buttons
  roleSelectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const role = btn.getAttribute('data-role');
      if (role) {
        switchRole(role);
      }
    });
  });

  // Support for role anchor buttons in Hero or Navbar (e.g. data-jump-role="colegio")
  document.querySelectorAll('[data-jump-role]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const role = btn.getAttribute('data-jump-role');
      if (role) {
        switchRole(role);
        const hubSection = document.getElementById('experiencia-roles');
        if (hubSection) {
          hubSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Support deep linking via URL hash: #estudiante, #colegio, #padre, #docente
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (['estudiante', 'colegio', 'padre', 'docente'].includes(hash)) {
    switchRole(hash);
  }
}
