import { Github, Twitter, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">AskMentor</h3>
            <p className="mt-2">Empowering students with knowledge</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 AskMentor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

