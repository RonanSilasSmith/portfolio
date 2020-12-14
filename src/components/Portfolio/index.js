import React from 'react';

function Portfolio() {
    const portfolioItems = [
        {
            name: 'Run Buddy',
            link: 'https://ronansilassmith.github.io/Run-Buddy/',
            photo: 'placeholder.png',
        },
        {
            name: 'Run Buddy',
            link: 'https://ronansilassmith.github.io/Run-Buddy/',
            photo: 'placeholder.png',
        },
        {
            name: 'Run Buddy',
            link: 'https://ronansilassmith.github.io/Run-Buddy/',
            photo: 'placeholder.png',
        },
        {
            name: 'Run Buddy',
            link: 'https://ronansilassmith.github.io/Run-Buddy/',
            photo: 'placeholder.png',
        },
        {
            name: 'Run Buddy',
            link: 'https://ronansilassmith.github.io/Run-Buddy/',
            photo: 'placeholder.png',
        },
        {
            name: 'Run Buddy',
            link: 'https://ronansilassmith.github.io/Run-Buddy/',
            photo: 'placeholder.png',
        },
    ]


    return (
        <section>
            <h2>Portfolio</h2>
            <div class="grid-container">
                {portfolioItems.map((item, i) => (
                    <div class="flex">
                        <img
                            src={require(`../../assets/${item.photo}`)}
                            alt={item.name}
                            className="img-thumbnail mx-1"
                            key={item.name}
                        />
                        <h3>{item.name}</h3>
                        <h4><a href="/">Github Link</a></h4>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio;
