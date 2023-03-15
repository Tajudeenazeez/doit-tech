import Services from '@/components/services/Services'
import Welcome from '@/components/welcome/Welcome'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className='bg-red-100 text-3xl text-gray-600 h-[75vh] relative'>
        <Welcome/>
      </main>
      <Services/>
    </>
  )
}
