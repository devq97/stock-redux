import React from "react";

const EditProduct = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Edit Product
            </h2>

            <form className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </form>

            <form className="form-group">
              <label>Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Cost"
                name="price"
              />
            </form>

            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default EditProduct;
