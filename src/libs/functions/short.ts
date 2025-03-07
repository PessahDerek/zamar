import {DynamicContDataObj, DynamicContentFields} from "../content/dynamic.content";

interface DynamicDataFromLocal {
    [key: string | DynamicContentFields]: { [key: string]: DynamicContDataObj };
}

export const getObjFromStorage = (key: DynamicContentFields): any => {
    const fetched = sessionStorage.getItem("zamar-content");
    if (!fetched)
        return null
    const local = (JSON.parse(fetched) as { state: DynamicDataFromLocal }).state
    const localMap = new Map(Object.keys(local).map(k => ([k, local[k]])))
    return localMap.get(key)
}
