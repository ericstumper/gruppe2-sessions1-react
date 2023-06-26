import { useQuery, gql } from "@apollo/client";
import DefaultLayout from "../layouts/DefaultLayout";

const GET_FIRST_PROGRAM = gql`
  query GetPrograms {
    programs(first: 1) {
      description
      duration
      id
      name
      publishedAt
      updatedAt
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(GET_FIRST_PROGRAM);
  console.log(loading, error, data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const { name } = data.programs[0];

  return (
    <DefaultLayout>
      <h1 color="red">Hi Name!</h1>
      <div>Dein Workout heute</div>
      <div>
        <div>{name}</div>
      </div>
      Home <a href={`/programs`}>Programs</a>
    </DefaultLayout>
  );
}

export default Home;
