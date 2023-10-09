import PropTypes from "prop-types";

const EventCard = ({ event }) => {
  const { event_type, thumbnail, price, description } = event;

  return (
    <div className="w-full lg:w-4/5 mx-auto flex flex-col justify-center gap-10 lg:flex-row-reverse p-5 bg-indigo-100 shadow-xl rounded-lg">
      <img
        src={thumbnail}
        alt=""
        className="w-96 rounded-sm"
      />
      <div className="flex-1 space-y-5">
        <h2 className="text-blue-900 text-center text-4xl">{event_type}</h2>

        <p className="text-gray-700 text-justify">{description}</p>
        <div className="flex justify-between items-center ">
          <p className="text-green-600 text-xl">Price: {price}</p>
          <button className="btn btn-accent bg-indigo-500 text-white">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.object,
};

export default EventCard;
