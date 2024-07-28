import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {motion , AnimatePresence} from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';


const navLinks =[
  {
    title:"This is a fake e-commerce website.",
    href:"#"
  },
  {
    title:"We made it as an use-case to demonstrate that Augmented Reality on the web is on its way to become functional and useful, thanks to the WebXR Device API.",
    href:"#"
  },
  {
    title:"Today, Android Chrome v81 supports WebXR by default. Hopefully other browsers will follow soon so that AR can be used everywhere without any plug-ins. For more information about WebXR, see this official explainer.",
    href:"#"
  },
  {
    title:"This demo was designed and built by the creative team at Lusion",
    href:"#"
  },
  {
    title:"Interested in hiring us to build something beautiful? Contact us at business@lusion.co",
    href:"#"
  },

]


const Navbar = () => {


  const [open , setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  
  const menuVars = {
    initial : {
      scaleY:0,
    },
    animate:{
      scaleY:1,
      transition:{
        duration:0.5,
        ease:[0.12 , 0 , 0.39 , 0]
      }
    },
    exit:{
      scaleY:0,
    }
  }


  return (
    <>
    <nav className='fixed w-full top-0 bg-black z-20'>
      <ul className=' flex items-center justify-between px-12 py-3'>
        <li className='text-xl text-[#FFF]'>SNEAKERS</li>
        <li className='text-[#FFF] cursor-pointer'><MenuIcon sx={{fontSize:30}} onClick={toggleMenu} /></li>
      </ul>
    </nav>
    <AnimatePresence> 
      { open && (
          <motion.div 
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className='fixed left-0 top-0 w-full h-screen origin-top bg-black text-white z-50'>
            <div className='flex flex-col h-full'>
              <div className='flex justify-between px-12 py-3'>
                <h1 className='text-lg text-white'>Sneakers</h1>
                <CloseIcon onClick={toggleMenu} className=' cursor-pointer' fontSize="large" />
              </div>
              <div className='flex flex-col justify-center text-lg max-w-[900px] m-auto px-4'>
                <h1 className='text-4xl mb-10 font-bold max-sm:text-2xl'>ABOUT</h1>
                {
                  navLinks.map((link , index) => {
                    return (
                      <div className=' overflow-hidden'>
                        <MobileNavLink
                          key={index}
                          title={link.title}
                          href={link.href} 
                        />
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </motion.div>
        )}
    </AnimatePresence>
    </>
  )
}

export default Navbar


const MobileNavLink = ({title , href}) => {

  const mobileLinkVars = {
    initial:{
      y:"30vh",
      transition:{
        duration:0.9,
      },
    },
    open:{
      y:0,
      transition:{
        duration:1.3,
      },
    },
  };


  return(
    <motion.div variants={mobileLinkVars} initial="initial" animate="open">
      <p href={href} className='text-2xl text-white mb-5 max-sm:text-sm'>
        {title}
      </p>
    </motion.div>
  )
}
