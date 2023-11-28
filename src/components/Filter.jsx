

const Filter = ({handleFilter}) => {

    return (
        <div>
            <label htmlFor="titlesearch"><b>Title</b></label>
            <input type="text" placeholder="Search by title" id="titlesearch" onChange={(event) => (
                handleFilter("title", event.target.value)
            )}/>
            <label htmlFor="ratingsearch"><b>Rating</b></label>
            <input type="text" placeholder="Search by rating" id="ratingsearch" onChange={(event) => (
                handleFilter("rating", event.target.value)
            )}/>
        </div>
    )
}

export default Filter;