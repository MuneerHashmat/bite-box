/* ****************************************************************************************************************************************

Note: This is a modified flowbite ui footer block

**************************************************************************************************************************************** */

import assets from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-200 mt-10">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-4 md:gap-8 px-4 pt-6 pb-3 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-black">
              Company
            </h2>
            <ul className="text-gray-900 dark:text-gray-700 font-medium">
              <li className="mb-1">
                <a href="#" className=" hover:underline">
                  About
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Brand Center
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-black">
              Help center
            </h2>
            <ul className="text-gray-900 dark:text-gray-700 font-medium">
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Discord Server
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-black">
              Legal
            </h2>
            <ul className="text-gray-900 dark:text-gray-700 font-medium">
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-black">
              Download
            </h2>
            <ul className="text-gray-900 dark:text-gray-700 font-medium">
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  iOS
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Android
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  Windows
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">
                  MacOS
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 pb-4 bg-gray-100 dark:bg-gray-200 md:flex md:items-center md:justify-between text-lg">
          <span className="text-lg text-gray-900 dark:text-gray-700 sm:text-center">
            © <a href="#">BiteBox™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse text-lg">
            <a href="#">
              {" "}
              <img
                src={assets.facebook}
                alt=""
                className="w-[25px] hover:scale-105 transition-all"
              />{" "}
            </a>
            <a href="#">
              {" "}
              <img
                src={assets.twitter}
                alt=""
                className="w-[25px] hover:scale-105 transition-all"
              />{" "}
            </a>
            <a href="#">
              {" "}
              <img
                src={assets.discord}
                alt=""
                className="w-[25px] hover:scale-105 transition-all"
              />{" "}
            </a>
            <a href="#">
              {" "}
              <img
                src={assets.linkedin}
                alt=""
                className="w-[25px] hover:scale-105 transition-all"
              />{" "}
            </a>
            <a href="#">
              {" "}
              <img
                src={assets.github}
                alt=""
                className="w-[25px] hover:scale-105 transition-all"
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
