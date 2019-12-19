const fileEnding = ".puml";
const header = document.getElementById("title");

function snakeToCamel(input: String): String {
    return input.replace(
        /([-_][a-z])/g,
        (group) => group.toUpperCase()
            .replace('-', ' ')
            .replace('_', ' ')
    );
}

export function updateTitle(data: Object) {
    let title: String = data["name"];

    if (title.endsWith(fileEnding)) {
        console.log("Rip off file ending");
        title = title.replace(fileEnding, '');
    }

    title = snakeToCamel(title);

    title = title.charAt(0).toUpperCase() + title.slice(1);

    header.textContent = title;
}
