export const interpolate = (pattern, str, value) => {
    return str.replace(pattern, value)
};


export const queryFormatter = (dictionary) => {
    const vals = Object.entries(dictionary).map(([key, value]) => {
        const s =  "`" + key + "`" + ` = '${value}'`
        return s
    }) 
    return vals.join(', ')
};