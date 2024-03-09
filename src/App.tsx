import { useEffect, useRef } from "react";
import "./App.css";
import { getFurnitureList } from "./redux/furnitures/furniture.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import welcome from "./assets/welcome.mp3";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "./constants/route.constants";
function App() {
  const dispatch = useDispatch();
  const furnitureList = useSelector(
    (state: RootState) => state.furniture.furnitureList
  );

  const audioRef = useRef<HTMLAudioElement>(null);
  const navigate = useNavigate();
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }

    setTimeout(() => {
      navigate(ROUTE_CONSTANTS.CART);
    }, 10000);
  };

  console.log(furnitureList);

  useEffect(() => {
    dispatch(getFurnitureList());
  }, [dispatch]);
  return (
    <>
      <div className="card">
        <button onClick={playAudio}>Click Me to navigate</button>
      </div>
      <audio ref={audioRef}>
        <source src={welcome} type="audio/mpeg" />
      </audio>
    </>
  );
}

export default App;
