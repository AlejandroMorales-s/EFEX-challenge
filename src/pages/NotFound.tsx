import { Navbar } from "../components";

const NotFound = () => {
  return (
    <div className="bg-home-bg-image h-screen bg-no-repeat bg-center bg-cover">
      <Navbar />
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-8xl text-white">Not Found</p>
      </div>
    </div>
  );
};

export default NotFound;
