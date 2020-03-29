import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";

/**
 * Actions
 */
import { addProductAction } from "../actions/productActions";

/**
 * Schema for validations
 * @type {*|T|RefSet|RefSet|MediaStream|Response|MediaStreamTrack|Request}
 */
const schema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required().positive()
});

/**
 * New Product
 * @returns {*}
 * @constructor
 */
const NewProduct = () => {

  /**
   * useDispatch
   */
  const dispatch = useDispatch();

  /**
   * Destructuring useForm
   */
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  /**
   * Call action
   */
  const addProduct = () => dispatch( addProductAction() );

  /**
   * OnSubmit
   * @param e
   */
  const onSubmit = () => {
    addProduct();
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Add new Product
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
            >
              <div
                className="form-group"
              >
                <label>
                  Name
                </label>
                <input
                  type="text"
                  ref={register}
                  className={(errors.name ? "form-control is-invalid" : "form-control")}
                  placeholder="Name"
                  name="name"
                />
                {errors.name && <p className="invalid-feedback">{errors.name.message}</p>}
              </div>

              <div className="form-group">
                <label>Price</label>
                <input
                  type="text"
                  ref={register}
                  className={(errors.price ? "form-control is-invalid" : "form-control")}
                  placeholder="Cost"
                  name="price"
                />
                {errors.price && <div className="invalid-feedback">{errors.price.message}</div>}
              </div>

              <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default NewProduct;
