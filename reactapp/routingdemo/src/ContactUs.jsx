import React from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { useState } from "react";

const ContactUs=(event)=>{

    const [validated, setValidated] = useState(false);

    const handleClick=(e)=>{
        e.preventDefault();
        console.log('validating form');
        setValidated(false);
    }

    return (
            <div>
                <center><h3>Contact Us</h3></center>
                <div>
                <Form validated={validated} onSubmit={handleClick}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPhoneNo">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="phone" placeholder="Enter Phone No" />
                        </Form.Group>

                        <Button  type="submit">Submit</Button>
                        
                </Form >
                </div>
            </div>
            )
    }

export default ContactUs;