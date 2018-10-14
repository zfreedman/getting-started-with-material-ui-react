import * as contentful from "contentful";
import Grid from "@material-ui/core/Grid";
import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField";

import Course from "./Course";
import {
  ACCESS_TOKEN,
  SPACE_ID
} from "../config/secrets";

const client = contentful.createClient({
  accessToken: ACCESS_TOKEN,
  space: SPACE_ID,
});

class CourseList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      courses: [],
      searchString: "",
    };
    this.getCourses();
  }

  render () {

    const { courses } = this.state;
    const { grid, textField, } = this.styles;

    return (
      <div>
        <TextField
          id="searchInput"
          margin="normal"
          onChange={this.onSearchInputChange}
          placeholder="Search for courses"
          style={textField}
        />

        <Grid
          container
          spacing={24}
          style={grid}
        >
          {
            courses.length === 0
              ? "No courses found"
              : this.renderCourses()
          }
        </Grid>
      </div>
    )
  }

  getCourses = () => {
    client.getEntries({
      content_type: "course",
      query: this.state.searchString,
    })
    .then(resp => {
      this.setState({ courses: resp.items })
    })
    .catch(err => {
      console.log("Error occured in getCourses()");
      console.log(err);
    });
  };

  onSearchInputChange = e => {
    this.setState({ searchString: e.target.value });
    this.getCourses();
  }

  renderCourses = () => {
    const { courses } = this.state;

    return courses.map(c => (
      <Grid
        item
        key={c.fields.title}

        xs={12}
        sm={6}
        lg={4}
        xl={3}
      >
        <Course course={c} />
      </Grid>
    ));
  }

  styles = {
    grid: {
      padding: "24px",
    },
    textField: {
      padding: "24px",
    },
  }
}

export default CourseList;
