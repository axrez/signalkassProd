const extractData = data =>
  data[0]
    ? data[0].data.map((d, i) => ({
        name: i,
        uv: d,
      }))
    : [];

export default extractData;
