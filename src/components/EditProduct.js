import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProductAction } from "../actions/productActions";
import { useHistory } from 'react-router-dom';

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
   * @param e
   */
  const handleSubmit = e => {
    e.preventDefault();

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
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </div>


              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Cost"
                  name="price"
                  value={price}
                  onChange={handleChange}
                />
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
