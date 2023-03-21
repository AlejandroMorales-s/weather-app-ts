import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import ProfileMenu from "../../layout/profileMenu/ProfileMenu";
import SavedCities from "../../layout/savedCities/SavedCities";

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
        <ProfileMenu />
      </nav>
      {openSavedCities && (
        <SavedCities setOpenSavedCities={setOpenSavedCities} />
      )}
    </>
  );
}
