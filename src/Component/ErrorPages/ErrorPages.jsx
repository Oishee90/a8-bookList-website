import { Link } from "react-router-dom";


const ErrorPages = () => {
    return (
        <div className="container mx-auto mt-7" >
            <div className="flex  gap-5 space-y-3 flex-col min-h-screen justify-center items-center text-center mx-auto mt-10  rounded-3xl shadow-md p-10 bg-gray-200">
           <h2 className="text-5xl text-red-900 font-extrabold font-playfair">Oooopps!!</h2> 
           <h1 className="text-2xl text-red-900 font-bold font-playfair">Something Went Wrong</h1> 
          <Link to={"/"}><button className="btn btn-outline px-7  btn-error ">Back To Home Page</button></Link>
           </div>
        </div>
    );
};

export default ErrorPages;