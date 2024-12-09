export function Footer() {

  const footerYear = new Date().getFullYear()

  return (
    <footer className="pt-6 md:px-8 md:py-0 w-full">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href='https://www.jaimieh.co.uk'
            target="\_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Jaimie Hemmings
          </a>
        </p>
        <p>Jaimie Hemmings &copy; {footerYear}</p>
      </div>
    </footer>
  )
} 