import Layout from '@/components/layout'
import Nav from '@/components/nav'
import Search from '@/components/search'
import Triangle from '@/components/triangle'

export default function Home() {
  return (
    <Layout>
      <div className="h-screen w-full p-10 bg-gradient-to-b from-astronaut to-astronaut-darker relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <Nav />
          <Search />
        </div>
        <Triangle />
      </div>
    </Layout>
  )
}
