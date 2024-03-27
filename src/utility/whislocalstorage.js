const getStoredWishList = () =>{
    const storedWishlist = localStorage.getItem('wishlist-books')
    if(storedWishlist){
        return JSON.parse(storedWishlist)
    }
    return [];
}
const saveWishlistData = id => {
 const storedWishlist = getStoredWishList();
 const exist = storedWishlist.find(bookId => bookId === id)
 if(!exist){
    storedWishlist.push(id)
    localStorage.setItem('wishlist-books', JSON.stringify(storedWishlist))
 }
}

export {getStoredWishList, saveWishlistData}