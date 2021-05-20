import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './LivingItems.scss';

class LivingItems extends Component {
  render() {
    const { history } = this.props;
    const livingItems = ['컵', '책'];
    return (
      <div className="livingItems">
        <ul className="categoryItemsSubCategories">
          {livingItems.map(itemName => {
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

export default withRouter(LivingItems);
