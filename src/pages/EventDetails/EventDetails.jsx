import { useLoaderData, useParams, Link } from "react-router-dom";

const EventDetails = () => {
  const events = useLoaderData();
  const { id } = useParams();
  console.log(id);
  console.log(events);

  const event = events.find((card) => card.id == id);

  const {
    event_type,
    thumbnail,
    price,
    description,
    capacity,
    registration_deadline,
    refund_deadline,
    features,
    details,
  } = event;

  return (
    <div className="w-full lg:w-4/5 mx-auto p-5 lg:p-10 space-y-10 rounded-xl shadow-xl bg-stone-200">
      <h1 className="text-center text-7xl text-blue-900 font-extrabold">
        {event_type}
      </h1>
      <img
        src={thumbnail}
        alt=""
        className="w-4/5 mx-auto"
      />
      <p className="text-2xl font-medium text-justify">{details}</p>
      <p className="text-3xl font-bold">Capacity: {capacity}</p>
      <p className="text-3xl font-bold">Price: {price}</p>
      <h2 className="text-2xl font-semibold">Features</h2>
      <ul className="text-xl list-decimal space-y-2">
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <div className="flex flex-col lg:flex-row justify-between items-center text-3xl font-medium">
        <h2>Booking Deadline: {registration_deadline}</h2>
        <h2>Refund Deadline: {refund_deadline}</h2>
      </div>
      <Link
        to="/booking"
        className="flex  justify-center items-center"
      >
        <button className="btn btn-secondary ">Book Now</button>
      </Link>
    </div>
  );
};

export default EventDetails;
