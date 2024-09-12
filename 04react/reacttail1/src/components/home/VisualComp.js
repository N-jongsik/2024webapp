import React from "react";

function VisualComp() {
  return (
    <>
      <div className="visual">
        <div className="container mx-auto h-80 flex text-white items-center px-4 text-center md:text-left">
          <div>
            <h2 className="text-2xl mb-3">Title</h2>
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              quas.
            </p>
            <div className="px-4 py-3 bg-blue-200 inline-block rounded-md text-gray-900 hover:bg-blue-400">
              PRODUCT
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisualComp;
