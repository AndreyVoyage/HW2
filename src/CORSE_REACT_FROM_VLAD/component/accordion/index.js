import React from 'react';

import { db_acc } from './db_acc.json';

import './style.scss';

   

export const Accordion = ( { question, answer }) => {

      return (
      <>
         <section className='accordion'>
  <h1>Accordion</h1>
  <div className='accordion-item selected'>
    <div className='accordion-question'>
                <span>{question }1. What business are you doing?</span>
    </div>
              <p className='accordion-answer'>
                {answer}
      In the past few years India has made attempts
      to get back several historic items. Some historians
      claim that the Kohinoor was taken away from India by force.
    </p>
  </div>
  <div className='accordion-item'>
    <div className='accordion-question'>
      <span>1. What business are you doing?</span>
    </div>
    <p className='accordion-answer'>
      In the past few years India has made attempts
      to get back several historic items. Some historians
      claim that the Kohinoor was taken away from India by force.
    </p>
  </div>
  <div className='accordion-item'>
    <div className='accordion-question'>
      <span>1. What business are you doing?</span>
    </div>
    <p className='accordion-answer'>
      In the past few years India has made attempts
      to get back several historic items. Some historians
      claim that the Kohinoor was taken away from India by force.
    </p>
  </div>
            </section>
            </>
      )
 //  }
   //)
}