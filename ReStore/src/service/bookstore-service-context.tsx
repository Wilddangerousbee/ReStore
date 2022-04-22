import axios from "axios";

export default class ServiceApi {
    

    readonly _usrlSwapi : string = "https://www.googleapis.com/books/v1/volumes?q=computer&key=AIzaSyCexOQqGdPPQm8ZKvJ_YfDQ0mFktAbIyjg&maxResults=40";

    getDate = async (url = this._usrlSwapi) => {
        return (await axios.get(url)).data;
    }
}
