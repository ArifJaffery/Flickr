export interface item{
    title:string;
    link:string;
    media:string;
    modified:string;
    date_taken:string; 
    description: string;
    published:string;
    author:string;
    author_id:string;
    tags:string;
};

export interface jsonFlickrFeed {
    title:string;
    link:string;
    description:string;
    modified:string;
    generator:string; 
    items: item[];
    id:string;
    icon:string;
    subtitle:string;
    updated:string;
}; 
export interface flickrAppState {
    title:string;
    copyright:string;
    pagesize:number;
};






    
