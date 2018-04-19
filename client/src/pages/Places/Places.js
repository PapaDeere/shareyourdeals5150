import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Places extends Component {
  state = {
    places: [],
    deal_type: "",
    deal_city: "",
    deal_state: "",
    deal_locationName: "",
    deal_price: "",
    deal_url: "",
    deal_comments: ""
  };

  componentDidMount() {
    this.loadPlaces();
  }

  loadPlaces = () => {
    API.getPlaces()
      .then(res =>
        this.setState({ places: res.data, deal_type: "", deal_city: "", deal_state: "", deal_locationName: "", deal_price: "", deal_url: "", deal_comments: "" })
      )
      .catch(err => console.log(err));
  };

  deletePlace = id => {
    API.deletePlace(id)
      .then(res => this.loadPlaces())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-8 md-offset-2 sm-12">
            <Jumbotron>
              <h2>List of Deals Submitted</h2>
            </Jumbotron>
            {this.state.places.length ? (
              <List>
                {this.state.places.map(place => (
                  <ListItem key={place._id}>
                    <Link to={"/places/" + place._id}>
                      <strong>
                        {place.deal_city}, {place.deal_state} - {place.deal_locationName}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deletePlace(place._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Places;
