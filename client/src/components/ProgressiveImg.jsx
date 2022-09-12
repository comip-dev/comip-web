import React,{useState,useEffect} from "react";
import './ProgressiveImg.css'
const ProgressiveImg = ({ placeholderSrc, src, className, ...props }) => {

    const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          console.log("LOADED")
          setImgSrc(src);
        };
        console.log(img.src)
    }, [src]);
    const customClass = placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";
    console.log(customClass)
    return (
      <img
        {...{ src: imgSrc, ...props }}
        alt={props.alt || ""}
        className={`image ${customClass} ${className}`}
        // className="image"
      />
    );
  };
  export default ProgressiveImg;