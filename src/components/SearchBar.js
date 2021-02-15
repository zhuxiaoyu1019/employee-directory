import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Link from "@material-ui/core/Link";
import "./searchBar.css";

export default class SearchBar extends Component {
  state = {
    keyword: "",
  };

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.filter(this.state.keyword);
  };

  clearFilter = (e) => {
    e.preventDefault();
    this.setState({ keyword: "" });
    this.props.filter("");
  };

  render() {
    return (
      <div className="root">
        <Paper component="form" className="form">
          <InputBase
            placeholder="Search"
            onChange={this.handleInputChange}
            value={this.state.keyword}
            name="keyword"
            className="input"
          />
          <IconButton
            type="submit"
            aria-label="search"
            onClick={this.handleFormSubmit}
            className="iconButton"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <Link
          component="button"
          variant="body2"
          onClick={this.clearFilter}
          color="inherit"
          className="clear-btn"
        >
          clear
        </Link>
      </div>
    );
  }
}
