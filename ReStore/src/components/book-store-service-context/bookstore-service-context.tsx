import axios from "axios";

export default class ServiceApi {
    readonly _usrlSwapi : string = "https://swapi.dev/api/people";

    getDate = async (url : string) => {
        const resp = await axios.get(url);

        return resp.data;
    }
}
