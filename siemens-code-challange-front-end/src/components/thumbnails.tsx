import { ThumbnailImage } from "../types/thumbnailImage";

export default function Thumbnail({
  isFirstPage,
  isLastPage,
  images,
  selectedImage,
  onPerviousHandler,
  onNextHandler,
  onSelectHandler,
}: {
  isFirstPage: boolean;
  isLastPage: boolean;
  images: ThumbnailImage[];
  selectedImage: ThumbnailImage;
  onPerviousHandler: () => void;
  onNextHandler: () => void;
  onSelectHandler: (image: ThumbnailImage) => void;
}) {
  return (
    <div className="thumbnails group mt-5">
      <button
        onClick={onPerviousHandler}
        disabled={isFirstPage}
        className={`previous ${isFirstPage ? "disabled" : ""}`}
      >
        Previous
      </button>
      <button
        onClick={onNextHandler}
        disabled={isLastPage}
        className={`next ${isLastPage ? "disabled" : ""}`}
      >
        Next
      </button>
      <div className="flex justify-center">
        {images.map((image) => (
          <Image key={image.id} isSelected={image.id === selectedImage.id} image={image} onSelectHandler={onSelectHandler} />
        ))}
      </div>
    </div>
  );
}

function Image({
  isSelected,
  onSelectHandler,
  image,
  image: { thumbnail, description },
}: {
  isSelected: boolean;
  onSelectHandler: (image: ThumbnailImage) => void;
  image: ThumbnailImage;
}) {
  return (
    <div className={isSelected ? "active" : ""}>
      <img
        onClick={() => onSelectHandler(image)}
        src={`${process.env.API_BASE_URL}/images/thumbnails/${thumbnail}`}
        alt={description}
      />
      <span>{thumbnail}</span>
    </div>
  );
}
