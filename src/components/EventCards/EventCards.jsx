import EventCard from "../EventCard/EventCard";
import PropTypes from "prop-types";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const EventCards = ({ events }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mb-10">
      <h2 className="text-5xl font-bold text-center my-10 text-blue-900">
        Our Services
      </h2>
      <div className="space-y-10">
        {events.map((event) => (
          <div
            data-aos="fade-down"
            key={event.id}
          >
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
