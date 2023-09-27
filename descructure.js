const book = {isbn:'123213',title:'Introduction to JS',
                author:{firstname:'taspol',lastname:'Thuanchamnan'},
                book_publisher:{name:'luckpim',location:'TH'}}

//store property to new variable
const {title} = book // equally to const title =book.title
const {isbn , book_publisher} = book

console.log(title)
console.log(isbn,book_publisher)