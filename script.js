const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const pagesInput = document.querySelector('#pages')
const button = document.querySelector('#submit')
const bookList = document.querySelector('#book-list')


button.addEventListener('click' , function (e){
    e.preventDefault();
if (titleInput.value == "" && authorInput.value == "" &&pagesInput.value == "" ) {
    alert ("Enter some value")
} else if (titleInput.value == ""){
    alert ("Enter book\'s title")
}else if (authorInput.value == ""){
    alert ("Enter Author\'s name")
}else if (pagesInput.value == ""){
    alert ("Enter number of pages")
}else {
    const bookListRow = document.createElement("tr")

    const newTitle = document.createElement("th")
    newTitle.innerHTML = titleInput.value
    bookListRow.appendChild(newTitle)

    const newAuthor = document.createElement("th")
    newAuthor.innerHTML = authorInput.value
    bookListRow.appendChild(newAuthor)

    const newPagesInput = document.createElement("th")
    newPagesInput.innerHTML = pagesInput.value
    bookListRow.appendChild(newPagesInput)

    const newDeleteBtn = document.createElement("th")
    const  newDeleteBtn1= document.createElement("button")
    newDeleteBtn1.innerHTML = "Delete"
    bookListRow.appendChild(newDeleteBtn1)

    bookList.appendChild(bookListRow)

    newDeleteBtn1.onclick = () => {
        const myButton = document.getElementsByName("newDeleteBtn1");
        bookListRow.textContent = '';
      }
}



titleInput.value = ""
authorInput.value = ""
pagesInput.value = ""
})


