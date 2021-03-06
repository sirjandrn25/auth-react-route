import React from 'react'

const InputField = (props) => {
  const base_class = 'grid grid-cols-1 gap-2 items-center w-auto '
  return (
    <div className={base_class + props.className}>
      <label htmlFor='' className='text-lg text-gray-600 capitalize '>
        {props.label}
      </label>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        className='border-2 focus:border-[3px] w-full px-3 py-[6px] rounded-2xl text-lg col-span-3 text-gray-600 focus:outline-none focus:border-cyan-400 focus:shadow-cyan-400/50 shadow'
        placeholder={props.placeholder}
        required={props.required}
        onBlur={props.onBlur}
      />
      {props.error ? <p className='text-red-500'>{props.error}</p> : null}
    </div>
  )
}

export default InputField
