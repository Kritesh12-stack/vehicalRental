import './globals.css'

export const metadata = {
  title: 'Vehicle Rental',
  description: 'Car & Bike Rental Service',
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