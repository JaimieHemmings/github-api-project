import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FaGithub } from 'react-icons/fa';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutRoute = () => {
  return (
    <>
    <section className="py-32">
      <div className="container mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline">
              Github API
              <ArrowDownRight className="ml-2 size-4" />
            </Badge>
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              GithubRef
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              This is a project developed to explore the Github API and its features. It is a simple project that allows you to search for users and repositories on Github.
            </p>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              The Project si created using Vite, TypeScript, TailwindCSS and the amazing Shadcn/ui component Library.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Link to="/">
                <Button className="w-full sm:w-auto">Home</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="w-full sm:w-auto">
                  Get in touch?
                  <ArrowUpRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </div>
          <FaGithub className="w-[50%] h-auto mx-auto" />
        </div>
      </div>
    </section>
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <p className="mb-16 max-w-4xl px-8 font-medium lg:text-3xl">
            &ldquo;It is easy to shoot your foot off with git, but also easy to revert to a previous foot and merge it with your current leg.&rdquo;
          </p>
          <div className="flex items-center gap-2 md:gap-4">
            <Avatar className="size-12 md:size-16">
              <AvatarImage src="https://www.shadcnblocks.com/images/block/avatar-1.webp" />
              <AvatarFallback>Jack William Bell</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="text-sm font-medium md:text-base">Jack William Bell </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default AboutRoute
