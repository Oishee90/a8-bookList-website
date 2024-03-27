import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadData } from "../../utility/localstorage";
import { useEffect, useState } from "react";
import { saveWishlistData } from "../../utility/whislocalstorage";



const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const [readBooks, setReadBooks] = useState([])
    const book = books.find(book => book.bookId === idInt)
    console.log(book)
    useEffect(() => {
        const storedReadBooks = JSON.parse(localStorage.getItem('readBooks'));
        if (storedReadBooks) {
          setReadBooks(storedReadBooks);
       
        }
      }, []);
    const handleReadClick = (id)=>{
        if (readBooks.includes(id)) {
            toast('Already read');
        } else {
            if(localStorage.getItem('readBooks')) {
                const storedReadBooks = JSON.parse(localStorage.getItem('readBooks'));
                if (storedReadBooks.includes(id)) {
                    toast('Already read');
                    return;
                }
            }
            saveReadData(id);
            setReadBooks([...readBooks, id]);
            toast('Successfully read');
        }
    }
  const handleWishlist  = (id) => {
    if (readBooks.includes(id)) {
        toast('Already read');
    }
    else{
        saveWishlistData(id)
        toast('Successfully read');

    }

  }
    
    return (
       
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 mt-6 mb-20 container mx-auto">
  <div className="bg-green-100 rounded-2xl">

      <img className=" items-center mt-10 mx-auto min-h-screen" src={book.image} alt="" />
 
    </div>
         <div className="flex flex-col gap-5 space-y-3 p-4"> 
            <h1 className="font-playfair text-4xl font-bold">{book.bookName}</h1>
            <p className='text-[#131313B3] font-medium text-xl font-work'>By : <span>{book.author}</span></p>
            <div className='border  h-0 border-gray-400 mt-4 '></div>
            <h2 className='font-work text-xl text-[#131313B3]'>{book.category}</h2>
            <div className='border  h-0 border-gray-400 mt-4 '></div>
            <p className='font-work text-base text-[#131313B3]'><span className="text-black font-bold">Review : </span>{book.review}</p>
            <div className='flex full gap-5 items-center mt-7'>
                <span  className="text-black font-bold">Tag</span>
       {book.tags.map((tag, index) => (
              <p key={index} className='text-green-600 font-work font-bold p-4 text-center bg-gray-100 rounded-2xl'>#{tag}</p>
            ))}
       </div>
       <div className='border  h-0 border-gray-400 mt-4 '></div>
       <div className="flex gap-10 ">
        <div className="flex flex-col gap-5">
        <h1 className="font-work text-[#131313B3]">Number Of pages: </h1>
        <h1 className="font-work text-[#131313B3]"> Publisher: </h1>
        <h1 className="font-work text-[#131313B3]">Year of Publishing: </h1>
        <h1 className="font-work text-[#131313B3]">Rating: </h1>
        </div>
        <div className="flex flex-col gap-5">
        <p className="text-[#131313] font-work font-semibold">{book.totalPages}</p>
        <p className="text-[#131313] font-work font-semibold">{book.publisher}</p>
        <p className="text-[#131313] font-work font-semibold">{book.yearOfPublishing}</p>
        <p className="text-[#131313] font-work font-semibold">{book.rating}</p>
        </div>
        </div>
        <div className=" flex gap-5">
        <button onClick={() => handleReadClick(book.bookId)} className="btn border text-lg text-black font-work font-semibold border-gray-500 px-8">Read</button>
        <ToastContainer />
        <button onClick={() => handleWishlist(book.bookId)} className="btn rounded-lg text-white font-work font-semibold hover:bg-blue-500 text-lg bg-[#50B1C9]">  Wishlist </button>
        </div>
         </div>
         </div>
       
    );
};

export default BookDetails;