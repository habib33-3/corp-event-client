const AboutUs = () => {
  return (
    <div className="text-center bg-teal-100 space-y-4 p-4 w-11/12 mx-auto rounded-sm">
      <h1 className="text-4xl text-indigo-800 font-extrabold">About Us</h1>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="flex-1 p-4">
          <p className="text-justify text-gray-700 text-xl">
            At <span className="font-bold ">CorpEvent</span>, we{"'"}re
            passionate about bringing people together through memorable events.
            With a diverse portfolio of engaging gatherings and a commitment to
            user-centric experiences, we{"'"}re your trusted partner in event
            discovery, registration, and participation. Our dedicated team
            ensures seamless event management, while our strong emphasis on
            security and user privacy keeps your information safe. Join us in
            celebrating the power of events and become a part of our vibrant and
            inclusive event community.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="/team.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
