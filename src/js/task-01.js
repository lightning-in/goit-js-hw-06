const itemsRef = document.querySelectorAll('.item');

itemsRef.forEach(element => {
    const categoriesLength = element.querySelectorAll('h2').length;
    console.log(`Number of categories: ${categoriesLength}`);
    console.log(element.firstElementChild.textContent);
    console.log(element.lastElementChild.children.length);
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
   });
