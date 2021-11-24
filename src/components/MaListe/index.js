import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react';

import MesItem from './MesItem';

import { useSelector } from 'react-redux';

const MaListe = ({ repos }) => {

  const films = useSelector((state) => state.films);

  return (
    <Card.Group itemsPerRow={4} stackable>
      {
        films.map(
          (repo) => <MesItem key={repo.id} {...repo} />,
        )
      }
    </Card.Group>
  )
};
MaListe.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default MaListe;
