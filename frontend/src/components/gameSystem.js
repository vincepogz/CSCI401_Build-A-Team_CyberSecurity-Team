import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function GameStart(props) {
    

    return (
        <>     
        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        {...props}
        >
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
            BUILD-A-TEAM: CYBERSECURITY
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>To start, please enter your company name</h4>
            <br />
            <Form
                id="companyConfirm"
                onSubmit={(e) => {
                    e.preventDefault();
                    props.setGame(e.currentTarget.elements.companyConfirm.value, props.company)
                }}
            >
                <InputGroup size="md" >
                    <InputGroup.Text id="inputGroup-sizing-lg" >Your Company:</InputGroup.Text>

                    <Form.Control
                        id="companyConfirm"
                        type="text"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Enter your Company Name here"
                    />

                </InputGroup>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button type="submit" onClick={props.onHide} form="companyConfirm">Confirm</Button>
        </Modal.Footer>

        </Modal>
        </>

    );
    }

export default GameStart;