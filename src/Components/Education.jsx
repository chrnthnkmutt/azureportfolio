import React from "react";

const Education = () => {
    return(
        <section className="padding" id="portfolio">
            <h2 style={{ textAlign: "center" }}>Portfolio</h2>
            <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
            <div style={{ maxWidth: "40%", alignSelf: "center" }}>
            <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out os 1 slideIn" }}
            alt={imageAltText}
          />
        </div>
        </div>
        </section>
    );
};

export default Education;