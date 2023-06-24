import Image from "next/image";
import map1 from "../../assests/map1.png";

type Props = {};
function BookAppointment({}: Props) {
  return (
    <div className=" overflow-hidden flex justify-center">
      <div className=" z-10 relative   overflow-hidden md:space-x-3 md:items-center flex md:flex-row  flex-col justify-center p-6 items-center w-[90%] lg:w-2/3 h-[250px] md:h-[200px]  text-center space-y-4 rounded-lg bg-opacity-90 bg-orange  ">
        <h2 className=" md:w-[400px]  text-2xl md:text-4xl lg:text-4xl font-bold text-white">
          Are you Looking for Visa Consultation?
        </h2>
        <button className=" p-4 rounded-lg font-semibold  hover:bg-gray-600 hover:text-white transition-all ease-linear duration-200 uppercase bg-white text-black">
          Book Appointment
        </button>
        <Image
          src={map1}
          alt="map "
          width={1894}
          height={819}
          className=" absolute top-0 left-0 min-w-full min-h-full object-cover -z-10    "
        />
      </div>
    </div>
  );
}
export default BookAppointment;
