import EventCard from "../EventCard/EventCard";
import PropTypes from "prop-types";

const EventCards = ({ events }) => {
  return (
    <div className="mb-10">
      <h2 className="text-5xl font-bold text-center my-10 text-blue-900">Our Services</h2>
      <div className="space-y-10">
        {events.map((event) => (
          <div key={event.id}>
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};

EventCards.propTypes = {
  events: PropTypes.array,
};

export default EventCards;
