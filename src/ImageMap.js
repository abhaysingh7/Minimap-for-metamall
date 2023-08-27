import "./App.css";
import axios from "axios";
import { useState } from "react";
import ImageMapper from "react-image-mapper";
import React from "react";

  function ImageMap() {
    const [detail, setDetail] = useState("");
    function clicked(area) {
      axios
        .get(
          `https://dev.metamalls.io/marketplace/api/store/landType/${area.land}/landSerialNo/${area.landId}`
        )
        .then((res) => {
          
          
          if (res.data.isVacant === false) {
            
            setDetail(`${area.land} ${area.landId} - ${res.data.store.name}`);
          }
          else {
            setDetail(`${area.land} ${area.landId} - Vacant`);
          }
        });
  
      
    }

  const MAP = {
    name: "my-map",
    areas: [
      {
        name: "1",
        shape: "poly",
        coords: [272, 257, 299, 257, 299, 275, 272, 276],
        fillColor: "blue",
        land: "Chateau",
        landId: "5685",
      },
      {
        name: "2",
        shape: "poly",
        coords: [370, 233, 395, 233, 397, 250, 373, 251],
        fillColor: "green",
        land: "Cabin",
        landId: "4001",
      },
      {
        name: "3",
        shape: "poly",
        coords: [406, 255, 431, 255, 435, 274, 407, 276],
        fillColor: "green",
        land: "Cabin",
        landId: "4005",
      },
      {
        name: "4",
        shape: "poly",
        coords: [372, 302, 410, 302, 416, 332, 375, 332],
        fillColor: "blue",
        land: "Cabin",
        landId: "4000",
      },
      {
        name: "5",
        shape: "poly",
        coords: [154, 71, 205, 69, 203, 84, 151, 83],
        fillColor: "blue",
        land: "Cabin",
        landId: "4006",
      },
      {
        name: "6",
        shape: "poly",
        coords: [86, 236, 170, 236, 157, 282, 72, 282],
        fillColor: "green",
        land: "Cabin",
        landId: "4021",
      },
      {
        name: "7",
        shape: "poly",
        coords: [299, 110, 329, 110, 336, 211, 299, 212],
        fillColor: "blue",
        land: "Cabin",
        landId: "0107",
      },
      {
        name: "8",
        shape: "poly",
        coords: [461, 231, 526, 230, 534, 255, 467, 254],
        fillColor: "green",
        land: "Cube",
        landId: "0108",
      },
    ],
  };
  

  return (
    <div className="mainimap">
     

    <div className="ImageMap">
      <div className="Left-Body">
        <ImageMapper
          fillColor="rgba(255, 255, 255, 0.5)"
          src={"Map.jpeg"}
          map={MAP}
          height={404}
          width={610}
          onClick={(area) => clicked(area)}
          
        ></ImageMapper>
      </div>
      <div className="Right-Body">
        
        <video
          className="video-anim"
          autoPlay
          loop
          width="100%"
          height="100%"
          preload="auto"
        >
          <source
            src={
              "https://arweave.net/D2JVIy22RrplO1UBt6Od_YLM_E-qsHdVFR4WA_1E4nc?ext=mp4"
            }
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>
        <h2>
          <b>{detail}</b>
        </h2>
      </div>
    </div>
    </div>
  );
}

export default ImageMap;