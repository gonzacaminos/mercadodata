import Layout from '@/components/layout'
import Nav from '@/components/nav'
import Search from '@/components/search'

export default function Home() {
  return (
    <Layout>
      <div className="h-screen w-full p-10 bg-gradient-to-b from-astronaut to-astronaut-darker">
        <div className="container mx-auto">
          <Nav />
          <Search />
        </div>
      </div>
    </Layout>
  )
}
