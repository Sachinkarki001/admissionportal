import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <div className="contact">
      <div className="flex-row p-4 bg-teal-700 text-xl font-bold text-white mt-0.5 h-auto items-center rounded-md">
        <h1 className="mb-2 text-center">Contact Us</h1>
        <div className="flex">
          <div className="mt-5 flex items-center w-1/2 ml-5 justify-center">
            <form class="w-full h-full mr-5">
              <div class="flex -mx-3 mb-4">
                <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-900rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-1">
                <div class="w-full px-3">
                  <textarea
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    id="message"
                    placeholder="MESSAGE"
                  ></textarea>
                </div>
              </div>
              <div class="md:flex md:items-center md:float-center items-center justify-center">
                <div class="items-center">
                  <button
                    class="shadow bg-blue-900 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-10 rounded-full"
                    type="button"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="p-4 w-1/2 items-center ml-5">
            <iframe
              width="600"
              height="360"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=515&height=285&hl=en&q=putalisadak%20Bagmati+(TheAdmissionPortal)&t=&z=12&ie=UTF8&iwloc=B&output=embed"
            ></iframe>
          </div>
        </div>
        <div className="flex-row flex-center items-center justify-center m-5">
          <div className="flex-row space-x-3 text-center items-center font-sb text-lg">
            <ul>
              <li>
                <FontAwesomeIcon icon={faLocationArrow} />
                {"       Putalisadak, Kathmandu-4460, Nepal"}
              </li>
              <li>
                <FontAwesomeIcon icon={faMailBulk} />
                {"       TheAdmissionPortal@gmail.com"}
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                {"   9847332929"}
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center mt-5">
            <a class="text-green-500 mx-5" href="www.facebook.com">
              <img
                className="text-sm font-normal  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300-900 w-10 h-10"
                src="/facebook.png"
                alt="facebook icon"
              ></img>
            </a>
            <a class="text-green-500 mx-5" href="#">
              <img
                className="text-sm font-normal  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300-900 w-11 h-11"
                src="/instagram.png"
                alt="instagram icon"
              ></img>
            </a>
            <a class="text-green-500 mx-5" href="#">
              <img
                className="text-sm font-normal  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300-900 w-11 h-11"
                src="/twitter.png"
                alt="twitter icon"
              ></img>
            </a>
            <a class="text-green-500 mx-5" href="#">
              <img
                className="text-sm font-normal  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300-900 w-10 h-10"
                src="/linkedin.png"
                alt="linkedin icon"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
