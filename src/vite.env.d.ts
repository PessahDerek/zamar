declare interface CategoryObj {
    id: number;
    category: string;
    image: string;
}

declare interface ValueObj {
    id: string;
    title: string;
    description: string;
    icon?: string;
}

declare interface ServicesObj {
    id: string;
    image: string;
    title: string;
    content: string;
    collectionId: string
    collectionName: string;
}

declare interface TestimonialObj {
    id: string;
    name: string;
    position: string;
    testimonial: string;
    avi?: string;
}

declare interface ShowcaseObj {
    collectionId: string;
    collectionName: string;
    created: string;
    id: string;
    image: string;
}

declare interface RawClientObj {
    id: string;
    collectionId: string;
    collectionName: String;
    field: string[];
}

declare interface ClientObj {
    id: string;
    genId: string;
    collectionId: string;
    collectionName: String;
    image: string;
}

declare interface LeaderObj {
    id: string;
    photo?: string;
    created: string;
    position: string;
    member_name: string;
    member_story: string;
    collectionId: string;
    collectionName: string;
}

declare interface ProjectGroupObj {
    "caption": string;
    "category": string;
    "collectionId": string;
    "collectionName": string;
    "created": string;
    "id": string;
    "images": string[],
    "title": string
    "updated": string;
}

// Define the project type
declare interface ProjectObj {
    caption: string;
    category: string;
    collectionId: string;
    collectionName: string;
    created: string;
    id: string;
    images: string[];
    title: string;
    updated: string;
}

// If you're using this as part of a response type from an API
interface ProjectResponse {
    data: Project;
}

// Or if it's part of an array of projects
interface ProjectsResponse {
    data: Project[];
}
