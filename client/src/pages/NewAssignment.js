import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Error, FormField, Label } from "../styles";

function NewAssignment({ user }) {
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
        <Label>Create New Assignment</Label>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="name">Name</Label>
            <input class="input is-rounded"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="totalPoints">Points Possible</Label>
            <input class="input is-rounded"
              type="number"
              id="totalPoints"
              value={totalPoints}
              onChange={(e) => setTotalPoints(e.target.value)}
            />
          </FormField>
          <FormField>  
            <Label htmlFor="lecture"> Lecture? </Label>  
             <div class="select is-rounded">
              <select id= "lecture" onChange={(e) => setLectureId(e.target.value)} >  
                <option> ---Choose your lecture!--- </option>  
                {lectureList.map((lecture) =>
                <option key={lecture.id} value={lecture.id}>
                  {lecture.name}
                </option>
                )}
              </select>
            </div>
          </FormField>
          <FormField>
            <button class="button" color="primary" type="submit">
              {isLoading ? "Loading..." : "Assign to All Students"}
            </button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
      <WrapperChild>
        <div class="block">
          <Label>{name}</Label>
        </div>
        <div class="block">
          <em>Points Possible: {totalPoints}</em>
        </div>
        <div class="block">
          <cite>Teacher: {user.name}</cite>
        </div>
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
