import React, { Component } from "react";

class Demo3 extends Component {

Search = React.createClass({
  getInitialState: function() {
      return { showResults: false };
  },
  onClick: function() {
      this.setState({ showResults: true });
  },
  render: function() {
      return (
          <div>
              <input type="submit" value="Search" onClick={this.onClick} />
              { this.state.showResults ? <Results /> : null }
          </div>
      );
  }
});

Results = React.createClass({
  render: function() {
      return (
          <div id="results" className="search-results">
              Some Results
          </div>
      );
  }
});

<Search />

}

export default Demo3;