import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const ContactRoute = () => {
  return (
    <div className="container mx-auto py-24">
      <Card className="p-6 shadow-none border-none">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Contact Information</CardTitle>
          <CardDescription>
            You can also reach out to me through these channels.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground">Cornwall, United Kingdom</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">
              <a href="mailto:jaimie.j.hemmings@gmail.com">
                jaimie.j.hemmings@gmail.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Portfolio</h3>
            <p className="text-muted-foreground">
              <a href="https://www.jaimieh.co.uk">
                <Button className="font-semibold">
                  Visit Portfolio
                </Button>
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Social Media</h3>
            <div className="flex gap-4">
              <a href="https://github.com/JaimieHemmings" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <FaGithub className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/jaimiehemmings/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <FaLinkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ContactRoute