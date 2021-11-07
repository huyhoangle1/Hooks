import "./styles.css";
import { useReducer, useRef } from "react";

//initial
const initState = {
  job: "",
  jobs: []
};
//action
const SET_VALUE_JOB = "set_Value_Job";
const ADD_JOB = "add_Job";
const DELETE_JOB = "delete_Job";

const setValueJob = (payload) => {
  return {
    type: SET_VALUE_JOB,
    payload
  };
};
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload
  };
};

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload
  };
};
//reducer
const reducer = (state, action) => {
  // console.log('action:',action)
  // console.log('preState:',state)

  let newState;

  switch (action.type) {
    case SET_VALUE_JOB:
      newState = {
        ...state,
        job: action.payload
      };
      break;

    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      };
      break;

    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: newJobs
      };
      break;

    default:
      throw new Error("invalidate action!");
  }
  // console.log('new state:',newState)

  return newState;
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;

  const inputRef = useRef();

  const handleAdd = () => {
    dispatch(addJob(job));
    dispatch(setValueJob(""));
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <input
        ref={inputRef}
        value={job}
        onChange={(e) => dispatch(setValueJob(e.target.value))}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {jobs.map((item, index) => (
          <li key={index}>
            <span style={{ display: "inline-block", minWidth: "100px" }}>
              {item}
            </span>
            <span
              className="btn-delete"
              onClick={() => {
                dispatch(deleteJob(index));
              }}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
