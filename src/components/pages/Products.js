import React from 'react';
import '../../App.css';
// import Cards from '../Cards';
import '../Cards.css';
import CardItem from '../CardItem';

export default function Products() {
  return (<>

    <h1 className='services'>Our Products</h1>
    <div className='cards'>
      <h1>Intership Opportunities for Students !!</h1>
      <h3> Enroll Now</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/conding.jpg'
              text='C++ Coding Club'
              label='Coming Soon'
              path='/products'
            />
            <CardItem
              src='images/img-1.jpg'
              text='win a trip to bangalore by winning quizez'
              label='To be held on AUG 20 2021  '
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/5.jpg'
              text='Achieve your FAANG DREAM JOB enroll in 2021 batch'
              label='30 % off '
              path='/products'
            />
            <CardItem
              src='images/4.jpg'
              text='Teach your juniors'
              label='Scholarship'
              path='/products'
            />
            <CardItem
              src='images/2.jpg'
              text='Placement Prep'
              label='2 year validation'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/6.jpg'
              text='first year classes'
              label='30 % off '
              path='/products'
            />
            <CardItem
              src='images/4.jpg'
              text='Second year classes'
              label='40% off'
              path='/products'
            />
            <CardItem
              src='images/2.jpg'
              text='Third year classes'
              label='30% off'
              path='/products'
            /><CardItem
              src='images/2.jpg'
              text='Govt. exam Classes'
              label='50% off'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  </>

  );
}
