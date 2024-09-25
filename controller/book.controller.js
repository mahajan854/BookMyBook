import Book from "../model/book.model.js";
//Asynchronous function because we fetch data and sedn getting time so that we have used it 
export const getBook=async(req,res)=>{
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error",error);
        res.status(500).json(error);
    }
}