import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'
import { Card, Image, Button } from 'semantic-ui-react';
import { setIDValue, addNewFilm } from 'src/actions'
import { NavLink } from 'react-router-dom';

const Item = ({
  id, title, overview, poster_path,
}) => {

  const dispatch = useDispatch();

  return (
  <Card onClick={() => {
      dispatch(setIDValue(id, title, overview, poster_path));
    }} as={NavLink} to="/film" exact>
    <Image src={`https://image.tmdb.org/t/p/original${poster_path}`} wrapped ui={false} />
    <Card.Content>
      <Card.Header style={{ wordBreak: 'break-word' }}>{title}</Card.Header>
      <Card.Description style={{ wordBreak: 'break-word' }}>
        {overview}
      </Card.Description>
      <Button onClick={() => {
          dispatch(setIDValue(id, title, overview, poster_path));
          dispatch(addNewFilm(id, title, overview, poster_path));
        }} fluid basic color='green' style={{ margin: '20px auto 0' }} as={NavLink} to="/" exact>
        Ajouter ce film à ma liste
      </Button>
    </Card.Content>
  </Card>
  )
};

Item.defaultProps = {
  overview: 'Ce film n\'a pas de description',
  poster_path: 'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg',
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  id: PropTypes.number.isRequired,
};

export default Item;
