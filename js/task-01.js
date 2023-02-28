const categoriesEl = document.querySelectorAll('#categories > .item');

console.log('Number of categories: ' + categoriesEl.length);


categoriesEl.forEach((item) => { 
    console.log('Category: ' + item.firstElementChild.innerHTML);
    console.log('Elements: ' + item.lastElementChild.children.length);
});