const listItem = document.querySelector('li')
listItem.style.backgroundColor = 'green'

const listItems = document.querySelectorAll('li')
console.log(listItems)
listItems[0].style.backgroundColor= 'rgb(195,225,253)'
listItems[0].style.color= 'red'

const uList = document.querySelector('ul')
uList.style.listStyle= 'square'

listItems.forEach((item)=>{
    item.style.backgroundColor='rgb(195,225,253)'
    item.innerText = 'HI'
})