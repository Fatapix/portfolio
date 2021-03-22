import Head from 'next/head'
import axios from 'axios'

import Layout from '../components/Layout'
import HomeSection from '../components/sections/HomeSection'
import AboutSection from '../components/sections/AboutSection'
import PortfolioSection from '../components/sections/PortfolioSection'
import { GetServerSideProps } from 'next'

export default function Home({ projects }) {
  return (
    <Layout title="Portfolio - Développeur Web">
      <HomeSection />
      {/* <AboutSection /> */}
      <PortfolioSection data={{ projects }} />
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = await axios.get('http://localhost:1337/projects').then((res) => { return res.data })
  return {
    props: { projects },
  }
}