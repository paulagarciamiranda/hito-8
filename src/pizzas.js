import margaritaImage from './assets/img/margarita.jpg';
import pepperoniImage from './assets/img/pepperoni.jpg';
import veggieImage from './assets/img/veggie.jpeg';
import napolitanaiImage from './assets/img/napolitana.jpg';
import pestoImage from './assets/img/pesto.jpg';


const pizzas = [
    {
      id: Date.now,
      name: 'Margarita',
      price: 8000,
      ingredients: ['Tomate', 'Mozzarella', 'Albahaca'],
      image: margaritaImage
    },
    {
      id: 2,
      name: 'Pepperoni',
      price: 8500,
      ingredients: ['Tomate', 'Mozzarella', 'Pepperoni'],
      image: pepperoniImage
    },
    {
        id: 3,
        name: 'Veggie',
        price: 8500,
        ingredients: ['Tomate', 'Queso veggie', 'Champiñones', 'Aceitunas'],
        image: veggieImage
      },
      {
        id: 4,
        name: 'Napolitana',
        price: 8500,
        ingredients: ['Tomate', 'Mozzarella', 'Jamón'],
        image: napolitanaiImage
      },
      {
        id: 5,
        name: 'Pesto',
        price: 8500,
        ingredients: ['Tomate', 'Ricota', 'Pesto'],
        image: pestoImage
      },
  
  ];
  
  const pizzaCart = [
    { id: 1, name: 'Margarita', price: 8000, quantity: 1 },
    { id: 2, name: 'Pepperoni', price: 8500, quantity: 2 },
  ];
  
  export { pizzas, pizzaCart };