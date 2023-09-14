import React, { useState, useEffect } from "react";
import FrogCard from "../components/frogStuff/frogCard";
import Loading from "../components/utils/loading";
import fetchWithJWT from "../utils/fetchWithJWT";

const Frog = () => {
    const [frogData, setFrogData] = useState();

    async function allFrogs() {
        const response = await fetchWithJWT("/api/frogs");
        const data = await response.json();
        setFrogData(data);
    }

    useEffect(() => {
        allFrogs();
    }, []);

    async function createFrog(event) {
        event.preventDefault();
        const response = await fetchWithJWT("/api/frogs", {
            method: "POST",
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <section>
            <button onClick={createFrog}>Create Frog</button>
            <div className="row justify-content-between gy-2">
                {frogData ? (
                    frogData.map((frog) => <FrogCard key={frog._id} frog={frog} />)
                ) : (
                    <></>
                )}
            </div>
        </section>
    );
};

export default Frog;
