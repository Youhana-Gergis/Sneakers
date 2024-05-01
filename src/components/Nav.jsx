import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
const Nav = () => {
  return (
    <>
      <div className='flex items-center justify-between z-40 fixed pt-14 max-md:pt-4'>
        <CloseIcon fontSize="large" className='text-black cursor-pointer bg-white hover:text-white hover:bg-black' />
      </div>
    </>
  )
}

export default Nav
