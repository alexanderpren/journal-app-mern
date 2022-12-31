import { SaveOutlined } from "@mui/icons-material"
import { Grid, Typography, Button, TextField } from "@mui/material"
import { fontWeight } from "@mui/system"
import { ImageGallery } from "../components";


export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography
          variant="body1"
          fontSize={39}
          fontWeight="light"
          color="initial"
        >
          29 de Agosto 2023
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary">
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Add title"
          label="Title"
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What's happen today?"
          minRows={5}
          sx={{ border: "none", mb: 1 }}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  )
}
