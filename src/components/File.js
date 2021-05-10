import React from 'react'

export default function File({file}) {
    return (
        <a href = {file.url} className="btntext-truncate w-100">
            {file.name}
        </a>
    )
}
