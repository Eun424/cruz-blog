import  { useEffect} from "react";
import { NavLink, Outlet } from "react-router";
import axios from "axios";
import { FaHome } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { resetStories } from "../redux/blogSlice";


const API_URL = "http://localhost:3000/stories";

function RootLayout() {
  const dispatch = useDispatch();


  useEffect(() => {
    async function fetchStories() {
      try {
        const res = await axios.get(API_URL);
        dispatch(resetStories(res.data));
      } catch (err) {
        alert("Failed to fetch stories.");
      }
    }
    fetchStories();
  }, []);

  
  

  return (
    <>
      <nav className="bg-indigo-700 text-white p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <FaHome size={28} className="text-yellow-400" />
          <span className="font-bold text-xl">Travel Blog</span>
        </div>
        <div className="flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${
                isActive ? "border-b-2 border-yellow-400" : ""
              } pb-1`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${
                isActive ? "border-b-2 border-yellow-400" : ""
              } pb-1`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${
                isActive ? "border-b-2 border-yellow-400" : ""
              } pb-1`
            }
          >
            Add New
          </NavLink>
        </div>
      </nav>

      <main className="p-6 max-w-6xl mx-auto">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
