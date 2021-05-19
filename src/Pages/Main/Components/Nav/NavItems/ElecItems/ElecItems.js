import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './ElecItems.scss';

class ElecItems extends Component {
  render() {
    const elecItems = ['아이맥', '태블릿', '폰', '워치'];
    const { history } = this.props;
    return (
      <div className="elecItems">
        <ul className="categoryItemsSubCategories">
          {elecItems.map(itemName => {
            return (
              <li>
                <Link onClick={() => history.push(`/category/${itemName}`)}>
                  {itemName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(ElecItems);
