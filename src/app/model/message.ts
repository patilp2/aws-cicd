export interface MessageDetails {
    items: items[];
}

export interface items{
    profile: string;
    username: string
}

export interface resultdetails {
    count:number;
    links:links[];
    next:boolean;
    pagination:pagination[];
    previous:boolean;
    results:items[];
    total_pages:number;
}
export interface links{
    next:string;
    previous:string;
}
export interface pagination{
    current_page:number;
    next_page:string;
    page_size:number;
    previous_page:string;
}
export interface items{   
    last_message: string;
    sender: sender[];
    sent_at:Date;
    subject:string;
    total_unread: number;
    uuid: string;

}
export interface sender{
    display_name: string;
    is_user: boolean
}

export interface messagethread{
    id:number;
    messages:messages[];
    subject:string;
    uuid:string;
}
export interface messages{
    content:string;
    sender:sender[];
    sent_at:Date;
    uuid:string;
}

