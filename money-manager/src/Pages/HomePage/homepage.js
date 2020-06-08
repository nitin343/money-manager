import React from 'react';
import './homepage.style.scss';
import AnimatedDiv from '../../components/jumbotron.animation/animated.content';
import HF from '../../components/HomePageForm/HF.component';



const HomePage = () => (
   <div>
  
    <div className="jumbotron jumbotron-fluid ">
    <div className='row'>
    <div className='col'>
     
      <img className='image bg-light' src='https://cdn.pixabay.com/photo/2020/04/29/13/11/cartoon-5108855_1280.png' alt='...'/>
    </div>
    <div className='col '>
    <div className="container">
    <AnimatedDiv /> 
    </div>
    </div>
    </div>
 </div>

    <div className='container home1'>
    <div className='home2'> <HF /> </div>
    </div>
    
    </div>
)

export default HomePage;