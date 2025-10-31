export default function Book({ book }){
    return (<li>Name: {book.title} Author: {book.author} Price: {book.price}</li>);
}