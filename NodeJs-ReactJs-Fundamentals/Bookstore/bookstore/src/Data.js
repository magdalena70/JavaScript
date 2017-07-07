const data = {
    getBooks: () => {
        return new Promise((resolve, reject) => {
            resolve([
                {
                    id: 1, 
                    title: 'ABC Book', 
                    image: 'http://pngimg.com/uploads/book/book_PNG2111.png',
                    description: 'Some description here....',
                    price: 30.00,                                         
                    postedOn: '2016/03/22',
                    authorName: 'Author Name 1', 
                    authorId: 1,
                    comments: [
                        {content: 'Some comment for book', author: 'AnyOne'}
                    ]
                },
                {
                    id: 2, 
                    title: 'News for world',
                    image: 'http://pngimg.com/uploads/book/book_PNG2111.png', 
                    description: 'Some description here....',
                    price: 10.90,                                                            
                    postedOn: '2017/03/20',
                    authorName: 'Author Name 1', 
                    authorId: 1,
                    comments: []
                },
                {
                    id: 3, 
                    title: 'Some Book',
                    image: 'http://pngimg.com/uploads/book/book_PNG2111.png', 
                    description: 'Some description here....',
                    price: 25.55,                                                            
                    postedOn: '2016/08/02',
                    authorName: 'Author Name 2', 
                    authorId: 2,
                    comments: []
                },
                {
                    id: 4, 
                    title: 'Book for girls only...',
                    image: 'http://pngimg.com/uploads/book/book_PNG2111.png',
                    description: 'Some description here....bla bla bla',
                    price: 18.99,                                                            
                    postedOn: '2017/01/10',
                    authorName: 'Author Name 3',
                    authorId: 3,
                    comments: [
                        {content: 'Some comment for book', author: 'AnyOne'},
                        {content: 'Some comment for book', author: 'AnyOne'}
                    ]
                },
                {
                    id: 5, 
                    title: 'Some Interesting Book',
                    image: 'http://pngimg.com/uploads/book/book_PNG2111.png',
                    description: 'Some description here....',
                    price: 22.99,                     
                    postedOn: '2017/05/18',
                    authorName: 'Author Name 3',
                    authorId: 3,
                    comments: [
                        {content: 'Some comment for book', author: 'AnyOne'},
                        {content: 'Some comment for book', author: 'AnyOne'},
                        {content: 'Some comment for book', author: 'AnyOne'},
                        {content: 'Some comment for book', author: 'AnyOne'}
                    ]
                }                                                                
            ])
            reject('No books')          
        })
    },
    getAuthors: () => {
        return new Promise((resolve, reject) => {
            resolve([
                {
                    id: 1, 
                    name: 'Author Name 1', 
                    image: 'http://images.clipartpanda.com/author-clipart-author-clipart-1.jpg'},
                {
                    id: 2, 
                    name: 'Author Name 2', 
                    image: 'http://images.clipartpanda.com/author-clipart-author-clipart-1.jpg'},
                {
                    id: 3, 
                    name: 'Author Name 3', 
                    image: 'http://images.clipartpanda.com/author-clipart-author-clipart-1.jpg'}                              
            ])
            reject('No authors')
        })
    }
}

export default data