// Toggle collapsible sections on title button click
document.querySelectorAll('.section-title').forEach(button => {
    button.addEventListener('click', () => {
      const section = button.closest('.section');
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      // Flip aria-expanded value and toggle the section's open class
      button.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
      section.classList.toggle('open');
    });
  });
  