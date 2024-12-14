import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="container mx-auto my-10">
      <Component {...pageProps} />
    </div>
  )
}
