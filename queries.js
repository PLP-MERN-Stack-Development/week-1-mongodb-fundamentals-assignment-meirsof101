// Task one

// Create a new database called plp_bookstore
use ('plp_bookstore')
// Create a collection called books
db.createCollection("books")

// Task two

// Insert sample book data into the books collection
db.books.insertMany([
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 10.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: 'Charles Scribner\'s Sons'
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    published_year: 1932,
    price: 11.50,
    in_stock: false,
    pages: 311,
    publisher: 'Chatto & Windus'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1937,
    price: 14.99,
    in_stock: true,
    pages: 310,
    publisher: 'George Allen & Unwin'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: 'T. Egerton, Whitehall'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Political Satire',
    published_year: 1945,
    price: 8.50,
    in_stock: false,
    pages: 112,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    genre: 'Adventure',
    published_year: 1851,
    price: 12.50,
    in_stock: false,
    pages: 635,
    publisher: 'Harper & Brothers'
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    genre: 'Gothic Fiction',
    published_year: 1847,
    price: 9.99,
    in_stock: true,
    pages: 342,
    publisher: 'Thomas Cautley Newby'
  }
]);

// Find books by genre 
db.books.find({genre: "Fiction"})

// Find books published after 1847
db.books.find({published_year: {$gt: 1847}})

// Find books by specific author
db.books.find({author: "George Orwell"})

// Update price of a specific book
db.books.updateOne({title:  "1984"},
    {$set: {price: 15.99}})

// Deleting a book
db.books.deleteOne({title: "Wuthering Heights"})


// Task three

// Query to show books both in stock and published after 2010
db.books.find({in_stock: true,
    published_year: {$gt: 2010}
})

// Projection queries to return title, author and price fields
db.books.find({genre: "Fiction"},
    {title: 1, author: 1, price: 1, _id: 0})
// Query projection  to return books by George Orwell to show title and price only
db.books.find(
  {author: "George Orwell"},
  {title: 1, price: 1, _id: 0}
)

// query to display books by price
// Sort books by price in ascending order
db.books.find({}).sort({price: 1})
// Sort books by price in descending order
db.books.find({}).sort({price: -1})

// Using limit and skip to implement pagination
// using limit to get the first 5 books sorted by title in ascending order
db.books.find().sort({title: 1}).limit(5)
// using skip to get the next 5 books sorted by title in ascending order
db.books.find().sort({title: 1}).skip(5).limit(5)
// Using limit and skip to get the first 5 books sorted by price in ascending order
db.books.find({}, {title: 1, price: 1, _id: 0}).sort({price: 1}).limit(5)

// Task four

// Aggregation pipeline to calculate the average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" },
      totalBooks: { $sum: 1 } 
    }
  },
  {
    $sort: { averagePrice: -1 } 
  }
])

// Aggregation to find author with most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { bookCount: -1 }
  },
  {
    $limit: 1 
  }
])

// Pipeline that groups books by publication decade and counts them
db.books.aggregate([
  {
    $group: {
      _id: {
        $multiply: [
          { $floor: { $divide: ["$published_year", 10] } },
          10
        ]
      },
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 }
  }
])

// Task five
// Create an index on the title field for faster searches
db.books.getIndexes()

// Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 })

// Using the explain method to analyze a query
db.books.find({ genre: "Fiction" }).explain("executionStats")

// Using the explain method to analyze a query with an index
db.books.find({ author: "George Orwell" }).explain("executionStats")