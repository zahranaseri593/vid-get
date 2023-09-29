export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    btnType?: "button" | "submit";
}

export interface VideoFilesProps {
    'id': number;
    'quality': 'hd' | 'sd';
    'file_type': string;
    'width': number;
    'height': number;
    'fps': number;
    'link': string;
}

export interface VideoProps {
    'id': number;
    'width': number;
    'height': number;
    'url': string;
    'image': string;
    "full_res": null ,
    "tags": never[],
    'duration': number;
    'user':{
        'id': number;
        'name': string;
        'url': string;
    };
    'video_files': VideoFilesProps[];
    'video_pictures': {
        'id': number;
        'picture': string;
        'nr': number;
    }[];
}

export interface CollectionProps{
    "id": string;
    "title": string;
    "description": null | string;
    "private": boolean;
    "media_count": number;
    "photos_count": number;
    "videos_count": number;
}

export interface CategoryProps{
    'collections' : CollectionProps[];
    "page": number;
    "per_page": number;
    "total_results": number;
    "next_page": string ;
    "prev_page": string ;
}

export interface VideoResult {
    "page": number;
    "per_page": number;
    "total_results": number;
    "next_page"?: string;
    "prev_page"?: string;
    "videos" : VideoProps[];
}