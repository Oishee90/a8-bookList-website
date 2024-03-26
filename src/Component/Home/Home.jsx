import { Link } from 'react-router-dom';
import image from '../../assets/1159-removebg-preview.png';
import retting from '../../assets/ratting.png'

import { useEffect, useState } from 'react';

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/fakeData.json")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);
    return (
     
        <div className="container mx-auto">
          <section className="banner mt-7 container">
          <div className="hero bg-green-100 rounded-3xl ">
  <div className="hero-content flex-col lg:flex-row-reverse w-full rounded-3xl justify-center items-center gap-3">
  <img src={image} className="w-auto" alt="Description of the image" />

    <div className='w-full  ml-7 space-y-5 text-center lg:text-left md:text-center'>
      <div className='mb-5 space-y-5'>
        <h1 className="text-5xl lg:text-5xl md:text-3xl font-bold w-auto font-playfair text-black"> Books to freshen </h1>
      <h1 className="text-5xl lg:text-5xl  md:text-3xl font-bold w-auto font-playfair text-black">up your bookshelf </h1>
     </div>
     <Link to={"/listedBooks"}><button className="btn hover:bg-green-900 text-white text-xl font-work bg-green-600 px-6">View The List</button></Link>
    </div>
  </div>
</div>
          </section>
          {/* book section */}
          <section className='book mt-10'>
      <div className='mx-auto'>
        <h1 className='font-work text-3xl font-bold text-black text-center'>Books</h1>
      </div>

      
      
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-5'>
        {
          books.map(book =>  <Link key={book.bookId} to={`/../${book.bookId}`}> <div className="  card border-2 border-gray-600 bg-base-100 shadow-xl">
           <Link to={`/${book.id}`}></Link>
          <div className='p-10 '>
      <figure className="px-10 pt-10  rounded-2xl bg-green-100 p-10  ">
       <img src={book.image} alt="Shoes" className=" h-40" />
      </figure>
      </div>
      <div className="card-body  ">
       <div className='flex w-[195px]  gap-2 '>
       {book.tags.map((tag, index) => (
              <p key={index} className='text-green-600 font-work font-bold p-2 text-center bg-gray-100 rounded-2xl'>{tag}</p>
            ))}
       </div>
        <div className='flex flex-col gap-5 '>
          <h1 className='font-playfair text-2xl font-bold text-black'> {book.bookName}</h1>
        <p className='text-[#131313CC] font-medium text-base font-work'>By : <span>{book.author}</span></p></div>
        <div className='border border-dashed h-0 border-gray-400 mt-4 '></div>
    <div className='flex justify-between '>
      <div className='font-work  text-[#131313CC]'><h2>{book.category}</h2></div>
      <div className='flex gap-3'><p>{book.rating}</p> <img src={retting} alt="" /></div>
    </div>
      </div>
    </div>  </Link>)
   
        } 
       
      
      </div>
          </section>
        </div>
    );
};

export default Home;