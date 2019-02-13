import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './close-icon.scss';

const CloseIcon: React.StatelessComponent<any> = ({ onClickCloseIcon }) => (
  <div onClick={onClickCloseIcon} className='close-icon'>
    <FontAwesomeIcon icon={['fas', 'times']} size='1x' />
  </div>
);

CloseIcon.propTypes = {
  onClickCloseIcon: PropTypes.func.isRequired
};

export default CloseIcon;
