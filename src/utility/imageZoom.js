import React from "react";

export function imageZoom(url) {
  return (
    <div className="modal">
      <div className="modal-content">
        <img src={url} alt="" />
      </div>
    </div>
  );
}
