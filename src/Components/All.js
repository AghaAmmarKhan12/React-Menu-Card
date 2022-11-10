import React,{useState} from 'react'
import './All.css'
import MenuData from './MenuData';

const All = () => {

const [data,setData] = useState(MenuData);

const FilterResult=(cartItem) => {
  const result = MenuData.filter((curdate) => {
    return curdate.category === cartItem;
  });
setData(result); 
console.log(result)
};

  return (
<>
  
<div className='navbar'>
      <button onClick={()=>setData(MenuData)}>All</button>
      <button onClick={()=>FilterResult('Breakfast')}>Breakfast</button>
      <button onClick={()=>FilterResult('Lunch')}>Lunch</button>
      <button onClick={()=>FilterResult('Shakes')}>Shakes</button>
    </div>
    <div className='allMenu'>{
        data.map((menu)=> {
          return(
            <div className='menuChart' key={menu.id}>
              <div className='imgdiv'><img src={menu.images} className='imgSet' alt=''/></div>
              <div className='mealDetail'>
              <h3>{menu.meal} <span className='prices'>${menu.price}</span></h3>
              <div className='details'><p>{menu.mealDetail}</p></div>
              </div>
              </div>   
          )
        }) 
      }
      </div>
      </>  
  );
}

export default All