

export const metadata = {
    title:'Dashboard',
    description:'Create By ww'
}



export default function RootLayout({children}) {
    return(
        <html lang="en">
            <body className="">
                {children}
            </body>
        </html>
    )
}