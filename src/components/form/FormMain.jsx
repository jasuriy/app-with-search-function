import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../form/FormInput";
import Select from "../form/SelectGenre";
import { genres, getGenres } from "../face-services/fakeGenreService";
import { getMovie, saveMovie } from "../face-services/fakeMovieService";
import Joi, { options } from "joi-browser";
import "./form-styles.css";

class FormMain extends Component {
  state = {
    data: {
      title: "",
      genreId: "",
      stock: "",
      rate: "",
    },
    errors: {},
    genres: [],
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().min(2).max(100).label("Movie name"),
    genreId: Joi.string().required().label("Genre"),
    stock: Joi.number().required().min(1).max(100).label("Number in Stock"),
    rate: Joi.number().required().min(1).max(10).label("Daily Rental Rate"),
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });
    const movieId = this.props.match.params.id;
    if (movieId === "new") return;
    const movie = getMovie(movieId);
    const data = this.makeRightData(movie);
    this.setState({ data });
  }
  //data population - data ni moslash uchun.
  makeRightData = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      stock: movie.numberInStock,
      rate: movie.dailyRentalRate,
    };
  };
  //onChange event
  onChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    const errors = {};
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else delete errors[input.name];
    this.setState({ data, errors });
  };
  //validate what is being typed
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  //validate after submit
  validate = () => {
    const errors = {};
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };
  //onSubmit event
  handleSubmit = (e) => {
    e.preventDefault();
    const { data } = this.state;
    const errors = this.validate();
    this.setState({ errors: errors || {}, data });
    console.log(errors);
    if (errors) return;
    saveMovie(data);
    console.log(data);
    this.props.history.push("/movies");
  };
  //rendering movie title dinamically
  renderMovieFormTitle = (label) => {
    return (
      <div className="movie-form d-flex">
        <h2>{label}</h2>
      </div>
    );
  };
  //rendering save button
  renderSaveButton = (label) => {
    return (
      <button
        // disabled={this.validate()}
        type="submit"
        className="btn btn-primary d-flex"
      >
        {label}
      </button>
    );
  };
  //rendering inputs
  renderInput = (label, name, type = "text") => {
    // const { title } = this.state.data;
    const { errors, data } = this.state;
    return (
      <Input
        label={label}
        type={type}
        name={name}
        value={data[name]}
        error={errors[name]}
        onChange={this.onChange}
      />
    );
  };
  //select component is reuseable now
  renderSelect = (label, name, options) => {
    const { data } = this.state;
    // console.log(label, name, options);
    return (
      <Select
        label={label}
        options={options}
        name={name}
        value={data[name]}
        onChange={this.onChange}
      />
    );
  };

  render() {
    const { data, genres } = this.state;
    return (
      <div className="d-flex justify-content-center">
        <div className=" mt-30 mainClass">
          {this.renderMovieFormTitle("Movie form")}
          <form onSubmit={this.handleSubmit} className="formClass ">
            {this.renderInput("Title", "title", data.title, "title")}
            {this.renderSelect("Genre", "genreId", genres)}
            {this.renderInput("Stock", "stock", data.stock, "number")}
            {this.renderInput("Rate", "rate", data.rate, "number")}
            {this.renderSaveButton("Save")}
          </form>
        </div>
      </div>
    );
  }
}

export default FormMain;
