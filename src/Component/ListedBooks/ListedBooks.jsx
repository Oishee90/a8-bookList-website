import { CiLocationOn } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { MdOutlineFindInPage } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredReadBook } from "../../utility/localstorage";
import { getStoredWishList } from "../../utility/whislocalstorage";


const ListedBooks = () => {
  const books = useLoaderData()
  const [readBooks, setReadBooks] = useState([]);
  const [wishBooks, setwishBooks] = useState([]);
  
  useEffect(() => {
     const storedata = getStoredReadBook();
     if(books.length > 0 ){
       const bookRead = [];
       for (const id of storedata){
        const book = books.find(book => book.bookId ===  parseInt(id))
        if(book){
          bookRead.push(book)
        }
       }
       setReadBooks(bookRead)
      //  console.log(books,storedata,bookRead)
     }
  },[])
  
  useEffect(() => {
    const storewish = getStoredWishList();
    if (books.length > 0) {
      const bookWish = [];
      for (const id of storewish) {
        const book = books.find(book => book.bookId === parseInt(id));
        if (book) {
          bookWish.push(book);
        }
      }
      setwishBooks(bookWish)
      console.log(books,storewish,bookWish)
    }
  }, []);
    return (
        <div className="container mx-auto">
          <div className="w-full bg-green-100 rounded-3xl h-auto md:p-10 p-7 lg:p-10 text-center mt-7">
            <h1 className="font-work text-black text-3xl font-bold">Books </h1></div>
            {/* select */}
            <div className="mt-6 text-center">
   <select className="m-3 text-center py-5 rounded-xl border-none px-6
    hover:bg-green-900 bg-green-600 text-white font-work text-xl font-bold">

  <option disabled selected className=" rounded-xl" >Sort By</option>
  <option className="bg-gray-200 text-black font-work text-xl font-bold">Rating</option>
  <option  className="bg-gray-200 text-black font-work text-xl font-bold"> Number of pages</option>
  <option  className="bg-gray-200 text-black font-work text-xl font-bold">  Publisher year</option>
</select></div>
{/* tab */}
 <div className="mt-6">
 <div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    <div className="border border-gray-400 rounded-2xl">
    <div className="grid grid-rows-1 gap-7">
{
  readBooks.map((readBook,index) => 
    <div key={index} className="card gap-5 card-side bg-base-100 shadow-xl p-4">
  <div className="p-4 w-1/4 rounded-2xl bg-green-100 "><img className="w-auto mt-20 mb-10 h-40 mx-auto" src={readBook.image} alt="Movie"/></div>
  <div className="card-body mr-6 flex flex-col gap-5 space-y-3 p-4">
    <h2 className="card-title">{readBook.bookName}</h2>
    <p className='text-[#131313B3] font-medium text-xl font-work'>By : <span>{readBook.author}</span></p>
    <div className='flex full gap-5 items-center mt-7'>
                <span  className="text-black font-bold">Tag</span>
       {readBook.tags.map((tag, index) => (
              <p key={index} className='text-green-600 font-work font-bold p-4 text-center bg-gray-100 rounded-2xl'>#{tag}</p>
            ))}
              <div className="flex gap-3 items-center"><CiLocationOn className="h-6 w-6 font-bold" /> 
              <p className="font-work font-semibold text-lg text-[#131313B3]">Year of Publishing: <span>{readBook.yearOfPublishing}</span></p></div>
      
        </div>
        <div className="flex gap-10 items-center">
              <div className="flex gap-2 items-center"><BsPeople className="h-6 w-6 font-bold" /> 
              <p className="font-work font-semibold text-lg text-[#131313B3]"> Publisher:  <span>{readBook.publisher}</span></p></div>
              <div className="flex gap-2 items-center"><MdOutlineFindInPage className="h-6 w-6 font-bold" /> 
              <p className="font-work font-semibold text-lg text-[#131313B3]"> Page:  <span>{readBook.totalPages}</span></p></div>
              </div>

              <div className="flex items-center gap-5">
              <button className="btn rounded-full text-[#328EFF] font-work font-semibold hover:bg-blue-500 text-lg bg-[#328EFF26]">Category: {readBook.category}</button>
              <button className="btn rounded-full text-[#f6e5cc] font-work font-semibold hover:bg-yellow-500 text-lg bg-[#FFAC33]"> Rating: {readBook.rating} </button>
              <button className="btn rounded-full text-white font-work font-semibold hover:bg-green-900 text-lg bg-[#23BE0A]">View Details</button>

              </div>
  </div>
</div>)
}
</div>
</div>
  </div>
{/* whislist */}
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Book" checked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  <div className="border border-gray-400 rounded-2xl">
    <div className="grid grid-rows-1 gap-7">
{
  wishBooks.map((wishBook) => 
    <div key={wishBook.bookName} className="card gap-5 card-side bg-base-100 shadow-xl p-4">
  <div className="p-4 w-1/4 rounded-2xl bg-green-100 "><img className="w-auto mt-20 mb-10 h-40 mx-auto" src={wishBook.image} alt="Movie"/></div>
  <div className="card-body mr-6 flex flex-col gap-5 space-y-3 p-4">
    <h2 className="card-title">{wishBook.bookName}</h2>
    <p className='text-[#131313B3] font-medium text-xl font-work'>By : <span>{wishBook.author}</span></p>
    <div className='flex full gap-5 items-center mt-7'>
                <span  className="text-black font-bold">Tag</span>
       {wishBook.tags.map((tag, index) => (
              <p key={index} className='text-green-600 font-work font-bold p-4 text-center bg-gray-100 rounded-2xl'>#{tag}</p>
            ))}
              <div className="flex gap-3 items-center"><CiLocationOn className="h-6 w-6 font-bold" /> 
              <p className="font-work font-semibold text-lg text-[#131313B3]">Year of Publishing: <span>{wishBook.yearOfPublishing}</span></p></div>
      
        </div>
        <div className="flex gap-10 items-center">
              <div className="flex gap-2 items-center"><BsPeople className="h-6 w-6 font-bold" /> 
              <p className="font-work font-semibold text-lg text-[#131313B3]"> Publisher:  <span>{wishBook.publisher}</span></p></div>
              <div className="flex gap-2 items-center"><MdOutlineFindInPage className="h-6 w-6 font-bold" /> 
              <p className="font-work font-semibold text-lg text-[#131313B3]"> Page:  <span>{wishBook.totalPages}</span></p></div>
              </div>

              <div className="flex items-center gap-5">
              <button className="btn rounded-full text-[#328EFF] font-work font-semibold hover:bg-blue-500 text-lg bg-[#328EFF26]">Category: {wishBook.category}</button>
              <button className="btn rounded-full text-[#f6e5cc] font-work font-semibold hover:bg-yellow-500 text-lg bg-[#FFAC33]"> Rating: {wishBook.rating} </button>
              <button className="btn rounded-full text-white font-work font-semibold hover:bg-green-900 text-lg bg-[#23BE0A]">View Details</button>

              </div>
  </div>
</div>)
}
</div>
</div>
</div>
</div>
 </div>

        </div>
    );
};

export default ListedBooks;