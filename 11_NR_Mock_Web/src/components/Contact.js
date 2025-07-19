const Contact = () => {
  return (
    <div className="mt-28 max-w-screen-lg mb-40">
      <div className="flex items-center justify-center mb-20">
        <h1>Contact us</h1>
      </div>
      <div className="grid justify-center">
        <div className="flex">
          <label className="mr-11 p-1 m-2">Enter your Name: </label>
          <input type="text" className="border border-slate-600" required />
        </div>
        <br />
        <div className="flex">
          <label className="mr-6 p-1 m-2">Enter your Message: </label>
          <input type="text" className="border border-slate-600 " required />
        </div>
        <button
          type="submit"
          className="p-2 mt-10 bg-blue-500 rounded-md text-white font-bold hover:bg-blue-700"
        >
          Submit
        </button>
      </div>

      {console.log("gg")}
    </div>
  );
};
export default Contact;
