import config from '../../config'

export default function PortfolioSection({ data }) {

    function truncate(str, n, useWordBoundary){
        if(str.length <= n) { return str }

        const subString = str.substr(0, n-1)
        
        return (useWordBoundary 
          ? subString.substr(0, subString.lastIndexOf(" ")) 
          : subString) + "..."
    }

    return (
        <section className="portfolio-section">
            <h1>Portfolio</h1>
            <div className="projects-container">
                {data.projects.map((project) => (
                    <div className="card">
                        <div className="card-img">
                            <img src={config.API_URL + project.picture.url}></img>
                        </div>
                        <div className="card-content">
                            <h2>{project.title}</h2>
                            <p>
                                {truncate(project.content, 115, true)}
                            </p>
                            <a>En savoir plus...</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}