import { useState } from "react";

const images = [
  { src: "images/pic1.jpg", alt: "Closeup of a human eye" },
  { src: "images/pic2.jpg", alt: "Rock that looks like a wave" },
  { src: "images/pic3.jpg", alt: "Purple and white pansies" },
  { src: "images/pic4.jpg", alt: "Section of wall from a pharoah's tomb" },
  { src: "images/pic5.jpg", alt: "Large moth on a leaf" },
];

export default function App() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isDarken, setIsDarken] = useState(false);

  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        <img
          className="displayed-img"
          src={images[selectedImageIndex].src}
          alt={images[selectedImageIndex].alt}
        />
        <div
          className="overlay"
          style={isDarken ? { backgroundColor: "rgba(0, 0, 0, 0.5)" } : {}}
        ></div>
        <button
          className="dark"
          onClick={() => {
            setIsDarken((v) => !v);
          }}
        >
          {isDarken ? "Lighten" : "Darken"}
        </button>
      </div>
      <div className="thumb-bar">
        {images.map((url, i) => {
          return (
            <img
              key={url.src}
              src={url.src}
              alt={url.alt}
              onClick={() => {
                setSelectedImageIndex(i);
              }}
            />
          );
        })}
      </div>
    </>
  );
}
