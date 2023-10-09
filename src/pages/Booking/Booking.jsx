import toast from "react-hot-toast";

const Booking = () => {
  const handleBooking = (e) => {
    e.preventDefault();
    toast.success("Booking Successful");
  };

  return (
    <div>
      <h2 className="text-center text-6xl ">Confirm Your Booking Now</h2>
      <form
        action=""
        className="w-full bg-sky-100 my-10 space-y-5 lg:p-10 p-5 rounded-xl shadow-xl card lg:w-3/5 mx-auto"
        onSubmit={handleBooking}
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Choose Your Event</span>
          </label>
          <select className="select select-bordered">
            <option
              disabled
              selected
            >
              Events
            </option>
            <option>Seminar</option>
            <option>Trade Expo</option>
            <option>Team Building Workshop</option>
            <option>Corporate Meeting</option>
            <option>Product Launches</option>
            <option>Award Ceremonies</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Contact Details</span>
          </label>
          <input
            type="text"
            placeholder="contact"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Expected Number of Guest</span>
          </label>
          <input
            type="number"
            placeholder="Guest Quantity"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Additional Request</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Additional Request"
          ></textarea>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Agree to the terms and Condition</span>
            <input
              type="checkbox"
              name="term"
              className="checkbox"
            />
          </label>
        </div>
        <div className="flex justify-center items-center">
          <button className={`btn btn-primary w-max`}>Booking Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
