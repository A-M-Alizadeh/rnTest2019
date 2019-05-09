export function MapToList(map) {
    var list=[];
    var item;
    var keys = Object.values(map);
    for (var i in keys) {
        item = {};
        item= keys[i];
        list.push(item);
    }
    return list;
}