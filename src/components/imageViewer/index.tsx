import { useState, useEffect } from "react";

export default function ImageViewer({ images = [{ url: "" }] }) {
  
  const [current, setCurrent] = useState(images[0]);
  
  useEffect(() => {
    setCurrent(images[0]);
  }, [images]);

  return (
    current.url && (
      <div className="rounded-md shadow-sm">
        <div className="w-full h-[550px] overflow-y-hidden rounded-2xl">
          <img
            src={`${current.url}`}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="flex mt-1 w-full">
          {images.map((image, index) => (
            <div
              className={`w-1/5 h-[70px] p-1 cursor-pointer overflow-y-hidden rounded-2xl`}
            >
              <img
                src={`${image.url}`}
                onClick={() => setCurrent(image)}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    )
  );
}
