import pic from "../assets/peepo.webp";

const NavBar = () => {
  return (
    <>
      <div className="flex items-center space-x-4">
        <div className="w-24 h-24 rounded-2x1 overflow-hidden">
          <img src={pic} alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-2xl font-bold self-center">NavBar</h1>
      </div>

      <div
        role="tablist"
        className="tabs tabs-boxed w-full max-w-screen mx-auto"
      >
        <a role="tab" className="tab flex-1 text-center">
          Tab 1
        </a>
        <a role="tab" className="tab  flex-1 text-center">
          Tab 2
        </a>
      </div>
    </>
  );
};

export default NavBar;
