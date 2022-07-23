import React from "react";

class SearchBar extends React.Component {
  //   constructor() {
  //     super();
  //     this.onFormSubmit = this.onFormSubmit.bind(this);
  //   }

  state = { term: "" };

  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }

  //   onFormSubmit(event) {
  //     event.preventDefault();
  //     console.log(this.state.term);
  //   }
  onFormSubmit = (event) => {
    event.preventDefault(); // this prevents browser refresh when submit btn gets clicked
    this.props.onSubmit(this.state.term); // search term passed into App comp. as a prop
  };

  render() {
    return (
      <div className="ui submit">
        <form onSubmit={this.onFormSubmit} className="ui form">
          {/* <form
          onSubmit={(event) => this.onFormSubmit(event)}
          className="ui form"
        > */}
          <div className="field">
            <label>Image Search:</label>
            <input
              className="prompt"
              type="text"
              placeholder="Search photos..."
              value={this.state.term}
              //   onChange={this.onInputChange}
              //   onChange={(e) => {
              //     console.log(e.target.value);
              // }
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
            {/* <i className="circular search link icon" /> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
