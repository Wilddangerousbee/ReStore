import axios from "axios";

export default class ServiceApi {
    _searchString : string = "computer";

    getSearchString = () : string => {
        return this._searchString;
    }

    _usrlSwapi : string = `https://www.googleapis.com/books/v1/volumes?q=${this.getSearchString()}&key=AIzaSyCexOQqGdPPQm8ZKvJ_YfDQ0mFktAbIyjg&maxResults=40`;

    setSearchString = (newSearch : string) : void => {
        this._searchString = newSearch;
        this._usrlSwapi = `https://www.googleapis.com/books/v1/volumes?q=${this.getSearchString()}&key=AIzaSyCexOQqGdPPQm8ZKvJ_YfDQ0mFktAbIyjg&maxResults=40`;
    } 

    getDate = async () => {
        return (await axios.get(this._usrlSwapi)).data;
    }

    searchBook = async (searchString : string) => {
        this.setSearchString(searchString);
        return await this.getDate();
    }
}
