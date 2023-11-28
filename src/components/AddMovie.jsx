import { useState } from "react";

const AddMovie = ({addMovie}) => {
    const [movie, setMovie] = useState({
        title: "",
        description: "",
        posterUrl: "",
        rating: 0,
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setMovie((prev) => {
            return({
                ...prev, 
                [name]: value
            })
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addMovie(movie)
        setMovie({title: "", description: "", posterUrl: "", trailer: "", rating: 0})
    } 

    return(
        <form style={{marginTop: "20px", marginBottom: "20px", display: "", width: "80vw", gap: "10px"}}>
            <h3 style={{width: "40%", height: "3rem", fontSize: "24px", textAlign: "left", marginLeft: "20px"}}>Add a new movie</h3>
                <input type="text" value={movie.title} onChange = {handleChange} id="title" name="title" placeholder="Title" style={{width: "300px", height: "3rem", fontSize: "16px", textAlign: "left", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px"}} /><br/>
                <input type="text"  value={movie.description} onChange = {((event) => handleChange(event))} id="description" name="description" placeholder="Description" style={{width: "300px", height: "3rem", fontSize: "16px", textAlign: "left", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px"}}/><br/>
                <input type="text"  value={movie.posterUrl} onChange = {((event) => handleChange(event))} id="posterUrl" name="posterUrl" placeholder="PosterURL" style={{width: "300px", height: "3rem", fontSize: "16px", textAlign: "left", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px"}}/><br/>
                <input type="text"  value={movie.trailer} onChange = {((event) => handleChange(event))} id="trailer" name="trailer" placeholder="Trailer Link" style={{width: "300px", height: "3rem", fontSize: "16px", textAlign: "left", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px"}}/><br/>
                <input type="number"  value={movie.rating} onChange = {((event) => handleChange(event))} id="rating" name="rating" placeholder="Rating" style={{width: "300px", height: "3rem", fontSize: "16px", textAlign: "left", borderRadius: "10px", marginLeft: "20px", marginBottom: "10px"}}/><br/>
                <button type="submit" onClick={handleSubmit} style={{width: "10%", height: "3rem", fontSize: "16px", textAlign: "center", borderRadius: "10px", marginLeft: "20px"}}>Submit</button>
        </form>
    )
};

export default AddMovie;