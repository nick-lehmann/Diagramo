import { loadDiagramFile, uploadButton } from './ui/input';
import { initialise, syncData } from './viewer/diagram'


document.addEventListener("DOMContentLoaded", function () {
    let viewer = initialise();
    uploadButton.addEventListener("change", (event: ProgressEvent<FileReader>) => {
        loadDiagramFile(event, (data) => {
            syncData(viewer, data);
        });
    }, false);

});


