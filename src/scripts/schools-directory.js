/**
 * Partner schools directory filter & expandable list
 */
export function initSchoolsDirectory() {
  const toggleBtn = document.getElementById('btn-toggle-schools-dir');
  const dirPanel = document.getElementById('schools-dir-panel');
  const filterPills = document.querySelectorAll('.school-filter-pill');
  const searchInput = document.getElementById('school-search-input');
  const schoolCards = document.querySelectorAll('.school-dir-card');
  const emptyState = document.getElementById('schools-empty-state');

  if (!toggleBtn || !dirPanel) return;

  toggleBtn.addEventListener('click', function () {
    const isOpen = dirPanel.classList.toggle('active');
    toggleBtn.classList.toggle('active', isOpen);
    const textSpan = toggleBtn.querySelector('.toggle-text');
    if (textSpan) {
      textSpan.textContent = isOpen 
        ? 'Ocultar Directorio de Instituciones' 
        : 'Explorar las +60 Instituciones Aliadas por Departamento';
    }
  });

  let currentRegion = 'all';
  let currentSearch = '';

  function filterSchools() {
    let visibleCount = 0;

    schoolCards.forEach(card => {
      const cardRegion = card.getAttribute('data-region');
      const cardSearch = card.getAttribute('data-search') || '';

      const matchesRegion = (currentRegion === 'all' || cardRegion === currentRegion);
      const matchesSearch = (!currentSearch || cardSearch.includes(currentSearch));

      if (matchesRegion && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (emptyState) {
      emptyState.style.display = (visibleCount === 0) ? 'block' : 'none';
    }
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', function () {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentRegion = pill.getAttribute('data-filter');
      filterSchools();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      currentSearch = e.target.value.trim().toLowerCase();
      filterSchools();
    });
  }
}
