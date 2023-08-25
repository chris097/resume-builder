import React from 'react';
import Input from '../input';
import { GrStatusGood } from 'react-icons/gr';

const TechnicalSkill = () => {
    return (
        <div>
            <Input
                handleClick=""
                icon=""
                inputContainer='w-full h-[32px] flex items-center bg-primarygray rounded px-3 mt-1'
                inputStyle='w-full h-full focus:outline-none bg-transparent text-basegray text-xs'
                labelStyle='text-coregray text-xs font-normal'
                label='Skills'
                container='w-full mt-3'
                input={{
                    type: "text",
                    placeholder: "Add atleast 5 skills eg: React.JS"
                }}
            />
            <div>
                <div className='mt-4 flex items-center space-x-2'>
                    <GrStatusGood size={15} color="#D61355" />
                    <span className='text-secondarygray text-sm font-light'>
                        <div>Javascript</div>
                    </span>
                </div>
                <div className='mt-4 flex items-center space-x-2'>
                    <GrStatusGood size={15} color="#D61355" />
                    <span className='text-secondarygray text-sm font-light'>
                        <div>Javascript</div>
                    </span>
                </div>
                <div className='mt-4 flex items-center space-x-2'>
                    <GrStatusGood size={15} color="#D61355" />
                    <span className='text-secondarygray text-sm font-light'>
                        <div>Javascript</div>
                    </span>
                </div>
                <div className='mt-4 flex items-center space-x-2'>
                    <GrStatusGood size={15} color="#D61355" />
                    <span className='text-secondarygray text-sm font-light'>
                        <div>Javascript</div>
                    </span>
                </div>
                <div className='mt-4 flex items-center space-x-2'>
                    <GrStatusGood size={15} color="#D61355" />
                    <span className='text-secondarygray text-sm font-light'>
                        <div>Javascript</div>
                    </span>
                </div>
            </div>
            <div>
                <p className='text-xs mt-8 font-bold text-basegray'>Non Technical Skills</p>
                <div className='flex space-x-2 items-center mt-3'>
                    <Input
                        handleClick=""
                        icon=""
                        inputContainer=''
                        inputStyle=''
                        labelStyle='text-coregray text-xs font-normal'
                        label=''
                        container='mt-0.5'
                        input={{
                            type: "checkbox",
                            placeholder: "Add atleast 5 skills eg: React.JS"
                        }}
                    />
                    <span className='text-xs text-basegray'>Quality Focus</span>
                </div>
                <div className='flex space-x-2 items-center mt-3'>
                    <Input
                        handleClick=""
                        icon=""
                        inputContainer=''
                        inputStyle=''
                        labelStyle='text-coregray text-xs font-normal'
                        label=''
                        container='mt-0.5'
                        input={{
                            type: "checkbox",
                            placeholder: "Add atleast 5 skills eg: React.JS"
                        }}
                    />
                    <span className='text-xs text-basegray'>Quality Focus</span>
                </div>
                <div className='flex space-x-2 items-center mt-3'>
                    <Input
                        handleClick=""
                        icon=""
                        inputContainer=''
                        inputStyle=''
                        labelStyle='text-coregray text-xs font-normal'
                        label=''
                        container='mt-0.5'
                        input={{
                            type: "checkbox",
                            placeholder: "Add atleast 5 skills eg: React.JS"
                        }}
                    />
                    <span className='text-xs text-basegray'>Quality Focus</span>
                </div>
                <div className='flex space-x-2 items-center mt-3'>
                    <Input
                        handleClick=""
                        icon=""
                        inputContainer=''
                        inputStyle=''
                        labelStyle='text-coregray text-xs font-normal'
                        label=''
                        container='mt-0.5'
                        input={{
                            type: "checkbox",
                            placeholder: "Add atleast 5 skills eg: React.JS"
                        }}
                    />
                    <span className='text-xs text-basegray'>Quality Focus</span>
                </div>
                <div className='flex space-x-2 items-center mt-3'>
                    <Input
                        handleClick=""
                        icon=""
                        inputContainer=''
                        inputStyle=''
                        labelStyle='text-coregray text-xs font-normal'
                        label=''
                        container='mt-0.5'
                        input={{
                            type: "checkbox",
                            placeholder: "Add atleast 5 skills eg: React.JS"
                        }}
                    />
                    <span className='text-xs text-basegray'>Quality Focus</span>
                </div>
                <div className='flex space-x-2 items-center mt-3'>
                    <Input
                        handleClick=""
                        icon=""
                        inputContainer=''
                        inputStyle=''
                        labelStyle='text-coregray text-xs font-normal'
                        label=''
                        container='mt-0.5'
                        input={{
                            type: "checkbox",
                            placeholder: "Add atleast 5 skills eg: React.JS"
                        }}
                    />
                    <span className='text-xs text-basegray'>Quality Focus</span>
                </div>
            </div>
        </div>
    );
};

export default TechnicalSkill;