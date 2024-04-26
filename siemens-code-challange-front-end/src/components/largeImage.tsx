import { ThumbnailImage } from "../types/thumbnailImage";

export default function LargeImage({selectedImage}: {selectedImage  : ThumbnailImage}) {
    return (
        <div id="large">
        <img
          className="mx-auto w-[420px] h-96"
          src={`${process.env.API_BASE_URL}/images/large/${selectedImage?.image}`}
          alt={selectedImage?.description}
        />
      </div>
    )
}