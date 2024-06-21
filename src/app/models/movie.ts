export interface Movie {
  id: number;
  title : string;
  original_title:string;
  releaseDate:string;
  posterPath:string;
  backdropPath:string;
  popularity:number;
  director:string;
  overview: string;
  budget:number;
  characters:string[]
}
