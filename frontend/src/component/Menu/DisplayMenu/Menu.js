import React from 'react';
import '../Menu.css'



const Menu = ({ selectedFoods }) => {
    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2> Menu  </h2>
                    <div className='underline'> </div>
                </div>
                <div className="section-center">
                    {selectedFoods && selectedFoods.map((food) => {
                        const { _id, title, image, description, price } = food;
                        return <article key={_id} className="menu-item">

                            {image ? <img src={process.env.PUBLIC_URL + image} alt={title} className='photo' /> :
                                <img src={process.env.PUBLIC_URL + "/images/Boston.jpg"} alt={title} className='photo' />}
                            <div className="item-info">
                                <header>
                                    <h4>{title}</h4>
                                    <h4 className="price">${price}</h4>
                                </header>
                                <p className='item-text'>{description}</p>
                            </div>
                        </article>
                    })}
                </div>
            </section>
        </main>
    )
};

export default Menu;