import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'

const apiGet = (url) => (
    Promise.resolve (
        fetch(url).then(resp => resp.json()).catch(error => {console.log('fetch error')})
    )
)

const NordButton = (props) => {
    const [bg, setBg] = useState(color.nord8)
    return (
        <Button style={{backgroundColor: bg, border: 'none'}}
            className={props.className}
            onMouseOver={() => setBg('#6fb2c6')}
            onMouseOut={() => setBg(color.nord8)}
            onClick={props.onClick}
        >{props.children}</Button>
    )
}

const NordButtonDark = (props) => {
    const [shadow, setShadow] = useState(' shadow-sm')
    return (
        <Button style={{backgroundColor: color.nord0, border: 'none'}}
            className={props.className + shadow}
            onMouseOver={() => setShadow(' shadow')}
            onMouseOut={() => setShadow(' shadow-sm')}
        >{props.children}</Button>
    )
}

const color = {
    // Polar Night
    nord0: '#2E3440', nord1: '#3B4252', nord2: '#434C5E', nord3: '#4C566A',
    // Snow Storm
    nord4: '#D8DEE9', nord5: '#E5E9F0', nord6: '#ECEFF4',
    // Frost
    nord7: '#8FBCBB', nord8: '#88C0D0', nord9: '#81A1C1', nord10: '#5E81AC',
    // Aurora
    nord11: '#BF616A', nord12: '#D08770', nord13: '#EBCB8B', nord14: '#A3BE8C', nord15: '#B48EAD' 
}

export {apiGet, NordButton, NordButtonDark, color}