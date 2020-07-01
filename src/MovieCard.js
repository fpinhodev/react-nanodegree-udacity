import React, { Fragment } from 'react'
import UsersList from "./UsersList";

const MovieCard = ({ movie, profiles, users }) => {
  const filteredUsers = [];

  profiles.forEach((profile) => {
    if (movie.id.toString() === profile.favoriteMovieID) {
      filteredUsers.push(users[profile.userID]);
    }
  });

  return (
    <Fragment>
      <h2>{movie.name}</h2>
      {
        filteredUsers.length ? (
          <Fragment>
            <p>Liked By:</p>
            <UsersList users={filteredUsers} />
          </Fragment>
        ) : <p>None of the current users liked this movie.</p>
      }
    </Fragment>
  )
}
/* <h2>Get Out</h2>
<p>Liked By:</p>
<ul>
  <li>John Doe</li>
  <li>Autumn Green</li>
</ul> */
export default MovieCard
