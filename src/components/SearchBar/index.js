import PropTypes from 'prop-types';
import { Segment, Form, Input } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { setSearchNewValue } from 'src/actions'

const SearchBar = ({ searchValue, setSearchValue, search, isLoading }) => {
  const dispatch = useDispatch();

  return (
    <Segment>
      <Form onSubmit={
        () => {
          // Merci le Form de semantic ui, pas beesoin de prevent default
          console.log('je veux lancer la recherche');
          search();
        }
      }
      >
        <Form.Field>
          {
            // on se met de côté la prop loading !
          }
          <Input
            loading={isLoading}
            placeholder="Ecris ici le titre du film que tu cherches Nini"
            icon="search"
            iconPosition="left"
            value={searchValue}
            onChange={
              (event) => {
                console.log('nouvelle valeur : ', event.target.value);
                setSearchValue(event.target.value);
                dispatch(setSearchNewValue(event.target.value));
              }
            }
          />
        </Form.Field>
      </Form>
    </Segment>
  )
};

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default SearchBar;
