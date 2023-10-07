import { BsFacebook, BsTwitter, BsInstagram ,BsFillCalendarCheckFill} from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-8 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col ">
         <BsFillCalendarCheckFill className="text-7xl"/>
         
        </aside>

         <p className="text-center p-8">Copyright © 2023 - All right reserved</p>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-4xl">
          <a>
            <BsFacebook />
          </a>
          <a>
            <BsTwitter />
          </a>
          <a>
            <BsInstagram />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
