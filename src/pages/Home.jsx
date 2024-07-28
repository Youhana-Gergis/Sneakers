import React,{useState} from 'react';
import { products } from '../constant';
import { Tilt } from 'react-tilt';
import {motion , AnimatePresence} from 'framer-motion';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseIcon from '@mui/icons-material/Close';
import CursorAnimated from '../components/CursorAnimated';


const ProductId = ({icon, name, price, path}) => {
  return (
        <>
          <motion.div  className='max-lg:px-[50px] max-md:px-[20px] max-sm:px-[5px] max-lg:w-full flex justify-center flex-col' >
              <Tilt options={{max:45,speed:450,scale:1}} >
                  <div className='w-full flex flex-col'>
                    <Link to={`/${path}`}><img src={icon} alt="" className='w-full h-full rounded-2xl cursor-pointer'/></Link>
                      <div className='flex items-center justify-between text-lg text-[#FFF] px-4 mt-2'>
                          <h3>{name}</h3>
                          <h3>{price}</h3>
                      </div>
                  </div>
              </Tilt>
          </motion.div>
        </>
    )
}

const CartVars = {
  initial : {
    scaleX:0,
  },
  animate:{
    scaleX:1,
    transition:{
      duration:0.5,
      ease:[0.12 , 0 , 0.39 , 0]
    }
  },
  exit:{
    scaleX:0,
  }
}


const Home = () => {
  const [open , setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  
  const [cartItems , setCartItems] = useState({1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0})
  const addToCart = (id) => {
      setCartItems(cartItems => ({...cartItems, [id] : cartItems[id] + 1 }));
  }

  const subFromtCart = (id) => {
    setCartItems(cartItems => ({...cartItems, [id] : cartItems[id] - 1}))
  }

  const removeFromtCart = (id) => {
    setCartItems(cartItems => ({...cartItems, [id] : cartItems[id] = 0}))
  }

  const totalAmount = () => {
    var amount = 0;
    for(const key in cartItems){
      if(cartItems[key] > 0){
        let productInfo = products.find(product => product.id === Number(key));
        amount += Math.floor(cartItems[key] * productInfo.price );
      }
    }
    return amount;
  }


  return (
    <>
    <CursorAnimated />
        <div onClick={toggleMenu} className='fixed right-0 top-24 bg-white w-14 h-14 flex items-center justify-center cursor-pointer'>
        <ShoppingCartOutlinedIcon  />
      </div>
      <div className=' pt-20 pl-20 max-md:pl-10'>
        <h1 className='text-8xl font-bold max-w-lg text-[#FFF] max-md:text-6xl max-sm:text-4xl '>AR-FAKE SNEAKERS</h1>
        <h6 className='mt-20 max-w-lg text-2xl text-[#FFF] max-md:text-1xl'>An imaginary e-shop demonstrating the latest features of Augmented Reality using WebXR without any plug-ins.</h6>
      </div>
      <ul className='mt-20 grid grid-cols-2 max-lg:grid-cols-1 gap-10 max-md:px-[30px] max-sm:px-[10px] lg:px-[50px] justify-center w-[100%]'>
        {products.map((product) => (
          <li key={product.id}>
            <ProductId 
              {...product}
             />
             <div className=' flex items-center justify-center w-full'>
              <button className='relative p-4 text-center flex justify-center px-8 py-2 bg-white isolation-auto z-10 border-2 border-black before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-black before:-z-10 hover:text-[#FFF]  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 max-md:mt-5' onClick={() => addToCart(product.id)}>Add To Cart</button>
             </div>
          </li>
        ))}
      </ul>
      <AnimatePresence>
        {open && (
          <motion.div variants={CartVars} exit="exit" initial="initial" animate="animate" className='fixed right-0 top-[-10px] h-screen bg-black mt-14 w-96 origin-right overflow-y-scroll py-5 px-3 max-sm:w-full z-20 text-white' >
            <div className='flex items-center justify-between bg-slate-200 p-3 text-black'>
              <h1 className='text-2xl font-bold'>Shopping</h1>
              <CloseIcon onClick={toggleMenu} className=' cursor-pointer' fontSize="medium" />
            </div>
            <p className='text-3xl font-bold text-center py-3'>Total:<span className=' text-red-500 font-normal'>${totalAmount()}</span> </p>
              {products.map(product => {
                if(cartItems[product.id] > 0){
                  return (
                    <>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center gap-1'>
                          <img src={product.icon} alt="" width={150} height={150} />
                          <div className='flex flex-col items-center'>
                            <span className='font-bold'>Quantity</span>
                            <p>{(cartItems[product.id])}</p>
                          </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                          <button className=' p-2 bg-red-500 text-white text-lg' onClick={ () => removeFromtCart(product.id)}>Remove</button>
                          <button className=' p-1 bg-green-500 text-white' onClick={ () => addToCart(product.id)}>+</button>
                          <button className=' p-1 bg-red-500 text-white text-lg' onClick={ () => subFromtCart(product.id)}>-</button>
                        </div>
                      </div>
                      <div className='flex space-x-4 items-center justify-between my-5'>
                        <div className='flex items-center flex-col px-2'>
                          <span className='font-bold'>Product Name</span>
                          <p>{product.name}</p>
                        </div>
                          _
                        <div className='flex items-center flex-col px-2'>
                          <span className='font-bold'>Product Price</span>
                          <p>${product.price}</p>
                        </div>
                      </div>
                      <hr className='w-full border border-stone-500 mb-2' />
                    </>
                  )
                }
              })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}




export default Home
