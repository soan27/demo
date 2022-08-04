import React, { useReducer, useRef } from "react";

const initState = {
  job: "",
  jobs: [],
};

const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};
const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: newJobs,
      };
      break;
    default:
      throw new Error("Invalid Case");
  }
  return newState;
};
function TodoList() {
  const [state, dispatch] = useReducer(reducer, initState);
  const refInput = useRef();
  const { job, jobs } = state;
  const handleSubmit = () => {
    if (job != "") {
      dispatch(addJob(job));
      dispatch(setJob(""));
    }
    refInput.current.focus();
  };

  return (
    <div className="todoList">
      <h1 className="h1-todoList">TodoList</h1>
      <div className="inputField">
        <input
          ref={refInput}
          placeholder="Enter todo..."
          value={job}
          onChange={(e) => dispatch(setJob(e.target.value))}
        />
        <button onClick={handleSubmit}>
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}>
              <i class="fas fa-trash"></i>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
