import React from "react"

type InputProps = {
    label?: string,
  input?: any;
}

const Input:React.FC<InputProps> = (props) => {
  return (
      <div className="w-full">
          <div>
            <label className="text-basegray text-sm" htmlFor={props.label}>{props.label}</label>
          </div>
      <input
        className="w-full h-10 px-3 mt-1 focus:outline-none text-basegray text-sm border"
        {...props.input}
      />
    </div>
  )
}

export default Input