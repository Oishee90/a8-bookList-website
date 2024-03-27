import image from "../../assets/our-mission.jpg"
const About = () => {
    return (
        <div className="mt-10 container mx-auto ">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-4 rounded-lg   justify-center">
            <div className="w-full p-7"><img className="w-auto rounded-3xl" src={image} alt="" /></div>
            <div className="mt-4 space-y-8 ">
                <h1 className="text-left text-5xl font-playfair font-extrabold text-green-900">Our Mission</h1>
                <div ></div>
                <p className="text-2xl mt-5 font-playfair font-medium text-gray-700">Central to our mission is our commitment to customer happiness. We strive to create an exceptional shopping experience that exceeds expectations at every turn. From carefully curating our selection to providing personalized recommendations, we are dedicated to helping you discover the perfect book for every occasion.</p>
                </div>
            </div>   
        </div>
    );
};

export default About;