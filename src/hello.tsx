//import * as React from 'react'
import React from 'react'
import Select from 'react-select';
import {OptionsType} from "react-select/lib/types";

type OptionType = {
  value: string,
  label: string
}

const options: OptionsType<OptionType> = [
  {value: '1', label: 'aaaaaaa'},
  {value: '2', label: 'bbbbbb'},
  {value: '3', label: 'ccccccc'},
  {value: '4', label: 'ddddddd'},
  {value: '5', label: 'eeeeeee'},
  {value: '6', label: 'fffffff'},
  {value: '7', label: 'ggggggg'},
  {value: '8', label: 'hhhhhhh'},
  {value: '9', label: 'iiiiiii'},
  {value: '10', label: 'jjjjjjj'},
  {value: '11', label: 'kkkkkkk'},
  {value: '12', label: 'lllllll'},
];

export default function Hello() {
  return <div className='hello'>
    <h1>Hello React Select</h1>
    <Select options={options} className='mySelectRoot' classNamePrefix='mySelect'/>
  </div>
};
