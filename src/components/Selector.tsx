import React, { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore";
import images from "../images";

const Selector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTexture, setSelectedTexture] = useStore((state: any) => [
    state.texture,
    state.setTexture,
  ]);
  useEffect(() => {
    const arrows = window.addEventListener("keydown", (e) => {
      if (e.key == "ArrowLeft") {
        setActiveIndex((index) => {
          if (index === 0) {
            return images.length - 1;
          }
          return index - 1;
        });
      } else if (e.key == "ArrowRight") {
        setActiveIndex((index) => {
          if (index === images.length - 1) {
            return 0;
          }
          return index + 1;
        });
      }
      console.log(activeIndex, e.key);
    });

    return () => {
      window.removeEventListener("keydown", arrows as any);
    };
  }, []);

  useEffect(() => {
    setSelectedTexture(images[activeIndex].texture);
  }, [activeIndex]);
  return (
    <div className="selector">
      {images.map((image: any, index: number) => (
        <TextureItem
          index={index}
          key={index}
          texture={image.texture}
          src={image.src}
        />
      ))}
    </div>
  );
};

export default Selector;

const TextureItem = ({ texture, src, index }: any) => {
  const [selectedTexture, setSelectedTexture] = useStore((state: any) => [
    state.texture,
    state.setTexture,
  ]);
  const handleClick = () => {
    setSelectedTexture(texture);
  };
  return (
    <div
      onClick={handleClick}
      className={`texture-item ${selectedTexture === texture ? "active" : ""}`}
    >
      <img src={src} alt={texture} />
    </div>
  );
};
