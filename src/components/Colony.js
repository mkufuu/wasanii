import Artist from "./Artist";

const Colony = ({name, artists}) => {
    return <section className="colony">
        <header>
            <h3>{name}</h3>
        </header>

        <main>
            {
                artists.map((item) => <Artist {...item}/>)
            }
        </main>
    </section>
}

export default Colony;