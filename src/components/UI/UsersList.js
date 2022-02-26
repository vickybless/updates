import React, { useState } from "react";

const UsersList = (props) => {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredLogOne, setEnteredLogOne] = useState("");
  const [enteredLogTwo, setEnteredLogTwo] = useState("");
  const [enteredLogThree, setEnteredLogThree] = useState("");
  //this is to prevent the default form from submitting
  const addUserHandler = (event) => {
    event.preventDefault();

    setEnteredDate("");
    setEnteredLogOne("");
    setEnteredLogTwo("");
    setEnteredLogThree("");

    props.onAddUser(enteredDate, enteredLogOne, enteredLogTwo, enteredLogThree);
  };

  //   console.log(enteredDate, enteredLogOne, enteredLogTwo, enteredLogThree);
  //Reseting the entered state to an empty state. Also define the "Value element in the form to the states."

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const logOneChangeHandler = (event) => {
    setEnteredLogOne(event.target.value);
  };

  const logTwoChangeHandler = (event) => {
    setEnteredLogTwo(event.target.value);
  };
  const logThreeChangeHandler = (event) => {
    setEnteredLogThree(event.target.value);
  };
  return (
    <div className='container-fluid'>
      <div className='card shadow mx-auto' style={{ width: "800px" }}>
        <div className='card-body '>
          {/* Form Start */}
          <form onSubmit={addUserHandler}>
            <div className='mb-3 d-flex justify-content-center'>
              <label htmlFor='date' className='form-label'>
                Date:
              </label>
              <input
                type='date'
                className='form-control'
                id='date'
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
            <div className='mb-3 d-flex justify-content-center'>
              <label htmlFor='logone' className='form-label'>
                Log1:
              </label>
              <input
                type='text'
                className='form-control'
                id='logone'
                value={enteredLogOne}
                onChange={logOneChangeHandler}
              />
            </div>
            <div className='mb-3 d-flex justify-content-center'>
              <label htmlFor='logtwo' className='form-label'>
                Log2:
              </label>
              <input
                type='text'
                className='form-control'
                id='logtwo'
                value={enteredLogTwo}
                onChange={logTwoChangeHandler}
              />
            </div>
            <div className='mb-3 d-flex '>
              <label htmlFor='logThreee' className='form-label'>
                Log3:
              </label>
              <input
                type='text'
                className='form-control'
                id='logthree'
                value={enteredLogThree}
                onChange={logThreeChangeHandler}
              />
            </div>
            <button
              type='submit'
              className='d-flex mx-auto'
              onClick={props.onClick}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
