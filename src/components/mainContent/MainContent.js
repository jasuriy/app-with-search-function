import React, { Component } from "react";
import Movies from "../layout-tables/MoviesLayout";
import { getGenres, genres } from "../face-services/fakeGenreService";
import { getMovies } from "../face-services/fakeMovieService";
import SearchBox from "../form/SearchBox";

class MainContent extends Component {
  state = {
    movies: getMovies(),
    genres: [],
    moviePerPage: 4,
    currentPage: 1,
    selectedGenre: null,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    console.log("working??");
  };

  showTotalMovies = () => {
    let length = this.state.movies.length;
    return length === 0
      ? "No movies in Database"
      : `${length} movies in Database `;
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSelect = (genre) => {
    let allMovies = getMovies();
    const movies = this.state.movies.filter((m) => m.genre._id === genre._id);
    this.setState({ selectedGenre: genre, currentPage: 1, searchQuery: "" });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  // onChange = ({ currentTarget: input }) => {
  //   const searchQuery = input.value;
  //   this.setState({ searchQuery });
  //   this.handleSearch();
  // };

  handleSorting = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };

  render() {
    return (
      <div className="MainContent container my-5">
        <SearchBox
          onChange={this.handleSearch}
          value={this.state.searchQuery}
          label="Search Movie"
        />
        <Movies
          movies={this.state.movies}
          genres={this.state.genres}
          handleDelete={this.handleDelete}
          handlePageChange={this.handlePageChange}
          showTotalMovies={this.showTotalMovies}
          handleSelect={this.handleSelect}
          handleSorting={this.handleSorting}
          pageSize={this.state.moviePerPage}
          currentPage={this.state.currentPage}
          selectedGenre={this.state.selectedGenre}
          sortColumn={this.state.sortColumn}
          searchQuery={this.state.searchQuery}
        />
      </div>
    );
  }
}

export default MainContent;
