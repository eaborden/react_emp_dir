import React, { Component } from "react";
import {Table} from 'react-bootstrap';
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import EmployeeDetail from "./EmployeeDetail";

// sort code - list.sort((a, b) => (a.<field name> > b.<field name>) ? 1 : 1)

class EmployeeContainer extends Component {
  state = {
    result: {
      results:[]
    },
    search: ""
  };

  componentDidMount() {
    API.search()
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  }

handleInputChange = event => {
  const value = event.target.value;
  //const name = event.target.name;
  this.setState({
    search: value
  });
};

render() {
  // const {person} = this.state;
  const filterResults = this.state.result.results.filter(result => result.name.first.includes(this.state.search))
  //includes is filtering in each typed character
  return (
    <Container>
      <Row>
        <Col size="md-12">
          <Card
            heading={"Employee Directory"}
          />
            <SearchForm
            handleInputChange={this.handleInputChange}
            value={this.state.search}
            />
            {filterResults ? (
              <div>
                {filterResults.map(person => {

                 return (
                    <Table className="mt-4" striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Email</th>
                          <th>Age</th>
                          <th>Picture</th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.state.result.results.map((person) => 
                      <tr key={person.id.value}>
                       <td>{person.id.value}</td>
                       <td>{person.name.first}</td>
                       <td>{person.name.last}</td>
                       <td>{person.email}</td>
                       <td>{person.dob.age}</td>
                       <td><img alt={person.picture.medium} className="img-fluid" src={person.picture.medium} style={{ margin: "0 auto" }}></img></td>
                  </tr>
                  )}
                      </tbody>
                      </Table>
                 )})}
                 </div>
                        ) : (
                          <h3>No Results to Display</h3>
                        )}
                    {/* </Card> */}
                  </Col>
                </Row>
              </Container>

                  
            )}};
export default EmployeeContainer;