import React from "react"
import Search from "../Components/Search"

import { Grid } from "@material-ui/core"

const styles = {
    container: {
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
        backgroundColor: "lightgray",
    },
}

const NominationPage = () => {
    return (
        <div style={styles.container}>
            <Grid>
                <Search></Search>
            </Grid>
        </div>
    )
}

export default NominationPage
