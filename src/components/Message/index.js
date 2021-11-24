// Pour éviter un conflit de nom entre le composant Message de semantic ui react et le notre
// on utilise un alias lors de l'import avec le mot clé as.
import { Message as SemanticUIMessage } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// note pour plus tard, la prop negative permet d'afficher le message en rouge
const Message = ({ message, isErrorMessage }) => (
  <SemanticUIMessage negative={isErrorMessage}>{message}</SemanticUIMessage>
);

Message.defaultProps = {
  isErrorMessage: false,
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  isErrorMessage: PropTypes.bool,
};

export default Message;
