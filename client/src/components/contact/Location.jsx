import React from "react";

const MapLocation = () => {
  return (
    <div className="bg-primary rounded-3 pt-80 rounded-3 position-relative h-100 overflow-hidden">
      <iframe
        className="gmap_iframe rounded-3"
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Moaaz Ibn Jabal, Mansoura Qism 2, El Mansoura, Dakahlia Governorate&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
};

export default MapLocation;
