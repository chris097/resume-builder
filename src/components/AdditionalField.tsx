import React from 'react'
import Input from './input';
import { MdDelete } from 'react-icons/md';

type Props = {
  field?: any
  handleRemoveAdditionalLink?: any
  fieldLength?: any
  value?: any
  handleInput?: any
  handleSelect?: any
  twitter?: string
  linkedIn?: string
  website?: string
  placeholder: string
}

const AdditionalField:React.FC<Props> = (props) => {
  return (
      <div className='flex space-x-4 items-center w-full'>
            <Input
                input={{
                  id: props.field,
                  type: 'text',
                  name: props.field,
                  value: props.value,
                  placeholder: props.placeholder,
                  onChange: props.handleInput
                }}
            />
    </div>
  )
}

export default AdditionalField;