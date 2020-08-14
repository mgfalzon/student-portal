import React, {useState} from 'react'
import {Container, Row, Col, Form, FormControl, InputGroup} from 'react-bootstrap'
import {FaSearch} from 'react-icons/fa'
import {color} from '../Components/Utils'
import InternshipCard from '../Components/InternshipCard'
import data from '../Data/Internships'

const Internships = () => {
    let events = data.map((event) => (
        <InternshipCard 
            name={event.name}
            office={event.office}
            location={event.location}
            season={event.season}
            description={event.description}
            relatedFields={event.relatedFields}
            qualifications={event.qualifications}
            apply={event.apply}
            website={event.website}
            additionalInfo={event.additionalInfo}
            contact={event.contact}
        />
    ))
    const [query, setQuery] = useState('')
    const queryFunction = (str) => str && (str.includes(query) || str.toLowerCase().includes(query))
    events = events.filter(event =>
        queryFunction(event.props.name)        || queryFunction(event.props.office) ||
        queryFunction(event.props.location)    || queryFunction(event.props.season) || 
        queryFunction(event.props.description) || queryFunction(event.props.relatedFields) 
    )
    return (
        <Container fluid className='mt-5' style={{color: color.nord3}}>
            <h5 className='text-center font-weight-bold'>Internships</h5>
            <Row className='mx-5 pt-4'>
                <Col className='mx-auto'>
                    <Form className='p-1 mb-4 bg-white rounded-pill shadow-sm'>
                        <InputGroup className='border-0'>
                            <InputGroup.Prepend>
                                <div className='py-1 my-auto px-3'><FaSearch color={color.nord8}/></div>
                            </InputGroup.Prepend>
                            <FormControl placeholder='Search internships' className='border-0' style={{backgroundColor: 'unset'}} onChange={(e) => setQuery(e.target.value)} />
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
            <Col>{events}</Col>
        </Container>
    )
}

export default Internships