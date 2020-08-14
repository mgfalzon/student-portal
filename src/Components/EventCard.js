import React, {useState} from 'react'
import {Col, Card} from 'react-bootstrap'
import {FaBriefcase, FaInfoCircle, FaWrench, FaStar} from 'react-icons/fa'
import {color} from './Utils'

const formatDate = (data) => (
    data.slice(5,7) + '/' + data.slice(-2) +  '/' + data.slice(0,4)
)

const formatTime = (data) => (
    data.slice(0,2) > 12 ? (data.slice(0,2) - 12) + data.slice(2,5) + 'pm' : data.slice(0,5) + 'am'
)

const getIcon = (str) => {
    str = str.toLowerCase()
    if (str.includes('internship')) {
        return <FaBriefcase />
    } else if (str.includes('information') || str.includes('info')) {
        return <FaInfoCircle />
    } else if (str.includes('workshop')) {
        return <FaWrench />
    } else {
        return <FaStar />
    }
}

const CardFace = (props) => {
    const [shadow, setShadow] = useState('')
    const style = {
        position: 'absolute',
        minHeight: 250,
        minWidth: 250,
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transition: 'all .15s',
        cursor: 'pointer',
        transform: props.back ? 'rotateY(180deg)' : ''
    }
    return (
        <Card className={'py-2 mb-4 mx-4 border-0 rounded shadow-sm ' + shadow}
            style={style}
            onClick={props.onClick}
            onMouseOver={() => setShadow('shadow')}
            onMouseOut={() => setShadow('')}
        ><Card.Body>{props.children}</Card.Body></Card>
    )
}

const CardSpace = (props) => (
    <Card className={'py-2 mb-4 mx-4 border-0 rounded'} style={{visibility: 'hidden', minWidth: 250, minHeight: 300}}>
        <Card.Body>{props.children}</Card.Body>
    </Card>
)

const EventCard = ({name, date, startTime, endTime, location, description, rsvp}) => {
    const [flipped, setFlipped] = useState(true)
    const [transform, setTransform] = useState('')
    const [linkStyle, setLinkStyle] = useState({color: color.nord8})
    name = name.split(' ').length > 6 ? name.split(" ").splice(0, 6).join(" ") : name
    const frontSpace = 
        <div>
            <div className='d-flex justify-content-center' style={{fontSize: '3rem'}}>
                <FaWrench />
            </div>
            <h5 className='text-center my-3 mx-3'>{name}</h5>
            <p className='m-1'><b className='mr-3'>Date: </b>{formatDate(date)}</p>
            <p className='m-1'><b className='mr-3'>Time: </b>{formatTime(startTime) + ' - ' + formatTime(endTime)}</p>
            <div className='mt-3 text-center small'>{location}</div>
        </div> 
    const backSpace = 
        <div> 
            <p className='m-0'><b className='mr-3'>Description: </b></p>
            <p className='small text-center mx-1 mt-2'>{description}</p>
            <div className='d-flex flex-column justify-content-center align-items-center small mt-2'>
                <a className='text-decoration-none' style={linkStyle}  
                    href={rsvp} 
                    target='_blank'
                    onMouseOver={() => setLinkStyle({color: '#5580ab'})}
                    onMouseOut={() => setLinkStyle({color: color.nord9})}
                >RSVP</a>
            </div>
        </div>
    const [space, setSpace] = useState(frontSpace)

    const flipCard = {
        position: 'relative',
        transition: 'transform .8s',
        transformStyle: 'preserve-3d',
        transform: transform 
    }

    const flip = () => {
        if (flipped) {
            setTransform('rotateY(-180deg)');
            setSpace(backSpace);
        } else {
            setTransform('rotateY(0deg)') 
            setSpace(frontSpace);
        }
        setFlipped(!flipped)
    }

    return (
        <Col md='4' style={{perspective: 1000}}>
            <div style={flipCard}>
                <CardFace onClick={flip}>
                    <div className='d-flex justify-content-center' style={{fontSize: '3rem'}}>
                        {getIcon(name)}
                    </div>
                    <h5 className='text-center my-3 mx-3'>{name}</h5>
                    <p className='m-1'><b className='mr-3'>Date: </b>{formatDate(date)}</p>
                    <p className='m-1'><b className='mr-3'>Time: </b>{formatTime(startTime) + ' - ' + formatTime(endTime)}</p>
                    <div className='mt-3 text-center small'>{location}</div>
                </CardFace>
                <CardFace onClick={flip} back>
                    <p className='m-0'><b className='mr-3'>Description: </b></p>
                    <p className='small text-center mx-1 mt-2'>{description}</p>
                    <div className='d-flex flex-column justify-content-center align-items-center small mt-2'>
                        <a className='text-decoration-none' style={linkStyle}  
                            href={rsvp} 
                            target='_blank'
                            onMouseOver={() => setLinkStyle({color: '#5580ab'})}
                            onMouseOut={() => setLinkStyle({color: color.nord9})}
                        >RSVP</a>
                    </div>
                </CardFace>
                <CardSpace>{space}</CardSpace>
            </div>
        </Col>
    )
}

export default EventCard