//STEP 1 Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array
// let favoritemovie = ['Mad Max', 'Taken', 'Commando', 'Gladiator', 'John Wick']
// console.log (favoritemovie[1])

//STEP 2 Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
// let movies = new Array(5)
// movies[0] = 'Mad Max'
// movies[1]= 'Taken'
// movies[2]= 'Commando'
// movies[3] = 'Gladiator'
// movies[4] = 'John Wick'
// console.log(movies[0])

//STEP 3 Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
// let movies = new Array(5)
// movies[0] = 'Mad Max'
// movies[1]= 'Taken'
// movies[2]= 'Commando'
// movies[3] = 'Gladiator'
// movies[4] = 'John Wick'
// movies.splice(2,0,'Inception')
// console.log (movies.length)

//STEP 4 Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
// let movies = []
// movies[0] = 'Mad Max'
// movies[1]= 'Taken'
// movies[2]= 'Commando'
// movies[3] = 'Gladiator'
// movies[4] = 'John Wick'

// delete(movies[0])
// console.log (movies)

// movies.shift()
// console.log (movies)

//STEP 5 Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for/in loop to iterate through the array and display each movie within the console window.
// let movies = []
// movies[0] = 'Mad Max'
// movies[1]= 'Taken'
// movies[2]= 'Commando'
// movies[3] = 'Gladiator'
// movies[4] = 'John Wick'
// movies[5] = 'Inception'
// movies[6] = 'The Matrix'

// for (let movie in movies) {
//     console.log(movies[movie])
// }

//STEP 6 Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.
// let movies = []
// movies[0] = 'Mad Max'
// movies[1]= 'Taken'
// movies[2]= 'Commando'
// movies[3] = 'Gladiator'
// movies[4] = 'John Wick'
// movies[5] = 'Inception'
// movies[6] = 'The Matrix'

// for (let movie of movies) {
//     console.log(movie)
// }


//STEP 7 Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.
// let movies = []
// movies[0] = 'Mad Max'
// movies[1]= 'Taken'
// movies[2]= 'Commando'
// movies[3] = 'Gladiator'
// movies[4] = 'John Wick'
// movies[5] = 'Inception'
// movies[6] = 'The Matrix'

// movies.sort()

// for (let movie of movies) {
//     console.log(movie)
// }


//STEP 8 Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
// let movies = []
// movies[0] = 'Mad Max'
// movies[1]= 'Taken'
// movies[2]= 'Commando'
// movies[3] = 'Gladiator'
// movies[4] = 'John Wick'
// movies[5] = 'Inception'
// movies[6] = 'The Matrix'
// let leastFavMovies =['Kirk', 'Blitz', 'Rage']

// console.log ('Movies I like:\n\n')
// for (let movie of movies) {
//     console.log(movie)
// }
// console.log ('\n\nMovies I regret watching:\n\n')
// for (let Lmovie of leastFavMovies) {
//     console.log(Lmovie)
// }

//STEP 9 Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted
// let movies = []
// movies[0] = 'Mad Max'
// movies[1]= 'Taken'
// movies[2]= 'Commando'
// movies[3] = 'Gladiator'
// movies[4] = 'John Wick'
// movies[5] = 'Inception'
// movies[6] = 'The Matrix'
// let leastFavMovies =['Kirk', 'Blitz', 'Rage']

// movies = movies.concat(leastFavMovies)
// console.log(movies.sort().reverse())

//STEP 10 Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.
// let movies = []
// movies[0] = 'Mad Max'
// movies[1]= 'Taken'
// movies[2]= 'Commando'
// movies[3] = 'Gladiator'
// movies[4] = 'John Wick'
// movies[5] = 'Inception'
// movies[6] = 'The Matrix'
// let leastFavMovies =['Kirk', 'Blitz', 'Rage']

// movies = movies.concat(leastFavMovies)
// console.log(movies.sort().reverse())
// console.log (movies.pop())

//STEP 11 Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.
// let movies = []
// movies[0] = 'Mad Max'
// movies[1]= 'Taken'
// movies[2]= 'Commando'
// movies[3] = 'Gladiator'
// movies[4] = 'John Wick'
// movies[5] = 'Inception'
// movies[6] = 'The Matrix'
// let leastFavMovies =['Kirk', 'Blitz', 'Rage']

// movies = movies.concat(leastFavMovies)
// console.log(movies.sort().reverse())
// console.log (movies.shift())

//STEP 12 Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like.

// let movies = ['Mad Max', 'Taken', 'Commando', 'Gladiator', 'John Wick', 'Inception', 'The Matrix']
// let leastFavMovies = ['Kirk', 'Blitz', 'Rage']
// let list = [...movies, ...leastFavMovies].sort().reverse()

// console.log('Movie list: ', list)

// let likeMovies = ['Frozen', 'Shrek', 'Tangled', 'Moana', 'Zootopia', 'Brave', 'Monsters', 'Mulan', 'Bambi', 'Aladdin']

// let dislikeInd = leastFavMovies.map(Lmovie => list.indexOf(Lmovie))

// dislikeInd.forEach((index, i) => list[index] = likeMovies[i])

// console.log('My Movie list: ', list)

//STEP 13 Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this:
// movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
// Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.

// let movies = [['The Shawshank Redemption',1],['The Godfather',2],['The Dark Knight', 3],['Inception',4],['Schindler List',5]]
// let mName = movies.filter((item) => typeof item[0] === 'string')
//     .map((item) => item[0])
// console.log(mName)


//STEP 14 Create a string array called employees using literal notation and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:
// Employees:
// ZAK
// JESSICA
// MARK
// FRED
// SALLY

// let employees = ['ZAK', 'JESSICA', 'MARK', 'FRED','SALLY']

// function showEmployee(array){
//     console.log ('Employees:\n\n')
//     array.forEach(employee => {
//         console.log (employee)
//     })
// }

// showEmployee(employees)


//STEP 15 Write a JavaScript function to filter false, null, 0 and blank values from an array.
// Test Data: console.log(filterValues([58, '', 'abcd', true, null, false, 0]))
// Expected Result: [58, "abcd", true]

// function filterValues (array) {
//     return array.filter(value => value !==false && value !==null && value !==0 && value !=='')
// }
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]))

// //STEP 16 Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.

// function getRandom(array){
//     let randInd = Math.floor(Math.random() *array.length)
//     return array[randInd]
// }

// myArray = [37,62,14,85,47,93,29,56,11,74]
// console.log(getRandom(myArray))

// //STEP 17 Write a JavaScript function to get the largest number from a numeric array.

// function largestNum(array){
//     array.sort()
//     return array.pop()
// }
// myArray = [37,62,14,85,47,93,29,56,11,74]
// console.log(largestNum(myArray))
