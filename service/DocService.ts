import { Auth } from "@/utils/xhttp";

export const getDocsService = async () => {
    try {
        const response = await Auth.get("/getDocs?page=0&size=5");
        return response.data.payload?.map((apiResponse) => ({
            _id: apiResponse.id,
            title: apiResponse.title,
            slug: apiResponse.category,
            metadata: apiResponse.description,
            published: apiResponse.published,
            files: apiResponse.files,
        }));
    } catch (error) {
        return [];
    }
}


export const getBlogDetailService = async (id: string) => {
    try {
        const response = await Auth.get(`/getBlog/${id}`);
        const apiResponse = response.data.payload;
        return {
            _id: apiResponse.id,
            title: apiResponse.title,
            slug: apiResponse.category,
            metadata: apiResponse.description,
            mainImage: apiResponse.images,
            author: apiResponse.author,
            tags: apiResponse.tags,
            publishedAt: apiResponse.published,
        };
    } catch (error) {
        return error;
    }
}