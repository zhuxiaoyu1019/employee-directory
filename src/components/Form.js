import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Table from "./Table";
import API from "../utils/API";

export default class Form extends Component {
  state = {
    employees: [],
    keyword: "",
  };

  componentDidMount() {
    this.getEmployeeList();
  }

  getEmployeeList = () => {
    API.get()
      .then((employeeList) =>
        this.setState({ employees: employeeList.data.results })
      )
      .catch((err) => console.log(err));
  };

  filter = (keyword) => {
    this.setState({ keyword });
  };

  render() {
    return (
      <div>
        <SearchBar filter={this.filter} />
        <Table employees={this.state.employees} keyword={this.state.keyword} />
      </div>
    );
  }
}
