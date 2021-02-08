import Head from 'next/head'

import Layout from '../components/Layout'
import HomeSection from '../components/sections/HomeSection'

export default function Home() {
  return (
    <Layout title="Portfolio - Développeur Web">
      <HomeSection />
    </Layout>
  )
}
