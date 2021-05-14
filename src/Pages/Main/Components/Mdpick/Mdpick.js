import React, { Component } from 'react';
import './Mdpick.scss';

class Mdpick extends Component {
  constructor() {
    super();
    this.state = {
      mdPickItem: [],
    };
  }

  componentDidMount() {
    fetch()
      .then(res => res.json())
      .then(res => this.setState({ mdPickItem: res }));
  }

  render() {
    return (
      <div className="Mdpick">
        <div className="mdPickContainer">
          <div className="titleContainer">
            <h2 className="mdPickTitle">MD's Pick</h2>
          </div>
          <div className="mdItemList">
            <div className="mdItemTitle">
              <h3>
                라이언의
                <br />
                골프 생활
              </h3>
              <p>
                쉿! 나만 소장하고 싶은
                <br />
                골프 아이템!
              </p>
            </div>
            {/* component */}
          </div>
        </div>
      </div>
    );
  }
}

export default Mdpick;
