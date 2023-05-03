import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";



function Loader(isLoading) {
  return (
    <div style={{display:"grid", placeItems:"center", justifyContent:"center",textAlign:"center", width:"100%",height:"100vh"}}>
      <PropagateLoader
        color={"#368ed6"}
        loading={isLoading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
