import { Book } from "../types";

const DateToBookArray = (data : Array<any>) : Array<Book> => {
    return data.map(el => {
        return {
            title: String(el.volumeInfo.title), 
            author: String(el.volumeInfo.authors),
            imageLink: String(el.volumeInfo.imageLinks.thumbnail),
        }
    })
}  

export { DateToBookArray };