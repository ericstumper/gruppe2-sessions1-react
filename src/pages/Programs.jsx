import { useQuery, gql } from "@apollo/client";
import DefaultLayout from "../layouts/DefaultLayout";

const GET_PROGRAMS = gql`
  query GetPrograms {
    programs {
      description
      duration
      id
      name
      publishedAt
      updatedAt
    }
  }
`;

function Programs() {
  const { loading, error, data } = useQuery(GET_PROGRAMS);
  console.log(loading, error, data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <DefaultLayout>
      {data.programs.map((program, i) => (
        <a href={`/programs/${program.id}`} key={`program-${i}`}>
          {program.name}
        </a>
      ))}
    </DefaultLayout>
  );
}

export default Programs;
