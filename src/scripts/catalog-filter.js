/**
 * SEAMOS GENIOS - E-COMMERCE CATALOG FILTER (v3.0)
 * Filters products by Category: All, Simulacros, Planes, Colegios, Materiales
 */

export function initCatalogFilter() {
  const filterBtns = document.querySelectorAll('.catalog-filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  if (filterBtns.length === 0 || productCards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter') || 'all';

      productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-product-category') || 'all';
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = 'flex';
          card.style.animation = 'roleFadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
