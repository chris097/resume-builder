import React from 'react';

type ButtonProps = {
    name: string | any
    color: string
    bg: string
    width: string
    height: string
    type?: 'submit' | 'reset' | 'button' | undefined
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button
            type={props.type ?? "button"}
            className={`
            ${props.bg ?? "bg-red-400"} 
            ${props.color ?? "text-white"} 
            hover:opacity-80
            font-opensans
            text-base
            px-4
            ${props.width ?? "w-44"} 
            ${props.height ?? "h-16"} 
            rounded`
        }>
            {props.name ?? "Edit name"}
        </button>
    )
};

export default Button;