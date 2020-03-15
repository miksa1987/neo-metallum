export interface BandType {
  id?: string
  name: string
  genre: string
  country: string
  location?: string
  status?: string
  label?: string
  yearsActive?: string
  photoUrl?: string
  logoUrl?: string
  members?: ArtistType[]
  albums?: AlbumType[]
}

export interface AlbumType {
  id?: string
  name: string
  type: string
  releaseDate: string
  coverUrl?: string
  format?: string
  label?: string
  lineup?: ArtistType[]
  reviews?: ReviewType[]
  versions?: VersionType[]
  musics?: SongType[]
}

export interface ArtistType {
  id?: string
  name: string
  role: string
  gender?: string
  origin?: string
  age?: string
  realName?: string
  biography?: string
  photoUrl?: string
  trivia?: string
}

export interface ReviewType {
  id: string
  title: string
  rating: string
  album?: string
  date?: string
  text?: string
}

export interface VersionType {
  id: string
  releaseDate: string
  format: string
  description?: string
}

export interface SongType {
  id: string
  title: string
  length: string
  number: string
}