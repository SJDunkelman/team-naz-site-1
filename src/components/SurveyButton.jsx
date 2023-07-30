import React from "react";
import pkg from '@typeform/embed-react';
const { PopupButton } = pkg;


export default function SurveyButton() {
    return (
      <p>
          <PopupButton
            id='y6r8249g'
            className='px-4 py-2 rounded-xl text-lg font-medium bg-indigo-500 hover:bg-indigo-600 transition ease-in-out duration-200 text-white w-min whitespace-nowrap'
          >
            Get Started Now
          </PopupButton>
        </p>
    )
}