export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    btnType?: "button" | "submit";
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
    'video_files': {
        'id': number;
        'quality': 'hd' | 'sd';
        'file_type': string;
        'width': number;
        'height': number;
        'fps': number;
        'link': string;
    }[];
    'video_pictures': {
        'id': number;
        'picture': string;
        'nr': number;
    }[];
}