const accordionItems = document.querySelectorAll('.accordion-item');

function toggleAccordion() {
  this.classList.toggle('active');
  const accordionContent = this.nextElementSibling;
  if (accordionContent.style.display === 'flex') {
    accordionContent.style.display = 'none';
    this.style.cursor = 'pointer';
  } else {
    accordionContent.style.display = 'flex';
    this.style.cursor = 'pointer';
  }
}

accordionItems.forEach(item => {
  const accordionHeader = item.querySelector('.accordion-header');
  accordionHeader.addEventListener('click', toggleAccordion);
  accordionHeader.style.cursor = 'pointer';
});
