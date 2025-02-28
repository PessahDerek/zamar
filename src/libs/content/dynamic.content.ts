import {createStore} from "zustand/vanilla";

export type DynamicContentFields = "categories" | "values" | "services" | "reviews" | "leaders"
export type CategoryDataObj = Map<number, CategoryObj>

export type DynamicContDataObj = CategoryObj | ValueObj | ServicesObj | ReviewObj | LeaderObj

interface DynamicContentObj {
    categories: CategoryDataObj;
    texts: Map<string, string>;
    values: Map<string, ValueObj>;
    services: Map<string, ServicesObj>
    reviews: Map<string, ReviewObj>
    leaders: Map<string, LeaderObj>

    fill(field: DynamicContentFields, data: DynamicContDataObj[]): void;
}

const DynamicContentStore = createStore<DynamicContentObj>()((set, get) => ({
    categories: new Map(),
    values: new Map(),
    texts: new Map().set("landing_title", "Building Brands"),
    services: new Map(),
    reviews: new Map(),
    leaders: new Map(),
    fill(field, data) {
        const map = new Map(data.map(d => ([d.id, d])));
        set(prev => ({...prev, [field]: map}));
    }
}))

export default DynamicContentStore;


