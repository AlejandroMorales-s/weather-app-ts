import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store";
import {
  logout,
  selectLoggedStatus,
  selectUserData,
} from "../../../containers/userAuth";
import { IoIosArrowForward } from "react-icons/io";
import Login from "../../ui/login/Login";
import SignUp from "../../ui/signup/SignUp";
import SocialMedia from "../../ui/socialMedia/SocialMedia";

export default function ProfileMenu() {
  //* States
  const [formShowing, setFormShowing] = useState<string>("login");
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [closingMenu, setClosingMenu] = useState<boolean>(false);

  //* Dispatch
  const dispatch = useAppDispatch();

  //* Selectors
  const userStatus = useSelector(selectLoggedStatus);
  const userData = useSelector(selectUserData);
  return (
    <div className="navbar-profile-menu-container">
      <div onClick={() => setOpenMenu(true)} className="navbar-image-container">
        <img
          className="navbar-image"
          src="https://th.bing.com/th/id/R.c95c446eadc289a7df51a0ec32842bb0?rik=dD%2bOTlAYX6in3Q&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_103581.png&ehk=8q8yMlWay3C1QELvNKZV3%2brEdicOgKTw%2baS0yE5lSuE%3d&risl=&pid=ImgRaw&r=0"
          srcSet={userData.photoURL}
          alt="user"
        />
      </div>
      {openMenu && (
        <div
          className={`${
            closingMenu ? "menu-closed" : "menu-opened"
          } navbar-profile-menu-container`}
        >
          <div className="navbar-profile-menu container">
            <IoIosArrowForward
              className="navbar-profile-menu-icon"
              onClick={() => {
                setClosingMenu(true);
                setTimeout(() => {
                  setOpenMenu(false);
                  setClosingMenu(false);
                }, 300);
              }}
            />
            <div className="navbar-profile-menu-main">
              {userStatus ? (
                <>
                  <p>Hola, {userData.displayName}!</p>
                  <button onClick={() => dispatch(logout())}>
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <>
                  <h1>Parece que aún no inicias sesión</h1>
                  <div className="navbar-profile-menu-main-form">
                    <div className="navbar-profile-menu-main-buttons-container">
                      <button
                        className={`navbar-profile-menu-main-button ${
                          formShowing === "login" && "active-button"
                        }`}
                        onClick={() => setFormShowing("login")}
                      >
                        Inicia sesión
                      </button>
                      <button
                        className={`navbar-profile-menu-main-button ${
                          formShowing === "signup" && "active-button"
                        }`}
                        onClick={() => setFormShowing("signup")}
                      >
                        Crear cuenta
                      </button>
                    </div>
                    {formShowing === "login" && <Login />}
                    {formShowing === "signup" && <SignUp />}
                  </div>

                  <SocialMedia />
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
