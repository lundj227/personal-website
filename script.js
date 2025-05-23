// JavaScript for collapsible sections on Jack Lund's personal site
document.addEventListener('DOMContentLoaded', function() {
  // Select all collapsible sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    const title = section.querySelector('.section-title');
    const content = section.querySelector('.section-content');
    if (!title || !content) return;  // Skip if structure is missing
    // Toggle section on title click
    title.addEventListener('click', () => {
      if (section.classList.contains('open')) {
        // Collapse the section
        section.classList.remove('open');
      } else {
        // Expand the section
        section.classList.add('open');
      }
    });
  });
});
