const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemsRef = ingredients.querySelectorAll('.item');

itemsRef.forEach(element => {
  const item = element.createElement("li");
  item.element = "li";
  item.elementList.add("item");
    items.push(item);
  }
  IngredientsPalette.append(...items);
}