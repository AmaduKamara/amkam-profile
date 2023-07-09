import Avatar from "./Avatar";
import Bio from "./Bio";
import Skills from "./Skills";

const Card = () => {
  return (
    <div className="m-4 w-full md:w-4/5 border-4 border-red-800 rounded-md shadow-2xl border-gray-800 ">
      <Avatar />
      <div className="p-6">
        <Bio />
        <Skills />
      </div>
    </div>
  );
};

export default Card;
