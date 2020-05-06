import React, { Component } from "react";
import axios from "axios";
import ImageCard from "./components/imageCard";
import ImageSearch from "./components/imageSearch";

class App extends Component {
  state = {
    photos: [],
    searchTerm: "",
    isLoading: true,
  };

  async componentDidMount() {
    const { data } = await axios.get(
      "https://api.unsplash.com/search/photos?query=random&client_id=i-MziJcxj3BaybCrXFeJNx4knOnS6c-93rnEoPFbHLA"
    );
    const photos = data.results
    this.setState({photos})
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    const { data } = await axios.get(
      `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
    );
    const photos = data.results;
    this.setState({ photos });
  };

  handleChange = ({ currentTarget: input }) => {
    let searchTerm = this.state.searchTerm;
    searchTerm = input.value;
    this.setState({ searchTerm });
  };

  render() {
    const { photos } = this.state;
    return (
      <div className="container mx-auto">
        <ImageSearch
          value={this.state.searchTerm}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <div className="grid grid-cols-3 gap-4">
          {photos.map((photo) => (
            <ImageCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
