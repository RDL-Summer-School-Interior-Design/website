import Head from 'next/head'
import Header from '~/app/_components/Header'
import ImageGenerationForm from '~/app/_components/ImageGenerationForm'
import StyleShowcase from '~/app/_components/StyleShowcase'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-blue-200 to-white">
      <Head>
        <title>CUBOID AI - AI Powered Interior Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <Header />
        <ImageGenerationForm />
        <StyleShowcase />
      </main>
    </div>
  )
}