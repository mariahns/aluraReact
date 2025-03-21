import './Dia.css'

//desestruturou o props
const Dia = ({data}) =>{
    return(
        <div class="container">
        <div class="card">
            <div class="card-title">{data}</div>
            <div class="circle">
                <div class="top-left"></div>
                <div class="top-right"></div>
                <div class="bottom-left"></div>
                <div class="bottom-right"></div>
            </div>
        </div>
    </div>
    )

}

export default Dia