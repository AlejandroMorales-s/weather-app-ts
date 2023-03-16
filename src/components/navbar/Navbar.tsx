import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import SavedCities from "./navbarComponents/savedCitiesMenu/SavedCities";

export default function Navbar() {
  const [openSavedCities, setOpenSavedCities] = useState(false);
  return (
    <>
      <nav className="navbar" role="navigation">
        <BiMenuAltLeft
          onClick={() => setOpenSavedCities(true)}
          className="navbar-menu-icon"
          role="menu"
        />
        <div className="navbar-image-container">
          <img
            className="navbar-image"
            srcSet="https://th.bing.com/th/id/R.c95c446eadc289a7df51a0ec32842bb0?rik=dD%2bOTlAYX6in3Q&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_103581.png&ehk=8q8yMlWay3C1QELvNKZV3%2brEdicOgKTw%2baS0yE5lSuE%3d&risl=&pid=ImgRaw&r=0"
            src=""
            alt="user"
          />
        </div>
      </nav>
      {openSavedCities && (
        <SavedCities setOpenSavedCities={setOpenSavedCities} />
      )}
    </>
  );
}
