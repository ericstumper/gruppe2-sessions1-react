import { useState, useEffect, useRef } from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

const GET_PROGRAM = gql`
  query GetProgram($id: ID!) {
    program(where: { id: $id }) {
      name
    }
  }
`;

function Program() {
  const [counter, setCounter] = useState(0);
  // const myState = useState(0);
  // const counter = myState[0];
  // const setCounter = myState[1];
  const { programId } = useParams();
  // const { loading, error, data } = useQuery(GET_PROGRAM, {
  //   variables: { id: programId },
  // });

  const buttonRef = useRef();

  const handleCounterButtonClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // console.log(loading, error, data);

  useEffect(() => {
    console.log(buttonRef);
    setCounter((prevCounter) => prevCounter + 5);
  }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;

  // const { program } = data;

  return (
    <DefaultLayout>
      <div>
        {/* {program.name} - {counter} */}
        {counter}
        <button ref={buttonRef} onClick={handleCounterButtonClick}>
          Increase Counter
        </button>
      </div>
    </DefaultLayout>
  );
}

export default Program;
