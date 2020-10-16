import React from "react";
import "./styles.css";
import RamenData from "./RamenData";
import Resturant from "./Restaurant";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      search: ""
    };
  }
  componentDidMount() {
    this.RestData();
  }

  RestData = () => {
    this.setState({
      restaurants: [...RamenData]
    });
  };

  getRest = (e) => {
    this.setState({
      search: e.target.value
    });
  };
  render() {
    return (
      <div className="Container">
        <h1>Ramen Restaurants Top List</h1>
        <div>
          <label>
            Search{" "}
            <input
              type="text"
              value={this.state.search}
              name="searchRest"
              onChange={this.getRest}
            />
          </label>
        </div>
        <div className="searchResult">
          <Resturant
            allRest={this.state.restaurants}
            filter={this.state.search}
          />
        </div>
      </div>
    );
  }
}

export default App;
