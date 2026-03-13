import React from "react";

const Digit = ({num}) => {
    return (
        <div className="card bg-dark text-white m-2 border-secondary myCard">
            <div className="card-body d-flex justify-content-center align-items-center fs-1 fw-bold">
                {num}
            </div>
        </div>
    );
};
export default Digit;