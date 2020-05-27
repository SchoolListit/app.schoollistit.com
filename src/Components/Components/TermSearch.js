import React from 'react';
import { TextField, Grid, Typography, Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function TermSearch( {data, getSearchResults} ) {

        if(data === 'undefined'){
            return null
        } else {
            return (
                <Grid container justify="center" alignItems="center" alignContent="center">
                    <Grid item xs={10}>
                        <Autocomplete
                            fullWidth={true}
                            id="term-search"
                            freeSolo
                            options={data.map((option) => option.value)}
                            renderInput={(params) => (
                            <TextField {...params} variant="outlined" label="search" margin="normal" />
                            )}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <Button onClick={() => getSearchResults(document.getElementById("term-search").value)}>
                            <Typography variant="h6">
                                <FontAwesomeIcon icon="search"></FontAwesomeIcon>
                            </Typography>
                        </Button>
                    
                    </Grid> 
                </Grid>
            )
        }
        
    }

