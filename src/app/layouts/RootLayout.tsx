import { Inter } from "next/font/google";
import "../styles";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

const inter = Inter({ subsets: ["latin"] });

export const RootLayout = ({ 
    children
}: Readonly<{
    children: React.ReactNode
}>) => {
    return(
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main className="min-h-[calc(100vh-300px)]">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}

