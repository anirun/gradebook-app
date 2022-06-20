import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label } from "../styles";

function NewAssignment({ user, lecture }) {
  const [name, setName] = useState("homework");
  const [totalPoints, setTotalPoints] = useState("100");
  const [lectureId, setLectureId] = useState("Lecture?");
  const [lectureList, setLectureList] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetch(`api/lectures`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((r) => r.json())
    .then((d) => {
      setLectureList(d)
    })
  }, []) 

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch(`/api/lectures/${lectureId}/assignments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        total_points: totalPoints,
        teacher_id: user.id,
        lecture_id: lectureId
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Wrapper>
      <WrapperChild>
        <h2>Create New Assignment</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="name">name</Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="totalPoints">Total Points</Label>
            <Input
              type="number"
              id="totalPoints"
              value={totalPoints}
              onChange={(e) => setTotalPoints(e.target.value)}
            />
          </FormField>
          <FormField>  
            <Label htmlFor="lecture"> Lecture? </Label>  
            <select id= "lecture" onChange={(e) => setLectureId(e.target.value)} >  
              <option> ---Choose your lecture!--- </option>  
              {lectureList.map((lecture) =>
              <option key={lecture.id} value={lecture.id}>
                {lecture.name}
              </option>
              )}
            </select>  
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Assign to All Students"}
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
      <WrapperChild>
        <h1>{name}</h1>
        <p>
          <em>Total Points: {totalPoints} minutes</em>
          &nbsp;·&nbsp;
          <cite>Teacher: {user.name}</cite>
        </p>
      </WrapperChild>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewAssignment;
