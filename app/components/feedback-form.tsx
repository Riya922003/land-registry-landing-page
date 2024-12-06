'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your feedback!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-2xl px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">We Value Your Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50 p-8 rounded-lg shadow-md">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-slate-700">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-slate-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-slate-700">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-slate-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium text-slate-700">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full border-slate-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">
            Submit Feedback
          </Button>
        </form>
      </div>
    </section>
  )
}

