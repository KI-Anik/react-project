import './Country.css'
const Country = ({info}) => {
    const {name, flags} = info;
    return (
        <div className='country'>
            <h5>Name: {name?.common} </h5>
            <img src= {flags.png} alt="" />
        </div>
    );
};

export default Country;