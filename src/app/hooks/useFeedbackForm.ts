// src/hooks/useFeedbackForm.ts
'use client'

import { useState, ChangeEvent, FormEvent } from 'react'

interface FormData {
  type: string
  name: string
  email: string
  message: string
  happinessRating: string
}

const useFeedbackForm = (happinessRating: string) => {
  const [formData, setFormData] = useState<FormData>({
    type: '',
    name: '',
    email: '',
    message: '',
    happinessRating,
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    console.log('Submitting form:', formData)

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      console.log('Response status:', response.status)

      if (response.ok) {
        alert('Feedback submitted successfully!')
        setFormData({
          type: '',
          name: '',
          email: '',
          message: '',
          happinessRating: '',
        })
      } else {
        throw new Error('Failed to submit feedback')
      }
    } catch (error) {
      console.error('Error submitting feedback', error)
      alert('Failed to submit feedback')
    }
  }

  return {
    formData,
    handleChange,
    handleSubmit,
  }
}

export default useFeedbackForm
