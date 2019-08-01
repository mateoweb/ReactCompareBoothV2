import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import { Link, Route } from "react-router-dom";
import "../App.css";
import StarRatings from "react-star-ratings";
import ShopDetails from "./ShopDetails";

class Shops extends Component {
  state = {};

  render() {
 
    return (
      <Container>
        <ListGroup>
          {this.props.shops.map((detail, index) => (
            <ListGroup.Item key="index">
              <Row>
                <Col>
                  <Image
                    alt=""
                    src={detail.imgURL}
                    width={150}
                    height={150}
                    rounded
                  />
                </Col>
                <Col>
                  <h3 class="shop_title">{detail.nom}</h3>
                  <StarRatings
                    rating={this.props.rating}
                    starRatedColor="#DAA520"
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    starDimension="15px"
                    name="rating"
                    starSpacing="2px"
                  />
                  <p id="resume">{detail.resume}</p>
                </Col>
                <Col>
                  <Row>
                    {detail.startPrice === ""
                      ? "Sur devis"
                      : "A partir de " + detail.startPrice + " €"}
                  </Row>
                  <Row>

 { /* Make route with id, with key= detail.id */}
                      <Link to={"/shopDetail/" + detail.id}>
                      <Button
                        className="detailButton"
                        key={detail.id}
                        variant="primary"
                        onClick={this.props.filterClick}
                      >
                        Détails
                      </Button>
                    </Link>
                    <Route path={`/shopDetail/:id` }  render={() => (
              <ShopDetails
                shops = {this.props.state.shops}
                handleChanges={this.props.handleChanges}
                isClicked={this.props.isClicked}
                filterClick={this.props.filterClick}
                moreFilterClick={this.props.moreFilterClick}
                rating={this.props.rating}
                filteredResults={this.props.filteredResults}
                startDate={this.props.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.props.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) =>
                  this.setState({ startDate, endDate })
                } // PropTypes.func.isRequired,
                focusedInput={this.props.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired
                SelectedShop = {this.props.SelectedShop}
              />
            )} />

                  </Row>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

export default Shops;
