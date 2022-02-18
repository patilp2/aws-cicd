export interface ProjectDetails {
    meta: {
        detail_url: string;
    };  
    title:string;
    user_handle:string;
    like_count:string;
    ratings:string;
    tags:Array<string>;
}