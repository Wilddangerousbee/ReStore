import axios from "axios";

export default class ServiceApi {
    readonly _usrlSwapi : string = "https://swapi.dev/api/people";

    getDate = async (url = this._usrlSwapi) => {
        return (await axios.get(url)).data;
    }
}
