export interface BandType {
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
  id: string
  name: string
  type: string
  releaseDate: string
}

export interface ArtistType {
  id: string
  name: string
  role: string
}