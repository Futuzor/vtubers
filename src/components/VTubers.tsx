import { useState } from "react";
import ListaVTubers from "../ListaVTubers";
import Footer from "./Footer";
import "../styles/vtubers.css";

const VTubers = () => {
  const [vtuber, setVTuber] = useState("");
  return (
    <>
      <div className="lista-vtubers">
        {ListaVTubers.map((vt) => (
          <div
            key={vt.nombre.toLowerCase().replace(" ", "-")}
            className="vtuber"
          >
            <a href={vt.url} target="_blank">
              <img
                onMouseOver={() => setVTuber(vt.nombre)}
                onMouseLeave={() => setVTuber("")}
                src={vt.imagen}
                alt={vt.nombre}
              />
            </a>
          </div>
        ))}
      </div>
      <Footer>{vtuber}</Footer>
    </>
  );
};

export default VTubers;
