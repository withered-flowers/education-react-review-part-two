import React, { useEffect } from "react";

import { signOutFromEverywhere } from "../authentication/firebase";
import { useNavigate } from "react-router-dom";

import useAnimationStore, {
  selectAnimations,
  selectError,
  selectIsLoading,
  selectFetchAnimations,
} from "../stores/animation";

const HomePage = () => {
  const navigate = useNavigate();

  // select action
  const fetchAnimations = useAnimationStore(selectFetchAnimations);
  const animationLoading = useAnimationStore(selectIsLoading);
  const animationError = useAnimationStore(selectError);
  const animations = useAnimationStore(selectAnimations);

  const btnSignOutOnClickHandler = async () => {
    await signOutFromEverywhere();
    navigate("/login");
  };

  useEffect(() => {
    fetchAnimations();
  }, []);

  return (
    <>
      <div className="p-4">
        <div>
          <button
            className="bg-slate-200 hover:bg-slate-300 py-2 px-4 rounded-full"
            onClick={btnSignOutOnClickHandler}
          >
            Sign Out
          </button>
        </div>
        <p className="font-semibold animate-pulse text-3xl">Home Page</p>

        {/* Pakai si loadingnya dengan menggunakan si "?" */}
        {animationLoading ? (
          <div>
            <p className="font-semibold">Sedang menunggu data ...</p>
          </div>
        ) : (
          <ul>
            {animations.map((animation) => (
              <li key={animation.mal_id}>
                {animation.mal_id} -{" "}
                <a
                  href={animation.url}
                  className="text-blue-400 hover:text-blue-500 underline"
                >
                  Link
                </a>{" "}
                - <img src={animation.images.jpg.image_url} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default HomePage;
