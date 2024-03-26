

const ListedBooks = () => {
    return (
        <div>
          <div className="w-full bg-green-100 rounded-3xl h-auto md:p-10 p-7 lg:p-10 text-center mt-7">
            <h1 className="font-work text-black text-3xl font-bold">Books</h1></div>
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
    
  </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Book" checked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"></div>


</div>
 </div>

        </div>
    );
};

export default ListedBooks;