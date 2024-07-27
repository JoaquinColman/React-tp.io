import './Item.css'
const Item = ({id, title, price, img, stock}) => {

    return (
    <div className='Card'>
        <article className="CardItem">
            <header className="Header">
            <h2 className="ItemHeader">
                    {title}
                </h2>   
            </header>
            <picture>
                <img src={img} alt={title} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Price: ${price}
                </p>
                <p className="Info">
                    Stock: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <link to={`/item/${id}`} className='Option'>Add to cart</link>
            </footer>
            
        </article>
    </div>
    )  
}

export default Item