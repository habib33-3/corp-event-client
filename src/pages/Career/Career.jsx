import toast from "react-hot-toast";

const Career = () => {
  const handleApply = (e) => {
    e.preventDefault();
    toast.success("Applied Successfully");
  };

  return (
    <div>
      <h1 className="text-center text-5xl font-bold text-blue-800 rounded-xl">
        Join Us
      </h1>
      <div className="w-full lg:w-2/5 mx-auto bg-sky-100 p-5 my-3">
        <form
          action=""
          onSubmit={handleApply}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="number"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Desired Position</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload Resume</span>
            </label>
            <input
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button
            type="submit"
            className="btn btn-success w-full mt-5"
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default Career;
