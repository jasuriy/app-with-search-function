import React from "react";

const ListGroup = ({ genres, handleSelect, selectedGenre }) => {
  return (
    <div className="list-group-main">
      <ul className="list-group">
        {genres.map((genre) => (
          <li
            key={genre.name}
            onClick={() => handleSelect(genre)}
            className={
              genre === selectedGenre
                ? "list-group-item active"
                : "list-group-item "
            }
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
