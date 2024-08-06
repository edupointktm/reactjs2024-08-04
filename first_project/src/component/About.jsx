import  Button from '../component/Button'
import React from 'react'

function About() {
    return (
        <>
            <div className="container">
                <h1> ABOUT PAGE</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nisi nobis quaerat debitis. Quod ex consectetur repellendus a cumque deleniti fugiat enim eos nemo. Ex debitis atque nihil excepturi quasi? </p>
                <div>
                    <Button btnName="Post" btnColor="btn btn-primary"/>
                </div>
            </div>
        </>
    )
}

export default About