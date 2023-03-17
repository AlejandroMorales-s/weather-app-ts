//* Icons
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
//* Auth
import { signInMethods } from "../../../../../libs/auth";
//* React router
import { useNavigate } from "react-router-dom";
//* Redux slice
import { loginWithSocialMedia } from "./../../../../../features/userAuth";
import { useAppDispatch } from "../../../../../app/store";

export default function SocialMedia() {
  //* Use dispatch
  const dispatch = useAppDispatch();

  //* Use navigate
  const navigate = useNavigate();

  //* Handle login with provider
  const loginWithProvider = (id: string) => dispatch(loginWithSocialMedia(id));

  return (
    <div className="login-signup-social-media-container">
      <button
        className="social-media-button"
        onClick={() => loginWithProvider(signInMethods.facebook)}
      >
        <BsFacebook className="social-media-button-icon" />
        Facebook
      </button>
      <button
        className="social-media-button"
        onClick={() => loginWithProvider(signInMethods.google)}
      >
        <FcGoogle className="social-media-button-icon" />
        Google
      </button>
    </div>
  );
}
