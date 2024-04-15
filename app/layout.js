import './globals.css'

export const metadata = {
  title: 'Jose Echeverri - Portfolio',
  description: 'Software Engineer | UI/UX Designer | Frontend Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
