import {book} from "../type/type"

export function isBookValid(book : book) : boolean {
    if (book.author !== undefined  && book.title !== undefined)
        return true
    else
        return false
}