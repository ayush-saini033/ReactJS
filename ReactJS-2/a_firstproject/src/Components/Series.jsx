import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./SeriesCard"
const Series = () => {
  return (
    <ul>
      {
        // curEl is the props
        seriesData.map((curEl) => (
          <SeriesCard key={curEl.id} data={curEl} />
        ))
      }
    </ul>
  )
}

export default Series;
