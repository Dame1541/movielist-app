// import React, { useState, useRef } from 'react';
// import { AiFillStar } from 'react-icons/ai';
// import Movie2 from './Movie2.js';

// export default function MovieList2() {
//     const [movies, setMovies] = useState([]);

//     const inputRef = useRef();
//     const gradeRef = useRef();
//     let newId = "";

//     const getStars = (nr) => {
//         let stars = [];
//         for (let y = 0; y < nr; y++)
//             stars.push(<AiFillStar style={{ color: "yellow" }} id={y} />);
//         return stars;
//     };

//     function deleteItem(id) {
//         setMovies(movies.filter(item => item.id !== id));
//     }

//     function addItem(title, grade) {
//         handleValidation();
//             if (movies.length > 0) {
//                 newId = movies[movies.length - 1].id + 1
//             } else {
//                 newId = 1
//             }
//         }

//         setMovies([...movies, {
//             id: newId,
//             title: inputRef.current.value,
//             grade: parseInt(gradeRef.current.value),
//             stars: getStars(gradeRef.current.value),

//         }])
//         inputRef.current.value = ""
//         gradeRef.current.value = 0;
//     }


//     function sortAlpha(title) {
//         var temp = 0;
//         for (var i = 0; i <= movies.length; i++) {
//             for (var j = 0; j < (movies.length - i - 1); j++) {
//                 if (movies[j].title > movies[j + 1].title) {
//                     temp = movies[j];
//                     movies[j] = movies[j + 1];
//                     movies[j + 1] = temp;
//                     console.log(temp);

//                     setMovies([...movies]);
//                 }
//             }
//         }
//         return 1;
//     }

//     function sortGrade(grade) {
//         var temp = 0;
//         for (var i = 0; i <= movies.length; i++) {
//             for (var j = 0; j < (movies.length - i - 1); j++) {
//                 if (movies[j].grade > movies[j + 1].grade) {
//                     temp = movies[j];
//                     movies[j] = movies[j + 1];
//                     movies[j + 1] = temp;
//                     console.log(temp);

//                     setMovies([...movies]);
//                 }
//             }
//         }
//         return 1;
//     }

//     return (
//         <div>
//             <h1>Movie List</h1>
//             <div id="form-control">
//                 <form>
//                     <fieldset>
//                         <legend>Choose your favorite movie</legend>
//                         <input className="form-control" ref={inputRef} type="text" />
//                         <input type="reset" defaultValue="Reset" />

//                     </fieldset>
//                 </form>
//             </div>

//             <div id="input-list">
//                 <ul className="group-movie-list">
//                     {movies.map((movie) =>
//                         <Movie key={movies.id}
//                             item={movie} deleteItem={deleteItem} />)}
//                 </ul>
//             </div>

//             <div id="choose-grade">
//                 <label for="grade">Choose a grade:</label>
//                 <select type="text" id="grade" className="form-control" ref={gradeRef}>
//                     <option value="0">Välj betyg här...</option>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                     <option value="5">5</option>
//                 </select>
//             </div>

//             <div id="add-button">
//                     <button onClick={addItem} >
//                         Add movie
//                     </button>
//             </div>

//             <h3>Added movies:</h3>
//             <div id="sort-alpha">
//                 <button onClick={sortAlpha}>
//                     Alphabetic order
//                 </button>
//             </div>

//             <div id="sort-grade">
//                 <button onClick={sortGrade}>
//                     Grade order
//                 </button>
//             </div>

//         </div>
//     );
// }
