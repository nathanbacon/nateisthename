import * as React from "react";

const GoogleSheetsChart = ({ url }) => {
  return (
    <iframe
      width="600"
      height="375"
      seamless
      frameborder="0"
      scrolling="no"
      src={url}
    ></iframe>
  );
};

export default GoogleSheetsChart;
