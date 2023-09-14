import React from "react";
import Loading from "../components/utils/loading";
import fetchWithJWT from "../utils/fetchWithJWT";

const Frog = () => {

    async function createFrog(event) {
        event.preventDefault();
        const response = await fetchWithJWT("/api/frogs", {
            method: "POST",
        });
        const data = await response.json();
        console.log(data);
    };

    return (
        <section>
            <button onClick={createFrog}>Create Frog</button>
        </section>
    )

}

export default Frog;