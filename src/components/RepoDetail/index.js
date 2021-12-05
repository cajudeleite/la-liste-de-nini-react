import { Card, Image, Button } from 'semantic-ui-react';
import { addNewFilm } from '../../actions';
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';

import './styles.scss';

const RepoDetail = ( { id, poster_path, title, overview } ) => {

  const dispatch = useDispatch();

  return (
    <Card id='detailcard'>
      <Image src={`https://image.tmdb.org/t/p/original${poster_path}` } wrapped ui={false} />
      <Card.Content>
          <Card.Header style={{ wordBreak: 'break-word' }}>{ title }</Card.Header>
        <Card.Description style={{ wordBreak: 'break-word' }}>
            { overview }
        </Card.Description>
        <Button onClick={() => {
          dispatch(addNewFilm(id, title, overview, poster_path));
        }} fluid basic color='green' style={{ margin: '20px auto 0' }} as={NavLink} to="/" exact>Ajouter ce film à ma liste</Button>
      </Card.Content>
    </Card>
  )
};

export default RepoDetail;
