import { trpc } from "../../lib/trpc";

export const AllMemoriesPage = () => {
  const { data, error, isLoading, isFetching, isError } =
    trpc.getMemories.useQuery();

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (!data) {
    return <span>No data available</span>;
  }

  return (
    <div className="1">
      {data.memories.map((memory) => (
        <div key={memory.id} className="2">
          <h2>{memory.name}</h2>
          <p>{memory.description}</p>
        </div>
      ))}
    </div>
  );
};
