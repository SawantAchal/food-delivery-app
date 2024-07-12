import React, { useContext } from 'react'
import {StoreContext} from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {
    // diplay food list using context api
    const {food_list} = useContext(StoreContext)
  return (
    <div className='mt-8'>
        <h1 className='text-[max(2vw,24px)] font-bold'>Top dished near you</h1>
        <div className='grid grid-cols-auto-fill-240 gap-8 mt-8 gap-y-12'>
            {
                food_list.map((item, index) => {
                    //to filter add by category
                    if (category==="All" || category===item.category) {
                        return (
                            <FoodItem key={index} id={item._id} image={item.image} name={item.name} description={item.description} price={item.price} category={item.category}/>
                        )
                    }
                })
            }
        </div>
    </div>
  )
}

export default FoodDisplay