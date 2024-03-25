import Facebook from '../../assets/facebook.webp'

import '../social/social.css'

const redes_info = [
    {
        id:1,
        image: Facebook,
        title: 'Facebook',
        url: 'https://www.facebook.com/DianXueMexico'
    }
]

export const Redes = () => {
    return(
        <div className="socials">
            <>
            <h2 className="socials_subtitulo">Siguenos en nuestras redes sociales</h2>
            </>
            <section className='socials_icons'>
            {
                redes_info.map(({id, image, title, url}) => {
                    return(
                        <div key={id} className='social_icon'>
                            <article key={id} className="social__item">
                                <a href={url} className="icon" target="_blank" rel='noreferrer'><img src={image} alt={title}/></a>
                            </article>
                        </div>
                    )
                })
            }
            {/* {
                redes_info.map(({id, image, title, url}) => {
                    return(
                        <div key={id} className="socials_icons">
                            <article key={id} className="portfolio__item">
                                <a href={url} className="footer_icon" target="_blank" rel='noreferrer'><img src={image} alt={title}/></a>
                            </article>
                        </div>
                    )
                })
            } */}
            </section>
        </div>
    )
}

