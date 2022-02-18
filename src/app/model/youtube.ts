export interface youtubeDetails {
    items:{
        snippet:snippet[]
    }

}


export interface snippet{
    channelTitle:string
    description:string
    publishedAt:Date
    resourceId:{
        videoId:string
    }
    thumbnails:{
        default:{
            url:string
        }
    }
    title:string

}