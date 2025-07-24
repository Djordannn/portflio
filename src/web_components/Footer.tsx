import { Instagram, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className="py-14">
        <ul className="flex gap-4 justify-center">
          <li>
            <a
              href="https://www.instagram.com/djorealee_"
              target="_blank"
              className="2xl:text-lg"
            >
              <Instagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/m-djordan-41a893351"
              target="_blank"
              className="2xl:text-lg"
            >
              <Linkedin />
            </a>
          </li>
          <li>
            <a
              href="mailto:djordannwork@gmail.com"
              target="_blank"
              className="2xl:text-lg"
            >
              <Mail />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Djordannn"
              target="_blank"
              className="2xl:text-lg"
            >
              <Github />
            </a>
          </li>
        </ul>
        {/* <div className="mx-auto border-1 border-black w-[20%] lg:w-[10%] rounded-full mt-2"></div> */}
      </div>
    </div>
  );
};

export default Footer;
