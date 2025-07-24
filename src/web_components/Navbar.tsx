import { Github, Home, Phone, Store } from "lucide-react";

const Navbar = () => {
  return (
    <div className="sticky top-0 md:top-4 z-1000 lg:relative lg:grid lg:grid-cols-2">
      <div className="hidden lg:block"></div>
      <div className="flex justify-end lg:justify-start py-4 px-4 sm:px-8 lg:px-0">
        <div className="lg:flex lg:items-center lg:justify-between lg:w-full lg:pr-[8%]">
          <ul className="flex items-center gap-4 2xl:gap-6 p-2 rounded-lg border-1 bg-[#f5f5f5] border-black">
            <li>
              <a href="#home" className="py-2">
                <Home />
              </a>
            </li>
            <li>
              <a href="#store">
                <Store />
              </a>
            </li>
            <li>
              <a href="#contact">
                <Phone />
              </a>
            </li>
          </ul>
          <div className="hidden lg:block">
            <ul className="p-2 rounded-lg border-1 bg-[#f5f5f5] border-black">
              <li>
                <a
                  href="https://github.com/Djordannn"
                  target="_blank"
                  className="py-2"
                >
                  <Github />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
