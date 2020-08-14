import React, {useState} from 'react'
import {FaBars, FaUserCircle, FaCog} from 'react-icons/fa'
import {BrowserRouter as Router, NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import {color} from './Utils'

const SidebarLink = ({icon, link}) => {
    const defaultStyle = {transition: 'all .15s'}
    const inactive = {color: color.nord6} 
    const hover = {color: color.nord8} 
    const active = {backgroundColor: '#353b49', color: color.nord8} 
    const [style, setStyle] = useState(inactive)
    let id = link.toLowerCase().replace(/\s/g, '')
    if(id == 'home') {id = '/'}
    return (
        <NavLink className='py-2 pl-3 text-decoration-none' exact to={id} style={{...style, ...defaultStyle}}
            activeStyle={active}
            onMouseOver={() => setStyle(hover)}
            onMouseOut={() =>  setStyle(inactive)}
        >
            <div className='d-inline mx-3 my-auto py-0'>{icon}</div>
            {link}
        </NavLink>
    )
}

const Sidebar = (props) => {
    const [open, setOpen] = useState(true)
    const [sidebarActive, setSidebarActive] = useState({})
    const [contentActive, setContentActive] = useState({})
    const sidebarStyle = {
        minWidth: '15.5rem',
        maxWidth: '15.5rem',
        minHeight: '100vh',
        backgroundColor: color.nord1,
        boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.1)',
        transitionDuration: '.4s',
        fontSize: '.9rem',
        ...sidebarActive
    }
    const contentStyle = {
        width: 'calc(100% - 15.5rem)',
        backgroundColor: color.nord6,
        transition: 'all .4s',
        ...contentActive
    }
    const toggleSidebar = () => {
        if (open) {
            setSidebarActive({marginLeft: '-15.5rem'})
            setContentActive({width: '100%', margin: '0'})
        } else {
            setSidebarActive({})
            setContentActive({})
        }
        setOpen(!open)
    }

    const data = props.data
    const sections = []
    for (let header in data.sections) {
        sections.push(
            <p 
                className='small text-uppercase font-weight-bold pb-3 pt-4 mb-0'
                style={{color: color.nord4, paddingLeft: '2rem'}}
            >{header}</p>
        )
        const section = data.sections[header] 
        for (let index in section.links) {
            const link = section.links[index]
            const icon = React.createElement(section.icons[index])
            sections.push(<SidebarLink link={link} icon={icon}></SidebarLink>)
        }
    }

    return (
        <div className='d-flex'>
            <Router basename='student-portal'>
                <div style={sidebarStyle}>
                    <h5 className='pt-4 text-center' style={{color: color.nord4}}>{data.title}</h5>
                    <Nav className='flex-column'>{sections}</Nav>
                </div>
                <div style={contentStyle}>
                    {React.cloneElement(props.children[0], {onClick: () => toggleSidebar()})}
                    {props.children[1]}
                </div>
            </Router>
        </div>
    )
}

const MenuBarItem = (props) => {
    const defaultStyle = {cursor: 'pointer'}
    const [style, setStyle] = useState({color: color.nord3})
    if (!props.href) {
        return (
            <div className='text-decoration-none' style={{...style, ...defaultStyle}}
                onMouseOver={() => setStyle({color: color.nord2})}
                onMouseOut={() =>  setStyle({color: color.nord3})}
            >{props.children}</div>
        )
    } else {
        return (
            <NavLink className='text-decoration-none' exact to={props.href} style={{...style, ...defaultStyle}}
                activeStyle={{color: color.nord8}}
                onMouseOver={() => setStyle({color: color.nord2})}
                onMouseOut={() =>  setStyle({color: color.nord3})}
            >{props.children}</NavLink>
        )
    }
}

const Menubar = (props) => {
   const clickable = {cursor: 'pointer'} 
   return (
        <Navbar expand='lg' className='rounded bg-white shadow-sm px-4 py-2 mt-3 mx-4' style={{color: color.nord3}}>
            <MenuBarItem>
                <FaBars className='ml-1' onClick={() => props.onClick()}/>
            </MenuBarItem>
            <Navbar.Brand className='mx-auto' style={{color: color.nord3}}>
                Federal Fellows | Global Fellows in Washington, D.C.
            </Navbar.Brand>
            <Nav className='mr-1' style={{fontSize: '1.2rem'}}>
                <MenuBarItem href='/profile'><FaUserCircle className='mr-3' style={clickable}/></MenuBarItem>
                <MenuBarItem><FaCog /></MenuBarItem>
            </Nav>
        </Navbar>
   )
}

const Menu = (props) => (
    <Sidebar data={props.data}>
        <Menubar />
        {props.children}
    </Sidebar>
)

export default Menu