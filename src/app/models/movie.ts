export interface Movie {
  id: number;
  title : string;
  original_title:string;
  releaseDate:string;
  posterPath:string;
  backdropPath:string;
  director_id:number;
  overview: string;
  characters:string[]
}
