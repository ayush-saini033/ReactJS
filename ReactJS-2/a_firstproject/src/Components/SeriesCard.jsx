// export const SeriesCard = (props) 

export const SeriesCard = ({data}) => {

  // destructuring 
  // const {data} = props;

  // further more destructuring
  const {id,img_url,name,rating,description,cast,genre,watch_url} = data;
  return (
    <li key={id}>
        {/* console.log(data) */}
      {/* <div>
        <img src={props.data.img_url} alt={props.data.id} width="40%" height="40%" />
        <h2>Name: {props.data.name}</h2>
        <h3>Rating: {props.data.rating}</h3>
        <p>Summary: {props.data.description} </p>
        <h3>Genere: {props.data.genre}</h3>
        <p>Cast: {props.data.cast}</p>
        <a href={props.data.watch_url} target="_blank">
        </a>
    </div> */}
    {/* <div>
        <img src={data.img_url} alt={data.id} width="40%" height="40%" />
        <h2>Name: {data.name}</h2>
        <h3>Rating: {data.rating}</h3>
        <p>Summary: {data.description} </p>
        <h3>Genere: {data.genre}</h3>
        <p>Cast: {data.cast}</p>
        <a href={data.watch_url} target="_blank">
        </a>
    </div> */}
    <div>
        <img src={img_url} alt={id} width="40%" height="40%" />
        <h2>Name: {name}</h2>
        <h3>Rating: {rating}</h3>
        <p>Summary: {description} </p>
        <h3>Genere: {genre}</h3>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
        </a>
    </div>
      </li>
  );
}