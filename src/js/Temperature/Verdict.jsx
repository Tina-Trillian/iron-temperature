import React from 'react'

const Verdict = ({temp}) => {

    let message;

    if (temp === 0) {
        message="Absolute zero is the point at which the fundamental particles of nature have minimal vibrational motion, retaining only quantum mechanical, zero-point energy-induced particle motion."
    }

    else if (temp < 288 ) {
        message="It's cold outside, wear a sweater"
    }

    else if (temp < 300 ) {
        message="It's nice outside, sun is shining, get away from the computer and go outside"
    }

    else if (temp > 300) {
        message="Global warming sucks"
    }


    return (
        <div>
            <h2>{message}</h2>
        </div>
    )
}

export default Verdict
