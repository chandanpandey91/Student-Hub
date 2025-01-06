'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronRight, Search, Book, Video, Link, Menu,ChevronLeft} from 'lucide-react'
import { Footer } from '@/components/Footer'
import { BackgroundPatterns } from '@/components/BackgroundPatterns'

const resources = [
  { id: 1, title: 'Introduction to React', type: 'article', url: '#', imageUrl: 'https://t3.ftcdn.net/jpg/07/19/82/88/360_F_719828889_wlDcCZ3Y8cpV05JzezY7RrXzc8WjogVI.jpg' },
  { id: 2, title: 'JavaScript Fundamentals', type: 'video', url: '#', imageUrl: 'https://t3.ftcdn.net/jpg/07/19/82/88/360_F_719828889_wlDcCZ3Y8cpV05JzezY7RrXzc8WjogVI.jpg'},
  { id: 3, title: 'CSS Flexbox Guide', type: 'article', url: '#', imageUrl: 'https://t3.ftcdn.net/jpg/07/19/82/88/360_F_719828889_wlDcCZ3Y8cpV05JzezY7RrXzc8WjogVI.jpg'},
  { id: 4, title: 'Building a REST API', type: 'video', url: '#', imageUrl: 'https://t3.ftcdn.net/jpg/07/19/82/88/360_F_719828889_wlDcCZ3Y8cpV05JzezY7RrXzc8WjogVI.jpg' },
  { id: 5, title: 'Git Version Control', type: 'article', url: '#', imageUrl: 'https://t3.ftcdn.net/jpg/07/19/82/88/360_F_719828889_wlDcCZ3Y8cpV05JzezY7RrXzc8WjogVI.jpg' },
  { id: 6, title: 'Responsive Web Design', type: 'video', url: '#', imageUrl: 'https://t3.ftcdn.net/jpg/07/19/82/88/360_F_719828889_wlDcCZ3Y8cpV05JzezY7RrXzc8WjogVI.jpg' },
]

const guides = [
  { id: 1, title: 'Getting Started with Web Development', steps: ['Learn HTML', 'Master CSS', 'Explore JavaScript'] },
  { id: 2, title: 'Becoming a Full Stack Developer', steps: ['Front-end Basics', 'Back-end Fundamentals', 'Database Management'] },
  { id: 3, title: 'Mobile App Development Journey', steps: ['Choose a Platform', 'Learn Swift/Kotlin', 'Understand App Lifecycle'] },
]

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('resources')
  const [searchTerm, setSearchTerm] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const filteredResources = resources.filter(resource => 
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredGuides = guides.filter(guide => 
    guide.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 to-purple-100">
      <BackgroundPatterns />
      <div className="flex flex-grow">
        <motion.div 
          className="bg-white w-64 p-4 shadow-lg"
          initial={false}
          animate={{ width: sidebarOpen ? 256 : 0 }}
        >
          <h1 className="text-2xl font-bold mb-4 text-purple-600">AskMentor</h1>
          {/* <nav>
            <Button 
              variant="ghost" 
              className="w-full justify-start mb-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100"
              onClick={() => setSelectedTab('resources')}
            >
              <Book className="mr-2 h-4 w-4" /> Resources
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-blue-600 hover:text-blue-800 hover:bg-blue-100"
              onClick={() => setSelectedTab('guides')}
            >
              <ChevronRight className="mr-2 h-4 w-4" /> Guides
            </Button>
          </nav> */}

<nav>
      <Button 
        variant="ghost" 
        className="w-full justify-start mb-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100"
        onClick={() => setSelectedTab('resources')}
      >
        <Book className="mr-2 h-4 w-4" /> {/* Font Awesome Book Icon */}
        Resources
      </Button>
      
      <Button 
        variant="ghost" 
        className="w-full justify-start text-blue-600 hover:text-blue-800 hover:bg-blue-100"
        onClick={() => setSelectedTab('guides')}
      >
        <ChevronRight className="mr-2 h-4 w-4" /> {/* Font Awesome ChevronRight Icon */}
        Guides
      </Button>

      {/* Return button */}
      <a href="https://askmentor-website.vercel.app/" className="w-full">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-blue-600 hover:text-blue-800 hover:bg-blue-100"
          onClick={() => setSelectedTab('globe')}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> {/* Font Awesome ChevronLeft Icon for "Return" */}
          Return
        </Button>
      </a>
    </nav>
        </motion.div>

        <div className="flex-1 p-4 overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <Button variant="outline" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu className="h-4 w-4" />
            </Button>
            <div className="flex-1 ml-4">
              <Input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>
          </div>

          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="bg-white">
              <TabsTrigger value="resources" className="data-[state=active]:bg-blue-100">Resources</TabsTrigger>
              <TabsTrigger value="guides" className="data-[state=active]:bg-blue-100">Guides</TabsTrigger>
            </TabsList>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <TabsContent value="resources">
                  <h2 className="text-2xl font-bold mb-4 text-purple-700">Learning Resources</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredResources.map(resource => (
                      <Card key={resource.id} className="bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                        <Image
                          src={resource.imageUrl}
                          alt={resource.title}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                        <CardHeader>
                          <CardTitle className="text-blue-600">{resource.title}</CardTitle>
                          <CardDescription>{resource.type}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button variant="outline" asChild className="w-full">
                            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                              {resource.type === 'video' ? <Video className="mr-2 h-4 w-4" /> : <Link className="mr-2 h-4 w-4" />}
                              Open {resource.type}
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="guides">
                  <h2 className="text-2xl font-bold mb-4 text-purple-700">Learning Guides</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredGuides.map(guide => (
                      <Card key={guide.id} className="bg-white hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <CardTitle className="text-blue-600">{guide.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                            <ol className="list-decimal list-inside">
                              {guide.steps.map((step, index) => (
                                <li key={index} className="mb-2 text-gray-700">{step}</li>
                              ))}
                            </ol>
                          </ScrollArea>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  )
}

