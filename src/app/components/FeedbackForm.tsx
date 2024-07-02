// src/components/FeedbackForm.tsx
'use client'

import React from 'react'
import {
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  Typography,
} from '@mui/material'
import useFeedbackForm from '../hooks/useFeedbackForm'

interface FeedbackFormProps {
  happinessRating: string
  handleClose: () => void
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({
  happinessRating,
  handleClose,
}) => {
  const { formData, handleChange, handleSubmit } =
    useFeedbackForm(happinessRating)

  const onSubmit = (e: React.FormEvent) => {
    handleSubmit(e)
    handleClose()
  }

  const [feedbackType, setFeedbackType] = React.useState<string>('feature')

  const handleFeedbackType = (
    event: React.MouseEvent<HTMLElement>,
    feedbackType: string
  ) => {
    if (feedbackType !== null) {
      setFeedbackType(feedbackType)
      formData.type = feedbackType
      console.log(feedbackType)
    }
  }

  return (
    <Box component="form" onSubmit={onSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6">Submit Feedback</Typography>
      <ToggleButtonGroup
        value={feedbackType} // Ensure formData.type is not null
        exclusive
        onChange={handleFeedbackType} // Pass name and value separately
        fullWidth
        sx={{ mt: 2 }}
      >
        <ToggleButton name="feature" value={'feature'}>
          Feature
        </ToggleButton>
        <ToggleButton name="bug" value={'bug'}>
          Bug
        </ToggleButton>
        <ToggleButton name="question" value={'question'}>
          Question
        </ToggleButton>
      </ToggleButtonGroup>

      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
        multiline
        rows={4}
      />
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </Box>
    </Box>
  )
}

export default FeedbackForm
