import ReactStars from "react-rating-stars-component";
import Upload from "../upload";
import { collegeData } from "../data/data1";
import { AbcData } from "../data/118";



function Seventeen() {
  const ratingChanged = (newRating) => {
  console.log(newRating);
};
 return (
   <div className="flex items-center h-auto w-full py-1 mt-0.5">
     {AbcData.map((data, key) => {
       return (
         <div key={key}>
           <div className="bg-rose-700">
             <div className="items-center justify-center pb-24">
               <div className="bg-rose-700">
                 <img
                   className="object-scale-down w-full h-64 bg-teal-700 "
                   src={data.coverimage}
                 />
               </div>{" "}
               <div className="sticky w-[100%] bg-rose-700 z-10 rounded-xl">
                 <div className="con grid grid-cols-10 -mb-36 sm-no-x-padding gap-2">
                   <div className="lg:-mt-8 text-center col-span-2">
                     <img
                       className="h-48 w-48 mb-1 md:-mb-8 rounded-r-3xl md:shadow-xl p-4 md:bg-teal-600 content-fill"
                       src={data.logo}
                     />{" "}
                   </div>
                   <div className="org-title col-span-8">
                     <h1 className="text-white title-font text-xl md:text-4xl pb-1 md:pb-4 font-bold leading-5 py-4 z-20">
                       {data.Name}
                     </h1>
                     <div className="md:flex justify-between">
                       <div className="text-base md:text-xl text-white leading-5 mb-2">
                         <span>{data.location}</span>
                       </div>{" "}
                       <div className="flex-col justify-center -mt-11">
                         <ReactStars
                           count={5}
                           onChange={ratingChanged}
                           size={40}
                           isHalf={true}
                           emptyIcon={<i className="far fa-star"></i>}
                           halfIcon={<i className="fa fa-star-half-alt"></i>}
                           fullIcon={<i className="fa fa-star"></i>}
                           activeColor="#ffd700"
                           classNames="pl-20"
                         />
                         <Upload />
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="mt-24 hidden md:block shadow-xl">
               <div className="sticky org-left">
                 <ul className="flex flex-row py-4 rounded-r-xl text-m font-medium bg-rose-700 text-white items-center justify-evenly">
                   <li>
                     <a href="#about" className="hover-item detect">
                       About
                     </a>
                   </li>
                   <li>
                     <a href="#programs" className="hover-item detect">
                       Offered Programs
                     </a>
                   </li>
                   <li>
                     <a href="#message-principal-465" className="hover-item">
                       <span>
                         Message from the
                         <span className="capitalize"> Principal</span>
                       </span>
                     </a>
                   </li>
                   <li>
                     <a href="#map" className="hover-item">
                       Location
                     </a>
                   </li>
                 </ul>
               </div>
             </div>
             <div className="con org-detail md:grid bg-teal-700 items-center text-center">
               <div className="org-about text-justify text-white">
                 <div className="prose max-w-none"></div>{" "}
                 <div className="text-white">
                   <div className="content mt-4 text-center">
                     <h2 id="about" className="text-2xl mb-4">
                       <span>ABOUT US</span>
                     </h2>
                     <div className="prose mx-52 max-w-none text-white ">
                       <p>
                         <strong>{data.about}</strong>
                       </p>
                     </div>
                   </div>
                   <div className="text-center mt-4" id="programs">
                     <h2 className="text-xl mb-4">OFFERED PROGRAMS</h2>
                     <div className="grid grid-cols-1 gap-4 px-16">
                       <div className="bg-teal-700 rounded-xl py-5 pb-2 mb-2 w-[100%] border-b last:border-b-0 text-center items-center content-center">
                         <div className="flex justify-center">
                           <ul>
                             <li>{data.Course[0]}</li>
                             <li>{data.Course[1]}</li>
                             <li>{data.Course[2]}</li>
                           </ul>
                         </div>
                       </div>
                     </div>
                     <div id="map" className="mt-4 text-center">
                       <h2 className="text-xl mb-4">Get Directions</h2>
                       <p>{data.location}</p>
                     </div>
                   </div>
                 </div>
                 <div className="p-4 pb-0 rounded-r-2xl text-white con mb-4 text-center">
                   <span id="message-principal-465"></span>
                   <h2 className="text-xl mb-4">
                     Message from the{" "}
                     <span className="capitalize">Principal</span>
                   </h2>
                   <div className="mt-4 content-center items-center text-center text-sm">
                     <img
                       alt="Principal Photo"
                       className="max-h-28 rounded-r-2xl ml-[520px]"
                       src={data.logo}
                     />
                     <div className="message mx-52">
                       <p>{data.PrincipalMessage}</p>
                     </div>
                     <div className="mt-5 text-center text-lg ">
                       <div className="font-bold" id="pname">
                         {data.Name}Principal
                       </div>
                       <div>Principal</div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       );
     })}
   </div>
 );

}

export default Seventeen;