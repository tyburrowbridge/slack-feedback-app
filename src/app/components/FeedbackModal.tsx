// src/components/FeedbackModal.tsx
'use client'

import React, { useState } from 'react'
import { Modal, Card, Box, Typography, Button } from '@mui/material'
import HappinessRating from './HappinessRating'
import FeedbackForm from './FeedbackForm'

interface FeedbackModalProps {
  open: boolean
  onClose: () => void
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ open, onClose }) => {
  const [happinessRating, setHappinessRating] = useState<string | null>(null)

  const handleRatingSelect = (rating: string) => {
    setHappinessRating(rating)
  }

  const handleClose = () => {
    setHappinessRating(null)
    onClose()
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Card sx={{ p: 4, maxWidth: 500 }}>
          {!happinessRating ? (
            <Box>
              <Typography variant="h6">How do you feel today?</Typography>
              <HappinessRating onSelect={handleRatingSelect} />
            </Box>
          ) : (
            <FeedbackForm
              happinessRating={happinessRating}
              handleClose={handleClose}
            />
          )}
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClose}
            sx={{ mt: 2 }}
          >
            Cancel
          </Button>
        </Card>
      </Box>
    </Modal>
  )
}

export default FeedbackModal
