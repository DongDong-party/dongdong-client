import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/scss/components/nav/navigation-list.scss';

class NavItem extends React.Component {
  render() {
    return (
      <li className="navlist">
        <Link to={this.props.navItem.link}>{this.props.navItem.item}</Link>
      </li>
    );
  }
}

export default NavItem;
