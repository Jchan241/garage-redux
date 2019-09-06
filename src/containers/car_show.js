import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCar destroyCar } from '../actions';

class CarShow extends Component {
  componentDidMount() {
    if (!this.props.post) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handelClick = (event) => {
    console.log(this.props.car.id)
  }

  render() {
    console.log(this.props.car);
    if (this.props.car) {
      return (
        <div className="test">
          <h3>{this.props.car.brand}</h3>
          <button onClick={this.handelClick} >destroy car</button>
        </div>
      )
    }
    return (
      <p>nothing</p>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  return {
    car: state.cars.find(p => p.id === idFromUrl)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarShow);
