import React from 'react';
import css from './FeedbackOptions.module.css'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return ( <ul className={css.list}>
    {options.map(option =>
      <li key={option}>
          <button className={css.button} onClick={onLeaveFeedback} type='button' name={option}>{option}</button>
      </li>
      )}   
    </ul>
  )
}
