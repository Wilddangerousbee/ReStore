import { Book } from "../types";

const DateToBookArray = (data : Array<any>) : Array<Book> => {
    return data.map(el => {
        return {
            title: String(el.name), 
            author: String(el.author)
        }
    })
}  

export { DateToBookArray };