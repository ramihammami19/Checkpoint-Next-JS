
const Footer: React.FC = () => {
  return (
    <div className="rami">
      <footer className="text-center text-white" style={{ backgroundColor: '#3f51b5' }}>
        <div className="container">
          <section className="mt-5">
            <div className="row text-center d-flex justify-content-center pt-5">
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="https://www.instagram.com/rami_hammami__/" className="text-white">About us</a>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="https://github.com/ramihammami19" className="text-white">Products</a>
                </h6>
              </div>


             

             
            </div>
          </section>

          <hr className="my-5" />

         

          <section className="text-center mb-5">
            <a href="" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          © 2024 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">rami hammai</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
