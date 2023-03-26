const categories = document.querySelector("#categories");
const totalItem = categories.querySelectorAll(".item").length

const firstItem = categories.children[0];
const firstItemTitle = firstItem.querySelector('h2').textContent
const totalFirstItem = firstItem.querySelectorAll('li').length

const secondItem = categories.children[1];
const secondItemTitle = secondItem.querySelector('h2').textContent
const totalSecondItem = secondItem.querySelectorAll('li').length

const thirdItem = categories.children[2];
const thirdItemTitle = thirdItem.querySelector('h2').textContent
const totalThirdItem = thirdItem.querySelectorAll('li').length

console.log(`Number of categories: ${totalItem}`)
console.log('')
console.log(`Category: ${firstItemTitle}`)
console.log(`Elements: ${totalFirstItem}`)
console.log('')
console.log(`Category: ${secondItemTitle}`)
console.log(`Elements: ${totalSecondItem}`)
console.log('')
console.log(`Category: ${thirdItemTitle}`)
console.log(`Elements: ${totalThirdItem}`)