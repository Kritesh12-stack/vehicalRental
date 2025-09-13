import './globals.css'

export const metadata = {
  title: 'AutoMart - Find Your Perfect Second-Hand Vehicle',
  description: 'Discover thousands of quality pre-owned cars and bikes from trusted sellers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}