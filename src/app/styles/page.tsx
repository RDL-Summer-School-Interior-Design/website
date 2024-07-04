import Head from 'next/head'
import Link from 'next/link'
import Header from '~/app/_components/Header'
import StyleShowcase from '~/app/_components/StyleShowcase'

export default function Styles() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-blue-200 to-white">
      <Head>
        <title>CUBOID AI Styles Showcases</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <Header />
        <StyleShowcase />
      </main>
    </div>
  )
}