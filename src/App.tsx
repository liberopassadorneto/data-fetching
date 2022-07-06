import { useFetch } from "./hooks/useFetch";

type Repository = {
  full_name: string;
  description: string;
};

function App() {
  const { data, isFetching } = useFetch<Repository[]>(
    "users/liberopassadorneto/repos"
  );

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {data?.map((repo) => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
