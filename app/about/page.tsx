import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About us',
    description: 'A typical human social media about page',
    keywords: 'social media about company',
}

export default async function About(){
    return (
        <main>
            <h1>About Us</h1>
            <p>We're a real human company with a real human about page written by a real human.</p>
        </main>
    )
}