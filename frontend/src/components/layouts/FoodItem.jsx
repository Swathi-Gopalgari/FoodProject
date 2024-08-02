import React from 'react';
import { FaIndianRupeeSign } from "react-icons/fa6";


export default function FoodItem() {
  return (
     <div className="col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card p-3">
            <img src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png" alt="Pizza" className="card-img-top mx-auto" />
            {/* heading and description */}
            <div className="card-body d-flex flex-column">
                <h5 className="card title">Veg Loaded Pizza</h5>
                <p className="fooditem_des">Crunchy and cheesy Veg Loaded Pizza served with happiness</p>
                <p className="card-text">
                <FaIndianRupeeSign />180
                <br/>
                </p>
                <button className="btn btn-primary d-inlineml-4" type="button" id="cart_btn">Add to Cart</button>
                <br/>
                <p> Status:<span id="staock_status" className={10>5?"greenColor":"redColor"}> {10>5?"In Stack":"Out Of Stack"}</span>
                </p>
            </div>
        </div>
     </div>
  );
}
