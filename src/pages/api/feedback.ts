import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { type, name, email, message, happinessRating } = req.body

    const payload = {
      text: `*${name}* (_${email}_) sent new feedback:
:arrow_right: *Happiness Rating*: ${happinessRating}
:file_folder: *Type*: ${type}
:speech_balloon: *Message* ${message}
      `,
    }

    try {
      const response = await fetch(process.env.SLACK_WEBHOOK_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        res.status(200).json({ message: 'Feedback submitted successfully!' })
      } else {
        res
          .status(response.status)
          .json({ message: 'Failed to submit feedback' })
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

export default handler
