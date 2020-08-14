import React from 'react'
import {Modal} from 'react-bootstrap'
import {FaInfoCircle} from 'react-icons/fa'
import {color} from './Utils'

class InfoModal extends React.Component {
    constructor() {
        super()
        this.state = {showModal: false} 
    }
    componentDidMount() {
        let visited = localStorage["alreadyVisited"]
        if (visited) {
             this.setState({ showModal: false })
        } else {
             localStorage["alreadyVisited"] = true
             this.setState({ showModal: true})
        }
    }
    render() {
        return (
        <Modal size='lg' show={this.state.showModal} onHide={() => this.setState({showModal: false})}>
            <div className='p-4'>
                <Modal.Header className='pb-2 border-0' closeButton>
                        <h5 className='font-weight-bold'>Welcome to my Student Portal!</h5>
                </Modal.Header>
                <Modal.Body className='pt-2 pb-3'>
                    <p className='pl-4 pr-5'>
                        This is a demo of the FGSM Student Portal Project. Many of features available in the real portal are not present in this demo.
                    </p>
                    <p className='pt-2'>
                        <b>Active Sections: </b><br />
                        <ul className='my-2'>
                            <li className='my-1'>Home</li>
                            <li className='my-1'>Events</li>
                            <li className='my-1'>Internships</li>
                        </ul>
                    </p>
                    <p className='pt-2'>
                        <b>Additional Notes: </b><br />
                        <ul className='my-2'>
                            <li className='my-1'>Click on <em>Event Cards</em> for more details</li>
                            <li className='my-1'>Click on the <FaInfoCircle  className='mx-1' style={{color: color.nord9}}/> to reveal more information about <em>Internship Offerings</em></li>
                        </ul>
                        
                    </p>
                </Modal.Body>
            </div>
        </Modal>
        )
     }
}

export default InfoModal