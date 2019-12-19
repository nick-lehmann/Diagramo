import cytoscape from "cytoscape";
import { Core } from "cytoscape";
import { addElement } from "./data";


export function initialise(): Core {
    return cytoscape({
        container: document.getElementById("viewer"),
        style: [{
            selector: "node",
            style: {
                "background-color": "#666",
            }
        }, {
            selector: "edge",
            style: {
                "width": 3,
                "line-color": "#ccc",
                "target-arrow-color": "#ccc",
                "target-arrow-shape": "triangle"
            }
        }],
    });
}

export function syncData(viewer: Core, data: Object) {
    viewer.add({
        data: {
            id: "b"
        }
    });
    viewer.add({
        data: {
            id: "a"
        }
    });
    viewer.add({
        data: {id: "ab", source: "a", target: "b"}
    });

    const layout = viewer.layout({name: "random"});
    layout.run();

    viewer.fit(null, 300);

    let elements: Array<object> = data["diagrams"][0]["elements"];
    console.log(elements);
    for (let element of elements) {
        addElement(viewer, element);
    }
}
