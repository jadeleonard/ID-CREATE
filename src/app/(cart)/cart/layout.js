
import { ClerkProvider } from '@clerk/nextjs'


export const metadata = {
  title:'MY Cart',
  description:'card'




}


export default function RootLayout({children}) {
  return(
   
      <html lang='eng'>
        <body>
          {children}
        </body>
      </html>
    
  )
}