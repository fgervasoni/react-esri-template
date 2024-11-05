import { useEffect, useRef } from "react";

import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";

export function Map() {

    const mapDiv = useRef(null);

    const webmapState = useRef<WebMap | null>(null);
    const viewState = useRef<MapView | null>(null);

    useEffect(() => {
        if (mapDiv.current) {

            const webmap = new WebMap({
                portalItem: {
                    id: "aa1d3f80270146208328cf66d022e09c"
                }
            });

            const view = new MapView({
                container: mapDiv.current,
                map: webmap
            });

            webmapState.current = webmap;
            viewState.current = view;


            view.when(() => {

                console.log("View ready");
                console.log(webmapState.current);
                console.log(viewState.current);

            });
        }
    }, [mapDiv]);

    return <div id="map" className="h-full" ref={mapDiv}></div>;
}
