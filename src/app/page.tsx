// src/pages/index.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { Box, Button, Container, Modal, Card, Typography } from '@mui/material'
import HappinessRating from '../app/components/HappinessRating'
import FeedbackForm from '../app/components/FeedbackForm'

const Home: React.FC = () => {
  const [showForm, setShowForm] = useState(false)
  const [happinessRating, setHappinessRating] = useState<string | null>(null)

  useEffect(() => {
    const lastRatingDate = localStorage.getItem('lastRatingDate')
    const today = new Date().toISOString().split('T')[0]
    if (lastRatingDate !== today) {
      setShowForm(true)
    }
  }, [])

  const handleRatingSelect = (rating: string) => {
    setHappinessRating(rating)
    localStorage.setItem(
      'lastRatingDate',
      new Date().toISOString().split('T')[0]
    )
  }

  const handleCloseForm = () => {
    setShowForm(false)
  }

  return (
    <Container>
      <Box display="flex" justifyContent="center" mt={5}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowForm(true)}
        >
          Open Feedback Form
        </Button>
      </Box>

      <Modal open={showForm} onClose={handleCloseForm}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
        >
          <Card sx={{ p: 4, maxWidth: 500 }}>
            {!happinessRating ? (
              <HappinessRating onSelect={handleRatingSelect} />
            ) : (
              <FeedbackForm
                happinessRating={happinessRating}
                handleClose={handleCloseForm}
              />
            )}
          </Card>
        </Box>
      </Modal>
    </Container>
  )
}

export default Home
