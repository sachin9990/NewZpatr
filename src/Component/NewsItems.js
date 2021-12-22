import React from 'react'

const NewsItems = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    return (
        <div className="my-3">
            <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{ left: '87%', zIndex: 1 }}>
                    {source}
                    <span className="visually-hidden">unread messages</span>
                </span>
                <img src={!imageUrl ? "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By- {!author ? "Anonymous" : author}.</small></p>
                    <p className="card-text"><small className="text-muted">Published on- {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-dark">Read More...</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItems