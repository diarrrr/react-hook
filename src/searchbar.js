import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import { Form } from 'react-bootstrap';


export default class SearchBar extends React.Component {
    render(){
        return(
            <>
            <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Search
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              
            />
          </InputGroup>
          </>
        )
    }
}

