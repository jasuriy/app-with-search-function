import React from "react";
import _ from "lodash";
import { useHistory, Link } from "react-router-dom";
import Pagination from "../paginate/Pagination";
import ListGroup from "../list-group/ListGroup";
import { paginate } from "../paginate/paginating";
import MovieTable from "./MovieTable";

const Movies = ({
  showTotalMovies,
  handleDelete,
  handlePageChange,
  handleSelect,
  movies: allMovies,
  genres,
  pageSize,
  currentPage,
  selectedGenre,
  handleSorting,
  sortColumn,
  searchQuery,
}) => {
  const history = useHistory();

  let filtered = allMovies;
  if (searchQuery)
    filtered = allMovies.filter((m) =>
      m.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  else if (selectedGenre && selectedGenre._id)
    filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);
  const sortedMovies = _.orderBy(
    filtered,
    [sortColumn.path],
    [sortColumn.order]
  );
  // console.log(sortColumn);
  const pagiantedMovies = paginate(sortedMovies, currentPage, pageSize);
  return (
    <div className="row ">
      <div className="col-3">
        <ListGroup
          genres={genres}
          handleSelect={handleSelect}
          selectedGenre={selectedGenre}
        />
      </div>

      <div className="col">
        <Link to="form/new">
          <button
            to="form/new"
            // onClick={() => history.push("/form")}
            className="btn btn-primary d-flex"
          >
            New Movie
          </button>
        </Link>
        <h2>{filtered.length} Movies found in database</h2>
        <main>
          <MovieTable
            pagiantedMovies={pagiantedMovies}
            handleDelete={handleDelete}
            handleSorting={handleSorting}
          />
          <Pagination
            itemsCount={filtered}
            genres={genres}
            pageSize={pageSize}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </main>
      </div>
    </div>
  );
};

export default Movies;
