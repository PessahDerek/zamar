import {createStore} from "zustand/vanilla";
import {createJSONStorage, persist} from "zustand/middleware";

export type DynamicContentFields =
    "clients"
    | "subs"
    | "categories"
    | "showcase"
    | "values"
    | "services"
    | "testimonials"
    | "leaders"
    | "projects"
export type CategoryDataObj = Map<number, CategoryObj>

export type DynamicContDataObj =
    ClientObj
    | CategoryObj
    | ShowcaseObj
    | ValueObj
    | ServicesObj
    | TestimonialObj
    | LeaderObj
    | SubCategoryObj
    | ProjectObj

export interface DynamicContentObj {
    categories: CategoryDataObj;
    showcase: Map<string, ShowcaseObj>
    texts: Map<string, string>;
    values: Map<string, ValueObj>;
    services: Map<string, ServicesObj>
    testimonials: Map<string, TestimonialObj>
    leaders: Map<string, LeaderObj>
    clients: Map<string, ClientObj>
    subs: Map<string, SubCategoryObj>
    projects: Map<string, ProjectObj>

    fill(field: DynamicContentFields, data: DynamicContDataObj[]): void;
}

const DynamicContentStore = createStore<DynamicContentObj>()((set, _get) => ({
    categories: new Map(),
    values: new Map(),
    clients: new Map(),
    projects: new Map(),
    showcase: new Map(),
    subs: new Map(),
    texts: new Map().set("landing_title", "Building Brands"),
    services: new Map(),
    testimonials: new Map(),
    leaders: new Map(),
    fill(field, data) {
        const map = new Map(data.map(d => ([d.id, d])));
        set(prev => ({...prev, [field]: map}));
    }
}));

export default DynamicContentStore;


