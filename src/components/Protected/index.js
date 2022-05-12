import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Protected({ isLogged, children }) {
  return !isLogged ? <Navigate to="/" replace /> : children;
}

Protected.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
};

export default Protected;
