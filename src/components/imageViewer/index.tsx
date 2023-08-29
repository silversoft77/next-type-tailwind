import { useState } from "react";
export default function ImageViewer({ images = [{ url: "" }] }) {

  const [current, setCurrent] = useState(images[0]);
  return (
    <div className="rounded-md shadow-sm">
      <div>
        <img src={`${current.url}`} alt="" />
      </div>
      <div className="grid grid-flow-row auto-rows-max">
        {images.map((image, index) => (
          <img
            src={`${image.url}`}
            onMouseOver={() => setCurrent(image)}
            className={`w-auto`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}
