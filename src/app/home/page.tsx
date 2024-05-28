import "./page.css"
const HeroSection: React.FC = () => {
  return (
    <div className="ha" >
    <section className="py-3 py-lg-5 py-xl-8">
      <div className="container overflow-hidden">
        <div className="row gy-5 gy-lg-0 align-items-lg-center justify-content-lg-between">
          <div className="col-12 col-lg-6 order-1 order-lg-0">
            <h1 className="   display-3 fw-bold mb-3" style={{ color: '#3f51b5' }} >A full stack developer      </h1>
            <p className="fs-4 mb-5"   style={{ color: '#3f51b5' }}>
              We work in a create a beatufil web site and application 
            </p>
          
          </div>
          <div className="col-12 col-lg-5 text-center">
            <div className="position-relative">
              <div className="bsb-circle border border-4 border-warning position-absolute top-50 start-10 translate-middle z-1"></div>
              <div
                className="bsb-circle bg-primary position-absolute top-50 start-50 translate-middle"
                style={{ '--bsb-cs': '460px' } as React.CSSProperties}
              ></div>
              <div
                className="bsb-circle border border-4 border-warning position-absolute top-10 end-0 z-1"
                style={{ '--bsb-cs': '100px' } as React.CSSProperties}
              ></div>
              <img
                className="img-fluid position-relative z-2"
                loading="lazy"
                src="./rami.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
