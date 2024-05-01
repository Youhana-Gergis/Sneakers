import React from 'react'
import six from '../assets/six.png';
import { Link } from 'react-router-dom';
const Product6 = () => {
  return (
    <>
        <div className='flex flex-col items-center  justify-center px-24 mx-24 max-lg:px-0 max-md:mx-0 -z-20 pt-[53px]'>
            <div className=' relative bg-white w-full  h-full z-40'>
                <img src={six} alt="" style={{width:"100%"}} />
                <Link to='/modelCan6'>
                    <button className='absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2  left-1/2 bottom-[-40px] flex justify-center px-8 py-2 bg-white isolation-auto z-10 border-2 border-black before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-black before:-z-10 hover:text-[#FFF]  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700' >View in 3D</button>
                </Link>
            </div>
            <div className='w-full max-md:px-5'>
                <div className='flex justify-between w-full pt-20'>
                    <h2 className=' font-bold text-4xl text-white'>The Basic</h2>
                    <span className='text-2xl text-white'>$150</span>
                </div>
                <hr className='w-full border border-black-600 mt-4' />
                <div className='w-full flex items-center justify-between pt-5 max-md:flex-col'>
                    <p className='max-w-[350px] max-md:max-w-full text-lg text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab voluptatibus porro ex doloremque earum nesciunt vero libero mollitia fuga, voluptas deserunt et atque deleniti omnis, dolore reprehenderit, ullam modi tempore.</p>
                    <Link to='/home'>
                        <button className='relative p-4 text-center  flex justify-center px-8 py-2 bg-white isolation-auto z-10 border-2 border-black before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-black before:-z-10 hover:text-[#FFF]  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 max-md:mt-5'
                        >Back To Home</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Product6
