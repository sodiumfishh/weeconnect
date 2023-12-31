import { ClerkProvider } from '@clerk/nextjs'

import "./globals.css"
import Header from './components/Header'

export const metadata = {
  title: 'WeeConnect',
  description: 'Connecting people with similar interests',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body>
          <Header />
          <div id="root">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  )
}