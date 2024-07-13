import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faLock, faRedoAlt, faHeadset } from '@fortawesome/free-solid-svg-icons';

const IconsContainer = () => {
  return (
    <div className='iconSection'>
      <section className="icons-container">
        <div className="icons">
          <FontAwesomeIcon icon={faPlane} size="3x"  />
          <div className="content">
            <h3>Free shipping</h3>
            <p>order over $100</p>
          </div>
        </div>

        <div className="icons">
          <FontAwesomeIcon icon={faLock} size="3x"  />
          <div className="content">
            <h3>Secure payment</h3>
            <p>100 secure payment</p>
          </div>
        </div>

        <div className="icons">
          <FontAwesomeIcon icon={faRedoAlt} size="3x"  />
          <div className="content">
            <h3>Easy returns</h3>
            <p>10 days returns</p>
          </div>
        </div>

        <div className="icons">
          <FontAwesomeIcon icon={faHeadset} size="3x"  />
          <div className="content">
            <h3>24/7 support</h3>
            <p>call us anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IconsContainer;
