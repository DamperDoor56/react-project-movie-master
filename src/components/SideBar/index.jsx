import React, { useState }from 'react'
import {Links} from '../../Data/data'
import Item from '../item/index'
const SideBar = () => {
    const [open,setOpen] = useState(false)
    return (
        <div>
            <div>
                <svg
                 width="18"
                 height="12"
                 viewBox="0 0 18 12"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
                 fill="#8F8F8F"/>
                </svg>
                <div>
                    {Links.map(({text, to, svg}) => <Item to={to} text={text} svg={svg}>{text}</Item>)}
                </div>
            </div>
        </div>)
}

export default SideBar;