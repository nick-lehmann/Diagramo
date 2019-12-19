import {Core} from 'cytoscape';

function checkKeysInObject(obj: Object, neededKeys: Array<String>) {
    return neededKeys.every(key => Object.keys(obj).includes(key));
}

function is_relation(element: Object): boolean {
    return checkKeysInObject(element, ['left', 'right', 'label'])
}

function is_class(element: Object) {
    return checkKeysInObject(element, ['name', 'title', 'isAbstract'])
}

function is_package(element: Object) {
    return checkKeysInObject(element, ['name', 'title', 'type', 'elements'])
        && element['type'] == 'package'
}

export function addElement(viewer: Core, element: Object, parent?: String) {
    if (is_relation(element)) {
        const name = element['left'] + '_' + element['right'];
        console.log('Adding relation ' + name);
        viewer.add({
            data: {
                id: name,
                source: element['left'],
                target: element['right']
            }
        });
    }

    if (is_class(element)) {
        const name = element['name'];
        console.log('Adding relation ' + name);
        viewer.add({
            data: {
                id: name,
                parent: parent
            }
        });
    }

    if (is_package(element)) {
        const name = element['name'];
        console.log('Adding package ' + name);
        viewer.add({
            data: {
                id: name,
                parent: parent
            }
        });
        for (let child of element['elements']) {
            addElement(viewer, child, element['name'])
        }
    }
}
