import PropTypes from 'prop-types';

export default function Container({ children }) {
  return (
    <div className="max-w-6xl bg-gray-50 h-full m-auto">
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
