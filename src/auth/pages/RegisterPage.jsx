import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { useState } from "react"

const initialState = {
  email: "alex@gmail.com",
  password: "12345",
  displayName: "Alejandro"
}

const formValidations = {
  email: [(value) => value.includes("@"), "email must contain an @"],
  password: [
    (value) => value.length >= 6,
    "Password too short, min 6 characters"
  ],
  displayName: [(value) => value.length >= 1, "Required"]
}
export const RegisterPage = () => {
  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    emailValid,
    passwordValid,
    displayNameValid
  } = useForm(initialState, formValidations)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    if (isFormValid) {
      setFormSubmitted(true)
    }
  }

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} sx={{ mt: 2 }}>
            <TextField
              label="Fullname"
              type="text"
              placeholder="Fullname"
              fullWidth
              value={displayName}
              name="displayName"
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ mt: 2 }}>
            <TextField
              label="email"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              value={email}
              name="email"
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ mt: 2 }}>
            <TextField
              name="password"
              label="password"
              type="password"
              placeholder="password"
              fullWidth
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Create account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Create account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
