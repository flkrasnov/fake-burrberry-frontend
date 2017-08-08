import React from 'react';

export default () => {
  return (

    <section className="recomendations">

      <div className="container">
        <h2 className="recomendations-heading">we recommend</h2>
      </div>

      <div className="recomendations-blocks">
        <div className="container">
          <div className="row">

          
              <div className="col-xs-6 col-sm-3">
                <a className="recomendations-blocks-block" href="">
                  <img className="recomendations-blocks-block-img" src="img/wr1.jpg" alt="Emroided Hooded" />
                  <h3 className="recomendations-blocks-block-name">Emroided Hooded Content For Three Lines</h3>
                  <h5 className="recomendations-blocks-block-price">27 000 руб</h5>
                </a>
              </div>

              <div className="col-xs-6 col-sm-3">
                <a className="recomendations-blocks-block" href="">
                  <img className="recomendations-blocks-block-img" src="img/wr2.jpg" alt="Relaxed Fit Stretch Jeans" />
                  <h3 className="recomendations-blocks-block-name">Relaxed Fit Stretch Jeans Content For Three Lines</h3>
                  <h5 className="recomendations-blocks-block-price">22 500 руб</h5>
                </a>
              </div>

              <div className="col-xs-6 col-sm-3">
                <a className="recomendations-blocks-block" href="">
                  <img className="recomendations-blocks-block-img" src="img/wr3.jpg" alt="Leather and House" />
                  <h3 className="recomendations-blocks-block-name">Leather and House Check Content For Three Lines</h3>
                  <h5 className="recomendations-blocks-block-price">120 000 руб</h5>
                </a>
              </div>

              <div className="col-xs-6 col-sm-3">
                <a className="recomendations-blocks-block" href="">
                  <img className="recomendations-blocks-block-img" src="img/wr4.jpg" alt="Leather Wingtip" />
                  <h3 className="recomendations-blocks-block-name">Leather Wingtip Check Content For Three Lines</h3>
                  <h5 className="recomendations-blocks-block-price">46 000 руб</h5>
                </a>
              </div>

          </div>
        </div>
      </div>

    </section>

  );
};