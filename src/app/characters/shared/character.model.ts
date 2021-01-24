// todo refactor loctation inferface to separete file, where you can access it anywhere in the library.

export interface Location{
    name:string,
}

export interface Character {
    id?:number;
    name:string;
    status:string;
    species:string;
    type:string;
    gender:string;
    origin:any;
    location:{[key: string]: Location};
    image:string;
    episode:any;
    url:string;
    created:string;

}
