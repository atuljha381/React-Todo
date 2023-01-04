import React from 'react'

export default function Footer() {
    return (
        <>
            <footer>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/">Disabled</a>
                    </li>
                </ul>
            </footer>
        </>
    )
}
