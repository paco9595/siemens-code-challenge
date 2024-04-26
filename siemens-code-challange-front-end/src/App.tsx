import { useEffect, useState } from "react";
import "./App.css";
import usePagination from "./hook/usePagination";
import { ThumbnailImage } from "./types/thumbnailImage";
import LargeImage from "./components/largeImage";
import Thumbnail from "./components/thumbnails";

function App() {
  const [selectedImage, setSelectedImage] = useState<ThumbnailImage>({} as ThumbnailImage);
  const { data, isLastPage, isFirstPage, next, previous } = usePagination<ThumbnailImage>(
    `${process.env.API_BASE_URL}/api/images`
  );
  useEffect(() => {
    if (data.length && !selectedImage.id) {
      setSelectedImage(data[0]);
    }
  }, [data]);

  return (
    <>
      <div id="container">
       <LargeImage selectedImage={selectedImage}/>
        <Thumbnail
          images={data}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          selectedImage={selectedImage}
          onNextHandler={next}
          onPerviousHandler={previous}
          onSelectHandler={setSelectedImage}
        />
      </div>
    </>
  );
}

export default App;
