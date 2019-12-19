export const uploadButton = document.getElementById("uploadButton");

export function loadDiagramFile(event: ProgressEvent<FileReader>, callback: Function) {
    console.log("Datei hochgeladen");

    let files = uploadButton.files;

    if (files.length != 1) {
        console.log("Please upload exactly one file");
        return false;
    }

    let reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
        let data = JSON.parse(event.target.result);
        console.log(data);
        callback(data)
    };
    reader.readAsText(files[0]);
}
