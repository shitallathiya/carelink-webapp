import './assets/css/style.css';

function Appointment() {
      return (
        <div>
            <section id="get_notified" className="contact">
              <div className="container">
                {/* <div className="section-title"> */}
                  <p>Schedule Your Appointment</p>
                {/* </div> */}
                <div className="row mt-5">
                  <div className="col-lg-8 mt-5 mt-lg-0">
                    <form method="post" className="php-email-form">
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <input type="text" name="name" className="form-control" id="name" placeholder="Your Full Name" required />
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                          <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <input type="text" name="name" className="form-control" id="name" placeholder="Your Contact Number" required />
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                          <input type="text" className="form-control" name="Department" id="Department" placeholder="Department" required />
                        </div>
                      </div>
                      <div className="form-group mt-3">
                        <textarea className="form-control" name="message" rows={5} placeholder="Describe about your problem" required defaultValue={""} />
                      </div>
                      {/* <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">Your Appointment has been booked. Thank you!</div>
                      </div> */}
                      <div className="text-center"><button type="submit">Book Appointment</button></div>
                    </form>
                  </div>
                </div>
              </div>
            </section>{/* End Contact Section */}
        </div>
      );
    }

export default Appointment;