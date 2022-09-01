import Artist from "./Artist";
import SearchBar from "./SearchBar";

const Colony = ({name, artists}) => {
    return <section className="colony py-3">
        <SearchBar />
        <header className="mb-5 text-center">
            <h2>{name}</h2>
            <p class="text-muted">Music Group</p>
        </header>

        <main class="container-fluid">
            <div class="row">
            {
                artists.map((item, index) => <div key={item?._id || index} class="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2">
                    <Artist {...item}/>
                </div>)
            }
            </div>
        </main>
    </section>
}

export default Colony;