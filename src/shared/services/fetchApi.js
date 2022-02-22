import axios from "axios";

const instance = axios.create({
    baseURL: "https://pixabay.com/api/",
    params: {
        key: "24480892-2cf9ff0ac9dbac3af2a958edd",
        per_page: 12,
        image_type: 'photo',
        orientation: 'horizontal',
    }
});

const searchPictures = (page = 1, q) => {
    return instance.get("/", {
        params: {
            page,
            q
        }
    })
}
export const picturesApi = {
    searchPictures
}


