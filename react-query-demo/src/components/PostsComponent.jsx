import { useQuery } from "@tanstack/react-query";
// Define a fetch function that can be used to fetch data from an API
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const PostComponents = () => {
  // Use the useQuery hook to handle data fetching and caching

  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["fetchData"],
    queryFn: fetchPosts,
  });
  // Handle loading state
  if (isLoading) return <div>Loading...</div>;
  // Handle error state
  if (error) return <div>Error loading data</div>;
  const handleRefetch = () => {
    refetch();
  };
  data?.map((post) => ({
    title: post.title,
    body: post.body,
    id: post.id,
  }));

  // Render the fetched data
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          {item.title} {item.body}
        </div>
      ))}
      <button onClick={handleRefetch}>Refetch data</button>
    </div>
  );
};

export default PostComponents;
