export const spacingTypeMap = {
    m: 'margin',
    p: 'padding',
};

export const spacingSidesMap = {
    t: 'Top',
    b: 'Bottom',
    l: 'Left',
    r: 'Right',
    x: 'Horizontal',
    y: 'Vertical',
};

export const spacingConf = {
    spacing: 18,
};

export function spacing(conf, multiplier = 1) {
    let res = {};
    let spacing = spacingConf.spacing * multiplier;

    let propertyName = spacingTypeMap[conf[0]];
    if (!propertyName) return console.warn('No property');

    if (!conf[1]) res[propertyName] = spacing;
    else {
        let side = spacingSidesMap[conf[1]];
        if (side) res[propertyName + side] = spacing;
        else return console.warn('Invalid spacing sides');
    }
    return res;
}
