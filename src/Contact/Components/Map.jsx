import React from 'react';


export default function Map(){
    return (
        <map className="map">
            <iframe 
                title={"map"}
                width={"100%"} 
                height={"100%"} 
                id={"gmap_canvas"} 
                src={"https://maps.google.com/maps?q=house%20sushi&t=&z=16&ie=UTF8&iwloc=&output=embed" }
                frameBorder={"0"} 
                scrolling={"no"} 
                marginHeight={"0"} 
                marginWidth={"0"}
                zoom>
            </iframe>
        </map>
    );
}