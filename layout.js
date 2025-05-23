import "./globals.css"

export const metadata = {
  title: "Tabpadi - Pay Bills Effortlessly on WhatsApp",
  description: "Settle your airtime, data, electricity, and TV bills effortlessly on WhatsApp with Tabpadi.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#121212]">{children}</body>
    </html>
  )
}
