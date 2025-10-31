import Book from './book.jsx';
export default function Library({ books }){
    return(
        <div>
            <h2>Welcome to the Library</h2>
            <p>Here you can find a variety of books and resources.</p>
            <p>Books Collection: {books.length}</p>
            <p>Address:</p>
            <ul>
                {books.map(book=> <Book key={book.id} book={books} />)}
            </ul>
        </div>
    )
}