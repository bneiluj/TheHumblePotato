import React from 'react';
import './Pay.css';

class Pay extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col text-center Pay" />
        <div className="col text-center Pay">
          <div className="buy-container bg-light pb-5 mb-5 pt-4">
            <div className="ml-4 mr-4">
              <div className="row mb-4 pb-2 text-center">
                <div className="col">
                  <span className="h2-box border-blue Pay-participate">Participate</span>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-2"></div>
                <div className="col price-window text-right pt-2 pb-2 Pay-price">
                  &nbsp;
                  <span className="Pay-priceInner">
                    1 DAI
                  </span>
                </div>
                <div className="col-2"></div>
              </div>
              <button className="btn btn-secondary mt-3">Send</button>
              <hr />
              <div className="text-left">
                <span className="text-purple-lg Pay-colorfulText">Aiming Pot ~16,000 DAI</span>
                <br />
                <span className="text-orange-lg Pay-colorfulText">Generated Yield ~200 DAI</span>
                <br />
                <span className="text-blue-lg Pay-colorfulText">Damages 15,382 Followers (~20%)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col text-center Pay" />
      </div>
    );
  }
}

export default Pay;
