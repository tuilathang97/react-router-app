import React from 'react'
import {Outlet} from 'react-router-dom'

export function Home() {
    return(<div>
        <h1>[Company website]</h1>
    </div>)
}

export function About() {
    return(<div>
        <h1>[About]</h1>
        <p>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a 
            type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining 
            essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem Ipsum 
            passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
    </div>)
}

export function History() {
    return(<div>
        <h1>History</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a 
        type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s 
        with the release of Letraset sheets containing Lorem Ipsum 
        passages, and more recently with desktop publishing software 
        like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>)
}

export function Contact() {
    return(<div>
        <h1>[Contact]</h1>
    </div>)
}

export function ErrorPage() {
    return(<div>
        <h1>404 Not Found</h1>
    </div>)
}