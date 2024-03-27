import { getStoredReadBook } from "../../utility/localstorage";
import { useLoaderData } from "react-router-dom"
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

import PropTypes from 'prop-types';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
    const books = useLoaderData()
    const [readBooks, setReadBooks] = useState([]);
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
     
    
    
console.log(readBooks)

    return (
       
        <div  className="container mx-auto items-center mt-7 pb-7 ">
         <div className="p-10 bg-gray-100  ">
         <ResponsiveContainer  height={400}>
           <BarChart className="text-xs "
              
              
              data={readBooks} // Use readBooks as data
              margin={{
                top: 20,
                right: 0,
                left: 0,
                bottom: 5,
              }
              
            }
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis className="lg:text-base md:text-xs text-xs " dataKey="bookName"
          
              /> {/* Assuming bookName is the property representing book names */}
              <YAxis />
              <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {readBooks.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
          
            </BarChart>
           
            </ResponsiveContainer>
         </div>
           
        </div>
       
    );
};
TriangleBar.propTypes = {
    fill: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
   
  };
export default PagesToRead;