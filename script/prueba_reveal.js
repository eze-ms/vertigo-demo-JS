const sr = ScrollReveal();


const categoryOptionsTitle = {
  delay: 50,
  distance: '50px',
  duration: 500,
  easing: 'ease-out',
  origin:'left',
};

const categoryOptionsTitle2 = {
  delay: 100,
  distance: '30px',
  duration: 500,
  easing: 'ease-out',
  origin:'left',
};


const categoryOptionsOne = {
  delay: 50,
  distance: '50px',
  duration: 1000,
  easing: 'ease-out',
  scale: 0.9,
};

const categoryOptionsTwo = {
  delay: 200,
  distance: '50px',
  duration: 1000,
  easing: 'ease-out',
  scale: 0.9,
};

const categoryOptionsThree = {
  delay: 300,
  distance: '50px',
  duration: 1000,
  easing: 'ease-out',
  scale: 0.9,
};

sr.reveal('.titulo_categorias, .titulo_categorias_salomon', categoryOptionsTitle);
sr.reveal('.box_collection, .box-button_fjallraven', categoryOptionsTitle2);
sr.reveal('.categ_1, .categ_4, .categ_7', categoryOptionsOne);
sr.reveal('.categ_2, .categ_5, .categ_8', categoryOptionsTwo);
sr.reveal('.categ_3, .categ_6', categoryOptionsThree);

