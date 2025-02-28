declare interface CategoryObj {
    id: number;
    category: string;
    image: string;
}

declare interface ValueObj {
    id: number;
    title: string;
    text: string;
    icon: string;
}

declare interface ServicesObj {
    id: number;
    image: string;
    service: string;
    description: string;
}

declare interface ReviewObj {
    id: number;
    name: string;
    position: string;
    review: string;
    avi?: string;
}

declare interface LeaderObj {
    id: number;
    name: string;
    position: string;
    description: string;
    avi?: string;
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
