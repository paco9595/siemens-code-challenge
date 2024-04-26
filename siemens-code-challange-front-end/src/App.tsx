import { useEffect, useState } from "react";
import "./App.css";
import usePagination from "./hook/usePagination";
import { Template } from "./types/template";

function App() {
  const [selectedImage, setSelectedImage] = useState<Template>({} as Template);
  const { data, page, isLastPage, next, previous } = usePagination<Template>(
    "http://localhost:3001/v1/templates"
  );
  useEffect(() => {
    if (data.length && !selectedImage.id) {
      setSelectedImage(data[0]);
    }
  }, [data]);
  return (
    <>
      <div id="container">
        <div id="large">
          <img
            className="mx-auto w-[420px] h-96"
            src={`http://localhost:3001/static/images/large/${selectedImage?.image}`}
            alt={selectedImage?.description}
          />
        </div>

        <div className="thumbnails group mt-5">
          <button
            onClick={previous}
            disabled={page === 1}
            className={`previous ${page === 1 ? "disabled" : ""}`}
          >
            Previous
          </button>
          <button
            onClick={next}
            disabled={isLastPage}
            className={`next ${isLastPage ? "disabled" : ""}`}
          >
            Next
          </button>
          <div className="flex justify-center">
            {data.map((item) => (
             <div className={item.id === selectedImage.id ? 'active' : ''}>
                <img
                onClick={() => setSelectedImage(item)}
                src={`http://localhost:3001/static/images/thumbnails/${item.thumbnail}`}
                alt={item.description}
                />
                <span>{item.thumbnail}</span>
                </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
