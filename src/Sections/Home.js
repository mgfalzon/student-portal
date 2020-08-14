import React from 'react'
import {Container, Card, Row} from 'react-bootstrap'
import {NordButton, color} from '../Components/Utils'
import EventCard from '../Components/EventCard'
import InfoModal from '../Components/InfoModal'
import data from '../Data/Events'

const Events = () => {
    const events = []
    for (let i =0; i < 3; i++) {
        if (data[i]) {
            const event = data[i]
            events.push(
                <EventCard 
                    name={event.name}
                    date={event.date} 
                    startTime={event.start_time} 
                    endTime={event.end_time} 
                    location={event.location}
                    description={event.description}
                    rsvp={event.attendance_link}
                />
            )
        }
        return <Row>{events}</Row>
    }
}

const Home = () => (
    <>
        <Container fluid className='mt-4' style={{color: color.nord3}}>
            <Card className='mb-4 mx-4 border-0 shadow-sm rounded'>
                <Card.Body>
                    <Card.Title>Welcome to the Student Portal!</Card.Title>
                    <Card.Text>Alerts will be posted here for events and deadlines</Card.Text>
                </Card.Body>
            </Card>
            <Card className='mb-5 mx-4 border-0 shadow-sm rounded'>
                <Card.Body>
                    <Card.Title className='mb-3'>Quick Links</Card.Title>
                    <NordButton className='mx-3'>Academic Showcase Posters</NordButton>
                    <NordButton className='mx-3'>COVID-19 Email Archive</NordButton>
                </Card.Body>
            </Card>
            <h5 className='text-center font-weight-bold pb-4'>Upcoming Events</h5>
            <Events />
        </Container>
        <InfoModal />
    </>
)

export default Home