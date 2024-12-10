import UserResults from '@/components/users/UserResults'
import Hero from '@/components/Hero'
import Carousel from '@/components/Carousel'
import UserSearch from '@/components/users/userSearch'

const HomeRoute = () => {
  return (    
    <>
      <Hero />
      <UserSearch />
      <Carousel />
      <UserResults />
    </>
  )
}

export default HomeRoute
