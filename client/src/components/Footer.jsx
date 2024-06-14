import { Link } from "react-router-dom";
import { Footer as FlowbiteFooter } from "flowbite-react";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <FlowbiteFooter container className=" border-t-4 border-teal-500 py-8">
      <div className="w-full text-center">
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <Link
            to="/"
            className="text-lg font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient mb-4 md:mb-0"
          >
            Majid Ali
          </Link>

          <div className="flex flex-col md:flex-row md:space-x-10 mb-4 md:mb-0">
            <div className="mb-4 md:mb-0 pr-8">
              <FlowbiteFooter.Title title="About" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href="/about">About</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="#">Majid Blog</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div className="mb-4 md:mb-0">
              <FlowbiteFooter.Title title="Follow Us" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href="https://github.com/MajidJOkhoi">GitHub</FlowbiteFooter.Link>
                <FlowbiteFooter.Link href="https://www.linkedin.com/in/majidali513/">LinkedIn</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
            <div className="mb-4 md:mb-0">
              <FlowbiteFooter.Title title="Privacy Policy" className="ml-2" />
              <FlowbiteFooter.LinkGroup col>
                <FlowbiteFooter.Link href="#">Privacy Policy</FlowbiteFooter.Link>
              </FlowbiteFooter.LinkGroup>
            </div>
          </div>
        </div>
        <FlowbiteFooter.Divider className="my-4" />
        <div className="w-full flex flex-col items-center">
          <FlowbiteFooter.Copyright href="#" by="Professor" year={2024} />
          <div className="flex space-x-6 mt-4">
            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
              <BsTwitter className="w-6 h-6 mr-2 text-gray-500 hover:text-gray-900" />
            </a>
            <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
              <BsFacebook className="w-6 h-6 mr-2 text-gray-500 hover:text-gray-900" />
            </a>
            <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
              <BsInstagram className="w-6 h-6 mr-2 text-gray-500 hover:text-gray-900" />
            </a>
            <a href="https://github.com/MajidJOkhoi" target="_blank" rel="noopener noreferrer">
              <BsGithub className="w-6 h-6 mr-2 text-gray-500 hover:text-gray-900" />
            </a>
            <a href="https://www.linkedin.com/in/majidali513/" target="_blank" rel="noopener noreferrer">
              <BsLinkedin className="w-6 h-6 mr-2 text-gray-500 hover:text-gray-900" />
            </a>
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
};

export default Footer;
