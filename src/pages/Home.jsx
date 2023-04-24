import DefaultLayout from "../layouts/DefaultLayout";
import H1 from "../components/H1";

function Home() {
  return (
    <DefaultLayout>
      <H1 color="red">Hi Name!</H1>
      Home <a href={`/programs`}>Programs</a>
    </DefaultLayout>
  );
}

export default Home;
