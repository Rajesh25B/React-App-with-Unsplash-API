import React from "react";

import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

// function Button() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("I clicked button");
//   }

//   return <button onClick={handleSubmit}>Click Me!</button>;
// }

class App extends React.Component {
  state = { images: [] };
  // onSearchSubmit(term) {
  //   axios
  //     .get("https://api.unsplash.com//search/photos", {
  //       params: { query: term },
  //       headers: {
  //         Authorization:
  //           "Client-ID rHr-H0H112NvdEMnRDHgiRYKpgCIqhjwGAZndwBmCrs",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data.results);
  //     });
  // }
  onSearchSubmit = async (term) => {
    const res = await unsplash.get("search/photos", {
      params: { query: term },
    });
    // const res = await axios.get("https://api.unsplash.com//search/photos", {
    //   params: { query: term },
    //   headers: {
    //     Authorization: "Client-ID rHr-H0H112NvdEMnRDHgiRYKpgCIqhjwGAZndwBmCrs",
    //   },
    // });
    // console.log(res.data.results);
    // console.log(this);
    this.setState({ images: res.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* Total images found: {this.state.images.length} images */}
        <ImageList images={this.state.images} />
        {/* <Button /> */}
      </div>
    );
  }
}

export default App;
