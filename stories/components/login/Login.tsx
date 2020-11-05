import {
  Box,
  Button,
  Container,
  Form,
  Flex,
  IconButton,
  InputAdornment,
  Text,
  Typography,
  Alert,
} from '../../../src'
import { Icons } from '../../util/Icons'
import { TextField } from '@material-ui/core'
import React, { useState } from 'react'

export interface LoginProps {
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
  email: string
  password: string
  errorMessage?: string
  onSignIn: () => void
  passwordRules?: string
  submitting?: boolean
}

export const Login: React.FC<LoginProps> = ({
  errorMessage,
  onChangeEmail,
  onChangePassword,
  email,
  password,
  onSignIn,
  passwordRules,
  submitting,
  children,
}) => {
  const [hidePassword, setHidePassword] = useState(true)
  return (
    <Container component="main" maxWidth="sm">
      <Flex alignItems="center" flexDirection="column" mt={3}>
        {children}
        {errorMessage && (
          <Box mb={3}>
            <Alert severity="error">
              <Text>{errorMessage}</Text>
            </Alert>
          </Box>
        )}
        <Form
          width={1}
          onSubmit={(e) => {
            e.preventDefault()
            onSignIn()
          }}
        >
          <Box mb={3}>
            <TextField
              fullWidth
              required
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              type="email"
              value={email}
              onChange={onChangeEmail}
              variant="outlined"
            />
          </Box>

          <Box mb={1}>
            <TextField
              fullWidth
              required
              name="password"
              label="Password"
              type={hidePassword ? 'password' : 'text'}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={onChangePassword}
              aria-describedby="password-contraints"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setHidePassword((v) => !v)}
                      edge="end"
                    >
                      {hidePassword ? (
                        <Icons.Visibility />
                      ) : (
                        <Icons.VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {passwordRules && (
            <Box id="password-contraints">
              <Typography variant="caption"> {passwordRules}</Typography>
            </Box>
          )}
          <Button
            mt={3}
            color="primary"
            fullWidth
            type="submit"
            disabled={submitting}
          >
            Sign In
          </Button>
        </Form>
      </Flex>
    </Container>
  )
}
