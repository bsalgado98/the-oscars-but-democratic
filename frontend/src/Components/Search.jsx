import React from "react"
import { Paper } from "@material-ui/core"

const styles = {
    container: {
        width: "80%",
        height: "10%",
        margin: "5%",
        padding: "2%",
        backgroundColor: "white",
    },
    search: {
        width: "100%",
    },
}

const Search = () => {
    return (
        <Paper style={styles.container}>
            <h3>Search Movie Title</h3>
            <input type="text" style={styles.search}></input>
        </Paper>
    )
}

export default Search
