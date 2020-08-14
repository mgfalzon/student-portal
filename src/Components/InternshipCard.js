import React, {useState} from 'react'
import {Card, Modal, Button} from 'react-bootstrap'
import {FaInfoCircle, FaClock, FaMapMarkerAlt, FaMobile} from 'react-icons/fa'
import {color} from './Utils'

const Item = props => {
    return props.children && (
        <div className='d-flex align-items-center my-2'>
            <div className='mx-3' style={{color: color.nord9}}>
                {React.createElement(props.icon)}
            </div>
            {props.children}
        </div>
    )
}

const ModalItem = ({text, content}) => {
    return content && (
        <div className='d-flex flex-column my-1'>
            <b>{text}</b>
            <small>{content}</small>
        </div>
    )
}

const TagList = ({tags}) => {
    if (!tags) {return false}
    let tagComponents = tags.map(value => (
        <div className='mx-1 badge text-white'style={{backgroundColor: color.nord9}}>{value}</div>
    ))
    return (
        <div className='d-flex mr-3 mt-1 justify-content-end'>
            {tagComponents.slice(0,6)}
        </div>
    )
}

const breakLines = (text) => text ? text.split('<br />').map(item => <p>{item}</p>) : text

/*
const emailDetect = (text) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return text && text.split(' ').map((word) => re.test(word) ? <a href={'mailto:' + word}>{word}</a> : word)
}
*/

const InternshipCard = ({name, office, location, season, description, relatedFields, qualifications, apply, website, additionalInfo, contact}) =>  {
    const [linkStyle, setLinkStyle] = useState({color: color.nord9})
    const [modal, toggleModal] = useState(false)
    const tags = relatedFields && relatedFields.split(',')
    let shortenedDesc = description && description.split(' ').length > 80 ? description.split(" ").splice(0, 80).join(" ").concat('...') : description
    shortenedDesc = breakLines(shortenedDesc)

    return (
        <>
            <Card className='position-relative border-0 rounded shadow-sm my-5 mx-3 p-2'>
                <Card.Body>
                    <div className='d-flex align-items-center'>
                        <h5 className='font-weight-bold'>{name}</h5>
                        <div className='flex-grow-1 d-flex justify-content-end mr-3'>
                            <FaInfoCircle 
                                size={18}
                                style={{...linkStyle, cursor: 'pointer'}}
                                onMouseOver={() => setLinkStyle({color: color.nord10})}
                                onMouseOut={() => setLinkStyle({color: color.nord9})}
                                onClick={() => toggleModal(true)}
                            />
                        </div>
                    </div>
                    <em>{office}</em>
                    <div className='my-4'>
                        <div>
                            <Item icon={FaClock}>{season}</Item>
                            <Item icon={FaMapMarkerAlt}>{location}</Item>
                        </div>
                        <div className='mt-4'>
                            {shortenedDesc}
                        </div>
                    </div>
                    <TagList tags={tags} />
                </Card.Body>
            </Card>
            <Modal centered size='lg' show={modal} onHide={() => toggleModal(false)}>
                <div className='p-4'>
                <Modal.Header className='pb-2 border-0' closeButton>
                    <div className='d-flex flex-column'>
                        <h5 className='font-weight-bold'>{name}</h5>
                        <em>{office}</em>
                    </div>
                </Modal.Header>
                <Modal.Body className='pt-2 pb-3'>
                        <div>
                            <Item icon={FaClock}>{season}</Item>
                            <Item icon={FaMapMarkerAlt}>{location}</Item>
                            <Item icon={FaMobile}>{contact}</Item>
                        </div>
                        <div className='mt-4'>
                            <ModalItem text='Description:' content={breakLines(description)} />
                            <ModalItem text='Qualifications:' content={breakLines(qualifications)} />
                            <ModalItem text='How to Apply:' content={apply} />
                            <small><a href={website}>{website}</a></small><br /><br />
                            <ModalItem text='Additional Info:' content={additionalInfo} />
                        </div>
                </Modal.Body>

                </div>
            </Modal>
        </>
    )
}

export default InternshipCard