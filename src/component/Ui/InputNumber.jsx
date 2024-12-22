import React from 'react';
import Select, { components } from 'react-select';
import countries from "./JsonData";

const optionArray = countries.map(item => ({
  value: item.countryCallingCode,
  image: item.flags.svg,
  label: item.name
}));

const CustomOption = ({ innerProps, label, data }) => (
  <div {...innerProps}>
    <img
      src={data.image}
      alt={label}
      style={{ width: '24px', height: 'auto', marginRight: '8px' }}
    />
 {data.value}
  </div>
);

const PhoneNumber = () => {
  const CustomSingleValue = ({ innerProps, label, data }) => (
    <div className=' SingelValue' {...innerProps}>
      <img
        src={data.image}
        alt={label}
        style={{ width: '24px', height: 'auto', marginRight: '8px' }}
      />
      {data.value}
    </div>
  );

  return (
    <div className='phoneContainer'>
         <input className='numberInput' type='number'  />
      <Select
         defaultValue={optionArray[0]}
      isRtl
        options={optionArray}
        components={{
          Option: CustomOption,
          SingleValue: CustomSingleValue
        }}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            maxWidth:'150px',
            border:state.isFocused?'none':"none",
            borderRadius:'8px'
          }),
        }}
        
      />
   
    </div>
  );
}

export default PhoneNumber;
