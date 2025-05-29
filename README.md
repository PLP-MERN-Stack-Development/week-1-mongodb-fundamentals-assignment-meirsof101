[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19666412&assignment_repo_type=AssignmentRepo)

# MongoDB Fundamentals Assignment

This repository contains my solutions for the MongoDB Fundamentals assignment. The project demonstrates MongoDB setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

---

## Assignment Overview

**Tasks Completed:**
1. Set up a MongoDB database (local/Atlas)
2. Performed basic CRUD operations
3. Wrote advanced queries (filtering, projection, sorting)
4. Created aggregation pipelines for data analysis
5. Implemented indexing for performance optimization

---

## Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd week-1-mongodb-fundamentals-assignment-meirsof101
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up MongoDB:**
   - [ ] Install MongoDB locally **OR** create a [MongoDB Atlas](https://www.mongodb.com/atlas/database) cluster.
   - [ ] Update your MongoDB connection string in `queries.js` if needed.

4. **Populate the database:**
   ```sh
   node insert_books.js
   ```

5. **Run queries:**
   ```sh
   node queries.js
   ```

---

## Files Included

- `Week1-Assignment.md`: Assignment instructions
- `insert_books.js`: Script to populate the database with sample data
- `queries.js`: All required MongoDB queries (CRUD, advanced, aggregation, indexing)
- `<screenshot filename>`: Screenshot of my MongoDB database (see below)

---

## Screenshot

![MongoDB Database Screenshot](<collection_sample_data.png>)

---

## Notes

- Node.js version: v18.x
- MongoDB version: <your version or Atlas>
- Any issues or troubleshooting steps:  
  <your notes here, if any>

---

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/)

---

## Author

- Name: <Fidel Ngoka>
- GitHub: [<https://github.com/meirsof101>](https://github.com/meirsof101)