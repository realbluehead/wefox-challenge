
interface PostDTO {
    id: number;
    title: string;
    content: string;
    lat?: number;
    long?: number;
    image_url?: string;
}

export default PostDTO;