import { useParams } from "react-router";
import { useSelector } from "react-redux";

function BlogDetails() {
  const { id } = useParams();
  const stories = useSelector((state) => state.blog.stories);
  const story = stories.find((s) => s.id === id);

  if (!story) return <p className="text-center mt-10">Story not found.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto border rounded shadow bg-white mt-10">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">{story.title}</h2>
      <p className="text-gray-700">{story.description}</p>
    </div>
  );
}

export default BlogDetails;
