import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-6 py-2 bg-gradient-to-b from-black z-10 flex flex-row justify-between">
      <h1 className="text-4xl my-1 text-white">Trailers</h1>
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="bg-gray-800 text-white rounded-md px-2 mb-2 h-10"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="text-white bg-green-700 rounded-lg p-2 mb-2 ml-2 h-10 hover:opacity-80"
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <button
            onClick={handleSignOut}
            className="text-black bg-gray-100 rounded-lg px-1 md:px-2 ml-2 mb-2 h-10 hover:opacity-80"
          >
            Sign Out
          </button>
          {/* <img
            className="hidden md:block w-10 h-10 rounded-lg ml-2"
            alt="usericon"
            src={user?.photoURL}
          /> */}
          <h1 className="hidden md:block text-3xl text-white rounded-lg ml-2">
            👤
          </h1>
        </div>
      )}
    </div>
  );
};

export default Header;
