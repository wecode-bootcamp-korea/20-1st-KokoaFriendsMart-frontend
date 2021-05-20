import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './WearItem.scss';

class WearItems extends Component {
  render() {
    const { history } = this.props;
    const wearItems = ['셔츠', '모자', '후드'];
    return (
      <div className="wearItems">
        <ul className="categoryItemsSubCategories">
          {wearItems.map(itemName => {
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

export default withRouter(WearItems);
