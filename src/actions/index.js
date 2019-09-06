// TODO: add and export your own actions
const url = 'https://wagon-garage-api.herokuapp.com/my-garage/cars';

export function fetchCar(id) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then(response => response.json());

  return {
    type: 'FETCH_CAR',
    payload: promise
  }
}

export function fetchCars() {
  const promise = fetch(url)
    .then(response => response.json());

  // console.log(promise)

  return {
    type: 'FETCH_CARS',
    payload: promise
  };
}

export function destroyCar(history, car) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${car.id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(() => history.push(""));

  return {
    type: 'DESTROY_CAR',
    payload: car
  };
}

export function createCar(body, callback) {
  const request = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);
  // const body = { brand, model, owner, plate };
  // const promise = fetch(url, {
  //   method: 'POST',
  //   headers: {
  //     'Content-type': 'application/json'
  //   },
  //   body: JSON.stringify(body)
  // }).then(response => response.json());

  return {
    type: 'CAR_CREATED',
    payload: request
  };
}
