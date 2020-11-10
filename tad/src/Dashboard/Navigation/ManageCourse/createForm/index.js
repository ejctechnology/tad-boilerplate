import React, { useState } from "react";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Subject from "../Subject/index";
const DivHero = styled.div`
  form {
    position: relative;
    width: 520px;
    margin: 30px auto 20px auto;
    background: #fff;
    padding: 15px;
    border-radius: 7px;
    box-shadow: 0 1px 5px rgb(138, 137, 137);
  }
  input {
    width: 490px;
    border: none;
    margin-bottom: 20px;
    padding: 7px;
    outline: none;
    font-size: 1.2em;
    font-family: inherit;
    resize: none;
  }
`;

const initialState = {
  mySubject: "",
  course: "",
  level: "",
};
const CreateSubjectForm = (props) => {
  const [subject, setSubject] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSubject((prevSubject) => {
      return {
        ...prevSubject,
        [name]: value,
      };
    });
  };

  const submitSubject = (event) => {
    props.onAdd(subject);
    setSubject({
      mySubject: "",
      course: "",
      level: "",
    });
    event.preventDefault();
  };
  return (
    <DivHero>
      <form>
        <input
          value={subject.mySubject}
          onChange={handleChange}
          type="txt"
          name="mySubject"
          placeholder="Subject Name"
        />
        <input
          value={subject.course}
          onChange={handleChange}
          type="txt"
          name="course"
          placeholder="Course Name"
        />
        <input
          value={subject.level}
          onChange={handleChange}
          type="txt"
          name="level"
          placeholder="Level Type"
        />

        <Fab onClick={submitSubject}>
          <AddCircleIcon />
        </Fab>
      </form>

      <Subject />
    </DivHero>
  );
};

export default CreateSubjectForm;
