import { BsGlobe } from "react-icons/bs";
import {IoTicketSharp} from "react-icons/io5"
import {FaUsers} from "react-icons/fa6"
import {MdPrivacyTip} from "react-icons/md"
import {VscFeedback} from "react-icons/vsc"
import {RiCustomerService2Fill} from "react-icons/ri"

const WhyChooseUs = () => {
  return (
    <div className="bg-red-700 py-8  text-center ">
    <h1 className="text-sky-400 font-bold my-6 text-5xl">Why Choose Us?</h1>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 w-11/12 mx-auto">
        <div className="flex w-72 flex-col justify-center items-center gap-2 text-center text-white">
          <p>
            <BsGlobe className="text-3xl" />
          </p>
          <h2 className="text-2xl font-medium"> Diverse Event Portfolio</h2>
          <p className="text-lg text-justify">
            Explore a wide range of events to find the perfect match for your
            interests and goals.
          </p>
        </div>

        <div className="flex w-72 flex-col justify-center items-center gap-2 text-center text-white">
          <p>
            <FaUsers className="text-3xl" />
          </p>
          <h2 className="text-2xl font-medium">User-Centric Experience</h2>
          <p className="text-lg text-justify">
          Benefit from a user-friendly platform, personalized event recommendations, and responsive customer support
          </p>
        </div>

        <div className="flex w-72 flex-col justify-center items-center gap-2 text-center text-white">
          <p>
            <IoTicketSharp className="text-3xl" />
          </p>
          <h2 className="text-2xl font-medium">  Seamless Registration and Ticketing</h2>
          <p className="text-lg text-justify">
          Enjoy a hassle-free experience with easy event registration and secure ticketing options
          </p>
        </div>

        <div className="flex w-72 flex-col justify-center items-center gap-2 text-center text-white">
          <p>
            <MdPrivacyTip className="text-3xl" />
          </p>
          <h2 className="text-2xl font-medium"> Trusted Security and Privacy</h2>
          <p className="text-lg text-justify">
          Rest easy with secure payment processing and robust data privacy practices.
          </p>
        </div>

        <div className="flex w-72 flex-col justify-center items-center gap-2 text-center text-white">
          <p>
            <VscFeedback className="text-3xl" />
          </p>
          <h2 className="text-2xl font-medium"> Attendee Feedback and Reviews</h2>
          <p className="text-lg text-justify">
          Make informed decisions based on real attendee feedback and event ratings.
          </p>
        </div>

        <div className="flex w-72 flex-col justify-center items-center gap-2 text-center text-white">
          <p>
            <RiCustomerService2Fill className="text-3xl" />
          </p>
          <h2 className="text-2xl font-medium"> Customer Support</h2>
          <p className="text-lg text-justify">
          Responsive customer support dedicated to assisting you promptly and effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
