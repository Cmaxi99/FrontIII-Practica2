import Titulo from "./Titulo";
function Card(props){
    
    const {title, children, footer} = props;

    return(
        <>
            <header>
                <Titulo title={title}/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>{footer}</p>
            </footer>
        </>
        
    )
}

export default Card;