import { useContext } from "react";
import Meetuplist from "../components/meetups/MeetupList";

import FavoritesContext from "../store/favorites-context";

export default function Favorites() {
  const favoriteCtx = useContext(FavoritesContext);

  let content;
  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You got no Favorites yet. start adding some?</p>;
  } else {
    content = <Meetuplist meetups={favoriteCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorite</h1>
      {content}
    </section>
  );
}
