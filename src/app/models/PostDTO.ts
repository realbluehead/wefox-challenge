
interface PostDTO {
    id: number;
    title: string;
    content: string;
    lat?: number;
    long?: number;
    image_url?: string;
    created_at?: any;
}

export default PostDTO;