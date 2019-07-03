export const getMovieList = (cate: string) => {
  return request({
    url: `/api/movie/${cate}?apikey=`
  })
}