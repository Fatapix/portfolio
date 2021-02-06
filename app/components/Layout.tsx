import Head from 'next/head'

import Header from './Header'

export default function Layout({ children, title }) {
    return (
        <div className="content">
            <Head>
                <title>{ title }</title>
            </Head>
            <Header />
            { children }
        </div>
    )
}