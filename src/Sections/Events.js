import React, {useState} from 'react'
import {Container, Row, Col, Form, FormControl, InputGroup} from 'react-bootstrap'
import {FaSearch} from 'react-icons/fa'
import {color} from '../Components/Utils'
import EventCard from '../Components/EventCard'
import data from '../Data/Events'

const Events = () => {
    let events = data.map((event) => (
        <EventCard 
            name={event.name}
            date={event.date} 
            startTime={event.start_time} 
            endTime={event.end_time} 
            location={event.location}
            description={event.description}
            rsvp={event.attendance_link}
        />
    ))
    const [query, setQuery] = useState('')
    events = events.filter(event =>
        event.props.name.includes(query)      || event.props.name.toLowerCase().includes(query)      ||
        event.props.location.includes(query)  || event.props.location.toLowerCase().includes(query) 
    )
    return (
        <Container fluid className='mt-5' style={{color: color.nord3}}>
            <h5 className='text-center font-weight-bold'>Events</h5>
            <Row className='mx-5 py-4'>
                <Col className='mx-auto'>
                    <Form className='p-1 mb-4 bg-white rounded-pill shadow-sm'>
                        <InputGroup className='border-0'>
                            <InputGroup.Prepend>
                                <div className='py-1 my-auto px-3'><FaSearch color={color.nord8}/></div>
                            </InputGroup.Prepend>
                            <FormControl placeholder='Find an event' className='border-0' style={{backgroundColor: 'unset'}} onChange={(e) => setQuery(e.target.value)} />
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
            <Row>{events}</Row>
        </Container>
    )
}

export default Events