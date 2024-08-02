import React, { useEffect } from 'react'
import CountRestaurant from './CountRestaurant';
import Restaurant from './Restaurant';
import { getRestaurants } from '../../actions/restaurantAction';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Message from './Message';

export default function Home() {
const dispatch=useDispatch();
const {loading:restuarantsLoading,
  error:restaurantsError,
  restaurants}=useSelector((state)=>state.restaurants);//comning from store

  useEffect(()=>{
    console.log("Make the api call for getting the data")
    dispatch(getRestaurants());
 },[dispatch]);
 console.log(restaurants)
  return (
    <>
    <CountRestaurant/>
    {restuarantsLoading?(<Loader/>):restaurantsError?(<Message varient="danger">(restaurantsError)</Message>):(
      <>
        <section>
      <div className="sort">
        <button className="sort_veg p-3">Pure Veg</button>
        <button className="sort_veg p-3">Sort By Review</button>
        <button className="sort_veg p-3"> Sort By Ratings</button>
      </div>
      <div className="row mt-4">
        {restaurants? restaurants.map((restaurant)=>(
           <Restaurant key={restaurant._id } restaurant={restaurant}/>
        )):null}
      </div>
    </section>
      </>
    ) }
    
    </>
    
  );
}
