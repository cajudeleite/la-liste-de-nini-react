import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <Menu fluid widths={2}>
    <Menu.Item as={NavLink} to="/" exact>
      Ajouter un film
    </Menu.Item>

    <Menu.Item as={NavLink} to="/maliste" exact>
      Ma liste
    </Menu.Item>
  </Menu>
);

export default NavBar;
