import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <>
        <div className='main-footer'>
            <h4 className='name-footer'>Nick Leonidov | Software Engineer | 2020</h4>
            <div className='contact-links'>
                <a className='email-link' href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZXhczSBXdkjVjbsbbsGHKprRqgTrWdHfNfJsfCSNSFWDdzHBLzVrbpZwfwVQzKKdPtVNB">
                    <i class="gg-mail">Email</i>
                </a>
            <br />
                <a className='linkedin' href="https://www.linkedin.com/in/nickleonidov/">
                    <i class="gg-mail">LinkedIn</i>
                </a>
            <br />
                <a className='github' href="https://github.com/nleonidov/">
                    <i class="gg-mail">Github</i>
                </a>
            </div>
        </div>
        </>
    )
}