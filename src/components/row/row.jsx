import React from 'react';
import PropTypes from 'prop-types';
// import s from './page.module.css';
import ErrorBoundary from '../error-boundary/error-boundary';

const Row = ({ left, right }) => {
 
  return(
    <div className="row w-100 mb-2 justify-content-center">
      <div className="col-5 col-sm-6 col-md-5 col-lg-4">
        <ErrorBoundary>
          { 
            left
          }
        </ErrorBoundary>
      </div>
      <div className="col-7 col-sm-6 col-md-5 col-lg-4">
        <ErrorBoundary>
          {
            right
          }
        </ErrorBoundary>
      </div>
    </div>
  )

}

Row.propTypes = {
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
}

export default Row;

