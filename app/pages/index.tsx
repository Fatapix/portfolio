import Head from 'next/head'

import Layout from '../components/Layout'
import HomeSection from '../components/sections/HomeSection'
import AboutSection from '../components/sections/AboutSection'
import PortfolioSection from '../components/sections/PortfolioSection'

export default function Home() {
  return (
    <Layout title="Portfolio - Développeur Web">
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
    </Layout>
  )
}
