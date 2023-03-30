function App() {
  return (
<div classNameName="container my-5">
    <div className="row justify-content-center">
      <div classNameName="col-md-7" style={{'backgroundColor':'lightblue '}}>
        <p classNameName="display-6 text-light fw-bold">
          Let's work together
        </p>
        <div classNameName="text-light terms w-75" style={{'color':'pink'}}>
          <p classNameName="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis debitis, harum a impedit
            mollitia, ad excepturi iure nulla earum totam unde nemo perferendis, dicta possimus tempora
            magnam
            commodi hic dolorem.
          </p>
          <p classNameName="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis debitis, harum a impedit
            mollitia, ad excepturi iure nulla earum totam unde nemo perferendis, dicta possimus tempora
            magnam
            commodi hic dolorem.
          </p>
          <p classNameName="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis debitis, harum a impedit
            mollitia, ad excepturi iure nulla earum totam unde nemo perferendis, dicta possimus tempora
            magnam
            commodi hic dolorem.
          </p>
          <p classNameName="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis debitis, harum a impedit
            mollitia, ad excepturi iure nulla earum totam unde nemo perferendis, dicta possimus tempora
            magnam
            commodi hic dolorem.
          </p>
        </div>
      </div>

      <div className="col-md-4 text-dark p-4 h-50 bg-light contactform">
        <h1 className="text-center h3 mb-4 text-muted">How can we help?</h1>
        <form>
          <div className="row">
            <div className="col-md-6">
              <label for="basic-url" className="form-label">Name *</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" id="basic-url" placeholder="name" aria-describedby="basic-addon3"/>
              </div>
            </div>

            <div className="col-md-6">
              <label for="basic-url" className="form-label">Organization *</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" id="basic-url" placeholder="name" aria-describedby="basic-addon3"/>
              </div>
            </div>
          </div>

          <label for="basic-url" className="form-label">Email *</label>
          <div className="input-group mb-3">
            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
          </div>

          <label for="basic-url" className="form-label">Project Description *</label>
          <div className="input-group">
            <textarea className="form-control" rows="8" aria-label="With textarea"></textarea>
          </div>

          <div className="row mt-4">
            <div className="col md-6">
              <label for="basic-url" className="form-label">Budget *</label>
              <select className="form-select" aria-label="Default select example">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col md-6">
              <label for="basic-url" className="form-label">Target Lunch *</label>
              <div className="input-group mb-3">
                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
              </div>
            </div>
          </div>
          <button className="btn btn-success w-100">Send</button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default App;
