import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./redux/galleryState";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.gallery.photos);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>PHOTO GALLERY</h1>
      <p>This ia a photo gallery made using redux toolkit and redux thunk.</p>
      <hr />
      <div className="Gallery">
        {photos.map((photo) => (
          <img
            key={photo.id}
            alt={photo.author}
            src={photo.download_url}
            width="400"
            height="400"
          />
        ))}
      </div>
      <button>VIEW MORE</button>

      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
