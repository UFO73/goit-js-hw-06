const categories = document.querySelector("#categories");

const categoriesLength = categories.children.length;
console.log(`Number of categories: ${categoriesLength}`)
console.log('')

const resalt = [...categories.children].forEach(item => {
    console.log('Category:', item.firstElementChild.innerHTML)
    console.log('Category:', item.lastElementChild.children.length)
    console.log('')
})

