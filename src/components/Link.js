import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick}) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: '4px'
      }}
    >
      {children}
    </button>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;