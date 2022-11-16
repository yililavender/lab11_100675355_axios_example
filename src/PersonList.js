import React, {Component} from 'react'
import {Row,Col,Container, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

export default class PersonList extends Component {
   constructor(props){
       super(props)

        this.state = {
            persons: []
        }
    }

    //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(response => {
            console.log(response.data);
            const persons = response.data.results;
            this.setState({ persons });
        })
    }

    render(){
        return(
            <div>
                {
                   this.state.persons.map(person => (
                       <div>
                        <div className="m-3 p-3" style={{backgroundColor: '#48D1CC', borderRadius:'5px'}}>
                            <p className="pt-3" style={{fontWeight:'bold'}}>{person.name.title} {person.name.first} {person.name.last} - {person.login.uuid}</p>
                            <hr/>
                            <div>
                                <Container>
                                    <Row>
                                        <Col  className="mt-5">
                                            <Row><img style={{ borderRadius:'50%', width:'200px'}} src={person.picture.large}/></Row>
                                        </Col>
                                        <Col >
                                            <Row className="mb-2">User Name: {person.login.username}</Row>
                                            <Row className="mb-2">Gender: {person.gender}</Row>
                                            <Row className="mb-2">Time Zone Description: {person.location.timezone.description}</Row>
                                            <Row className="mb-2">Address: {person.location.street.number} {person.location.street.name}, 
                                            {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode}</Row>
                                            <Row className="mb-2">Email: {person.email}</Row>
                                            <Row className="mb-2">Birth Date and Age: {person.dob.date} ({person.dob.age}) </Row>
                                            <Row className="mb-2">Register Date: {person.registered.date}</Row>
                                            <Row className="mb-2">Phone Number: {person.phone}</Row>
                                            <Row className="mb-2">Cell Number: {person.cell}</Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <hr/>
                       </div>
                   ))
                }
            </div>
        )
    }
}