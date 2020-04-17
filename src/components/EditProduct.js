import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProductAction } from "../actions/productActions";
import { useHistory } from 'react-router-dom';
import * as yup from "yup";
import {useForm} from "react-hook-form";

/**
 * Schema for validations
 * @type {*|T|RefSet|RefSet|MediaStream|Response|MediaStreamTrack|Request}
 */
const schema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required().positive()
});

/**
 * Edit Product
 * @returns {*}
 * @constructor
 */
const EditProduct = () => {

  /**
   * Local state
   */
  const [ product, setProduct ] = useState({
    name: '',
    price: 0
  });

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
   * useHistory
   */
  const history = useHistory();

  /**
   * Getting state
   */
  const productToEdit = useSelector(state => state.products.productToEdit);

  /**
   * Use Effect
   */
  useEffect(() => {
    setProduct(productToEdit);
  }, [productToEdit]);

  /**
   * Validation
   */
  if (!productToEdit) {
    return null;
  }

  /**
   * Destructuring product to edit
   */
  const { name, price } = product;

  /**
   * handleChange
   * @param e
   */
  const handleChange = e => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  };

  /**
   * onSubmit
   */
  const onSubmit = () => {

    dispatch( editProductAction(product) );
    history.push('/');

  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Edit Product
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className={(errors.name ? "form-control is-invalid" : "form-control")}
                  placeholder="Name"
                  ref={register}
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
                {errors.name && <p className="invalid-feedback">{errors.name.message}</p>}
              </div>


              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  className={(errors.price ? "form-control is-invalid" : "form-control")}
                  placeholder="Cost"
                  name="price"
                  ref={register}
                  value={price}
                  onChange={handleChange}
                />
                {errors.price && <p className="invalid-feedback">{errors.price.message}</p>}
              </div>

              <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                Save changes
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default EditProduct;
