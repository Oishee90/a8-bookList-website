const getStoredReadBook = () =>{
    const storedReadBook = localStorage.getItem('read-books')
    if(storedReadBook){
        return JSON.parse(storedReadBook)
    }
    return [];
}
const saveReadData = id => {
 const storedReadBook = getStoredReadBook();
 const exist = storedReadBook.find(bookId => bookId === id)
 if(!exist){
    storedReadBook.push(id)
    localStorage.setItem('read-books', JSON.stringify(storedReadBook))
 }
}

export {getStoredReadBook, saveReadData}