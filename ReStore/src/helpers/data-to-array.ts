import { Book } from "../types";

const DateToBookArray = (data : Array<any>) : Array<Book> => {
    return data.map(el => {
        return {
            title: el.volumeInfo.title, 
            author: el.volumeInfo.authors,
            imageLink: el.volumeInfo.imageLinks.thumbnail,
        }
    })
}  

export { DateToBookArray };