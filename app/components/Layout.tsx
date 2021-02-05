import Head from 'next/head'

export default function Layout({ children, title }) {
    return (
        <div className="content">
            <Head>
                <title>{ title }</title>
            </Head>
            { children }
        </div>
    )
}