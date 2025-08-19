import { Metadata } from "next"
import React from "react"
import "./style.css"

export const metadata: Metadata = {
  title: "MyShops",
  description: "This is Your Digital Shop"
}

type RootLayoutProps = {
  children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return <html lang="en">
    <body>
      {children}
    </body>
  </html>
}