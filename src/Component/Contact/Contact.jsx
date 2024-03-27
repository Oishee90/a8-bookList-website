

const Contact = () => {
    return (
        <div className="container mx-auto mt-7">
           <div className="hero rounded-2xl border border-gray-300 flex-col lg:flex-row min-h-screen bg-green-100   ">
  <div className="hero-content p-7 gap-5 lg:gap-10 flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact Us</h1>
      <p className="py-6 text-2xl font-bold font-playfair">Thank you for considering reaching out to us! We value your feedback, inquiries, and suggestions.</p>
      
      <h2 className="font-work text-gray-600 text-lg">Need to get in touch with us? You can either fill out the form below with your inquiry, or use the contact information provided.Our team strives to respond promptly to all messages, typically within 24-48 hours during business days. We are passionate about books and providing exceptional service to our customers. Your satisfaction is our priority!</h2>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
    <div className="grid grid-cols-2 gap-3 items-center justify-center">
    <div className="form-control">
          <label className="label">
            <span className="label-text font-playfair text-xl font-bold">First Name</span>
          </label>
          <input type="text" placeholder="First Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-playfair text-xl  font-bold">Last Name</span>
          </label>
          <input type="text" placeholder="Last Name" className="input input-bordered" required />
        </div>
    </div>
    <div className="form-control">
          <label className="label">
            <span className="label-text font-playfair text-xl font-bold">Phone Number</span>
          </label>
          <input type="tell" placeholder="Phone Number" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-playfair text-xl font-bold">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-playfair text-xl font-bold">What can we help you with?</span>
          </label>
          <textarea className="textarea textarea-accent" placeholder=""></textarea>
        </div>
       
        <div className="form-control mt-6">
          <button className="btn text-xl btn-success text-white">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Contact;