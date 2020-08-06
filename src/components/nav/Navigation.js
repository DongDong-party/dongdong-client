import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavigationList';

import '../../assets/scss/components/nav/navigation.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        {
          item: '카테고리',
          link: '#',
        },
        {
          item: '로그인',
          link: '#',
        },
      ],
    };
  }
  render() {
    return (
      <div className="navigation-container">
        <div className="navigation">
          <div className="navigation-logo">
            <Link to="/">로고</Link>
          </div>
          <ul className="navigation-category">
            {this.state.navItems.map((navItem, i) => {
              return <NavItem navItem={navItem} key={i} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
