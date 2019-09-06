import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { destroyCar } from '../actions';
import { Link, withRouter } from 'react-router-dom';

class CarShow extends Component {

  handelClick = (event) => {
    this.props.destroyCar(this.props.history, this.props.car)
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
  return bindActionCreators({ destroyCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarShow);
