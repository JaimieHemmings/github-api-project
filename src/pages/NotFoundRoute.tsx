import { ArrowDownRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFoundRoute = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline">
              Error: 404
              <ArrowDownRight className="ml-2 size-4" />
            </Badge>
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Something has gone wrong
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Maybe the hamsters fell asleep again. We couldn't find what you were looking for. Would you like to go back to the homepage?
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Link to="/">
                <Button className="w-full sm:w-auto">Home</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="w-full sm:w-auto">
                  Get in touch?
                  <ArrowDownRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </div>
          <FaGithub className="w-full h-auto" />
        </div>
      </div>
    </section>
  )
}

export default NotFoundRoute
