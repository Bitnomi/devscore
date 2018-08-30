import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavMenu.css';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';

// export class NavMenu extends Component {
  
  
//   render() {
//   return (
//  fixedTop fluid collapseOnSelect>
//    Header>
//      Brand>
//         <Link to={'/'}>devscore</Link>
//       Brand>
//      Toggle />
//     Header>
//    Collapse>
//       <Nav>
//         <Link to={'/'} exact>
//           <NavItem>
//             <Glyphicon glyph='home' /> Home
//           </NavItem>
//         </Link>
//         <Link to={'/counter'}>
//           <NavItem>
//             <Glyphicon glyph='education' /> Counter
//           </NavItem>
//         </Link>
//         <Link to={'/fetchdata'}>
//           <NavItem>
//             <Glyphicon glyph='th-list' /> Fetch data
//           </NavItem>
//         </Link>
//       </Nav>
//     Collapse>
//     
//    )
//   }
// }
export class NavMenu extends Component{

  state = {
    current: 'home',
  }

  handleClick = (e) => {
    console.log('click', e);
    this.setState({
      current: e.key,
    });
  }
  
  displayName = NavMenu.name

  render() {
    return (
      <Menu
       onClick = {this.handleClick}
       selectedKeys={[this.state.current]}
       mode="horizontal"
      >
      
        <Menu.Item key="home">
            <Link to={'/'} exact>
              <Icon type= "home" /> Home
            </Link>
        </Menu.Item>
        
        
      
        <Menu.Item key="counter">
          <Link to={'/counter'}>
            <Icon type="dashboard" /> counter
          </Link>
        </Menu.Item>
        
        
        <Menu.Item key="fetchdata">
          <Link to ={'/fetchdata'}>
           <Icon type="setting" /> FetchData
          </Link>
        </Menu.Item>
        
      </Menu>
    );
  }
}