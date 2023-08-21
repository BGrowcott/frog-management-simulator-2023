import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Home = () => {
  return (
    <section>
      <h2>
        {/* font awesome example */}
        <FontAwesomeIcon className="me-1" icon={solid("building")} />
        Hello World
      </h2>
    </section>
  );
}

export default Home;
