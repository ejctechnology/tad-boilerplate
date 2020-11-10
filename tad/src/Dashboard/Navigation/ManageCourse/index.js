import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsConfig from "./../../../aws-exports";
import { createSubject } from "../../../graphql/mutations";
import { listSubjects } from "../../../graphql/queries";
import CreateSubjectForm from "../ManageCourse/createForm";
import Subject from "../ManageCourse/Subject/index";
Amplify.configure(awsConfig);

const ComponentParent = styled.div``;
// const ComponentChild = styled.div``;

const ManageCourse = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetchSubjects();
  }, []);

  async function fetchSubjects() {
    try {
      const subjectData = await API.graphql(graphqlOperation(listSubjects));
      const subjects = subjectData.data.listSubjects.items;
      setSubjects(subjects);
    } catch (err) {
      console.log(err);
    }
  }

  async function AddSubject(NewSubject) {
    try {
      setSubjects((prevSubjects) => {
        return [...prevSubjects, NewSubject];
      });
      const subject = { ...NewSubject };
      await API.graphqlOperation(createSubject, { input: subject });
    } catch (err) {
      console.log("Error Addind Course", err);
    }
  }
  return (
    <ComponentParent>
      <CreateSubjectForm onAdd={AddSubject} />
      {subjects.map((subject, index) => (
        <Subject
          key={index}
          id={index}
          mySubject={subject.mySubject}
          course={subject.course}
          level={subject.level}
        />
      ))}
    </ComponentParent>
  );
};

export default ManageCourse;
