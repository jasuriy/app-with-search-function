import React from "react";
import { Route, Link } from "react-router-dom";

const MovieTable = ({ pagiantedMovies, handleDelete, handleSorting }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => handleSorting("title")}>Title</th>
          <th onClick={() => handleSorting("genre.name")}>Genre</th>
          <th onClick={() => handleSorting("numberInStock")}>Srock</th>
          <th onClick={() => handleSorting("dailyRentalRate")}>Rate</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {pagiantedMovies.map((movie) => (
          <tr key={movie._id}>
            <td>
              <Link to={`/form/${movie._id}`}>{movie.title}</Link>
            </td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <button
                onClick={() => handleDelete(movie)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieTable;
