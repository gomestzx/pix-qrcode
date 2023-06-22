import React from 'react'
import { IButtonProps } from './types'

export const Button = (props: IButtonProps) => {
  return (
    <>
    <button
            className='w-full md:w-9/12 rounded p-3 text-white font-normal bg-emerald-600 disabled:opacity-50'
            onClick={props.onClick}
            disabled={props.isDisabled}
          >
           {props.label}
    </button>
    </>
  )
}
