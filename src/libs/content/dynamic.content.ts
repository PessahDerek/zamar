import {createStore} from "zustand/vanilla";

export type DynamicContentFields =
    "clients"
    | "categories"
    | "showcase"
    | "values"
    | "services"
    | "testimonials"
    | "leaders"
export type CategoryDataObj = Map<number, CategoryObj>

export type DynamicContDataObj =
    ClientObj
    | CategoryObj
    | ShowcaseObj
    | ValueObj
    | ServicesObj
    | TestimonialObj
    | LeaderObj

interface DynamicContentObj {
    categories: CategoryDataObj;
    showcase: Map<string, ShowcaseObj>
    texts: Map<string, string>;
    values: Map<string, ValueObj>;
    services: Map<string, ServicesObj>
    testimonials: Map<string, TestimonialObj>
    leaders: Map<string, LeaderObj>
    clients: Map<string, ClientObj>

    fill(field: DynamicContentFields, data: DynamicContDataObj[]): void;
}

const DynamicContentStore = createStore<DynamicContentObj>()((set, _get) => ({
    categories: new Map(),
    values: new Map(),
    clients: new Map(),
    showcase: new Map(),
    texts: new Map().set("landing_title", "Building Brands"),
    services: new Map(),
    testimonials: new Map(),
    leaders: new Map(),
    fill(field, data) {
        const map = new Map(data.map(d => ([d.id, d])));
        set(prev => ({...prev, [field]: map}));
    }
}))

export default DynamicContentStore;


