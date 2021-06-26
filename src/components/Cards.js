import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Intership Opportunities for Students !!</h1>
      <h3> Enroll Now</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/3.jpg'
              text='Buy class notes made by toppers'
              label='Coming Soon'
              path='/products'
            />
            <CardItem
              src='images/1.jpg'
              text='Mentorship by Teachers Specialized on that Domain'
              label='20% off'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/5.jpg'
              text='Complete your IIT DREAM Enroll for GATE 2021 & 2020 now'
              label='30 % off '
              path='/products'
            />
            <CardItem
              src='images/4.jpg'
              text='Earn while you study program'
              label='Scholarship'
              path='/products'
            />
            <CardItem
              src='images/2.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='SEM-6'
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
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
