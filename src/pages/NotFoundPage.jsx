import React from "react";
import { useNavigate, useRouteError } from "react-router";
import { Link } from "react-router";

const NotFoundPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-100 text-center px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Not Found</h1>

      {error && (
        <div className="mb-4">
          <p className="text-gray-700">{error.statusText || "Unknown Error"}</p>
        </div>
      )}

      <p className="mb-4 text-lg">
        Something went wrong or the page doesn’t exist.
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Go Back Home
      </button>

      <p className="mt-2">
        Or click{" "}
        <Link to="/" className="text-blue-900 underline">
          here
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
