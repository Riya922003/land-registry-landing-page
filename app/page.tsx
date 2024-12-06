import Navbar from './components/navbar'
import Slideshow from './components/slideshow'
import LoginOptions from './components/login-options'
import ProjectImportance from './components/project-importance'
import FeedbackForm from './components/feedback-form'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Slideshow />
      <LoginOptions />
      <ProjectImportance />
      <FeedbackForm />
    </main>
  )
}
