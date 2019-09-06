import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions';

class GarageIndex extends Component {
  componentWillMount() {
    console.log(this.props.fetchCars());
    this.props.fetchCars();
  }



  renderCars() {
    // console.log(this.props.fetchCars())
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="car-item">
            <h3>{car.brand}</h3>
            <div className="car-make">
              <p>{car.model}</p>
              <p>{car.plate}</p>
            </div>
            <p>{car.owner}</p>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="car-list">
        <Link to="/cars/new">Add a car</Link>
        {this.renderCars()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state)
  return { cars: state.cars };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GarageIndex);
