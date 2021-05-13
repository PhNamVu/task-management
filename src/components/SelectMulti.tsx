import React from 'react'

import Select, { components } from 'react-select'
import { colourOptions } from '../doc/data';


const MultiValueLabel = (props : any) => {
  return (
    <div>
      <components.MultiValueLabel {...props} />
    </div>
  );
};
const randomColor = Math.floor(Math.random()*16777215).toString(16);
console.log(randomColor);
export const SelectMulti = () => (
  <Select
    closeMenuOnSelect={false}
    components={{ MultiValueLabel }}
    styles={{
      multiValueLabel: base => ({
        ...base,
        backgroundColor: `#${randomColor}`,
        color: 'white',
      }),
    }}
    defaultValue={[colourOptions[4], colourOptions[5]]}
    isMulti
    options={colourOptions}
  />
);