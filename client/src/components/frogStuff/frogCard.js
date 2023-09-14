import React, { useState } from "react";
import frog1 from "../../images/frog1.png";
import frog2 from "../../images/frog2.png";

const FrogCard = ({ frog }) => {
    const images = [frog1, frog2];

    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card m-auto" style={{ maxWidth: "25rem" }}>
                <h2 className="text-center">{frog.name}</h2>
                <img
                    src={images[Math.floor(Math.random() * 2)]}
                    className="card-img-top image-responsive"
                    alt="Your frog looking cute"
                ></img>
                <div className="card-body">
                    <div className="row">
                        {Object.keys(frog.attributes.coreAttributes).map(
                            (attribute, index) => {
                                return (
                                    <div key={index} className="col-6 ">
                                        <div>
                                            <span className="tooltip-parent">
                                                <div className="tooltip-custom">
                                                    {
                                                        frog.attributes
                                                            .coreAttributes[
                                                            attribute
                                                        ].description
                                                    }
                                                </div>
                                                {attribute
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    attribute.slice(1)}
                                            </span>
                                            :{" "}
                                            <span>
                                                {
                                                    frog.attributes
                                                        .coreAttributes[
                                                        attribute
                                                    ].value
                                                }
                                            </span>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrogCard;
