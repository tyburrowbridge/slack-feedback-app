// src/components/HappinessRating.tsx
'use client'

import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'

interface HappinessRatingProps {
  onSelect: (rating: string) => void
}

const HappinessRating: React.FC<HappinessRatingProps> = ({ onSelect }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h6">How is your experience so far?</Typography>
      <Box>
        <IconButton onClick={() => onSelect(':rage: sad')} aria-label="sad">
          <SentimentVeryDissatisfiedIcon fontSize="large" />
        </IconButton>
        <IconButton
          onClick={() => onSelect(':grinning: satisfied')}
          aria-label="satisfied"
        >
          <SentimentSatisfiedIcon fontSize="large" />
        </IconButton>
        <IconButton
          onClick={() => onSelect(':heart_eyes: happy')}
          aria-label="happy"
        >
          <SentimentVerySatisfiedIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  )
}

export default HappinessRating
