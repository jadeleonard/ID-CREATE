import Cta from "./(components)/cta";
import Footer from "./(components)/footer";
import Hero from "./(components)/hero";
import Navbar from "./(components)/navbar";


export default async function Dashboard(request){
    const response = await fetch('http://localhost:3000/api/users');
    return(
        <div>
            
            <Navbar />
            <Hero />
            <Cta />
            <Footer />


        </div>
    )
}