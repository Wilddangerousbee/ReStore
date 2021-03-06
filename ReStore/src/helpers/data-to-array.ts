import { Book } from "../types";

const DateToBookArray = (data : Array<any>) : Array<Book> => {
    
    return data.map(el => {
        let imageLink = ""
        try{
            imageLink = el.volumeInfo.imageLinks.thumbnail;
        } catch {
            try{
                imageLink = el.volumeInfo.imageLinks.smallThumbnail;
            } catch {
                imageLink = "";
            }
        }
        return {
            title: el.volumeInfo.title, 
            author: el.volumeInfo.authors,
            imageLink: imageLink,
            categories: el.volumeInfo.categories,
            description: el.volumeInfo.description
        }
    })
}  

export { DateToBookArray };