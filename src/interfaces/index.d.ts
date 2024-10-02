


interface BaseResponse {
  error: boolean;
  msg: string;
  status: number;
}



interface ResCheckEmailUsed extends BaseResponse {
  data: {
    validEmail: boolean;
  }
}

interface ResLogin extends BaseResponse {
  data: {
    id: string
    user: string
    validPassword: string
    token: string
    photo?: string
  },
}

interface ResponseUploadImage {
  msg: string,
  nameImage: string
  url: string
}

interface ResponseCheckToken {
  error: string,
  acces: boolean
}

interface UserData {
  id: string
  name: string
  lastName: string
  email: string
  password: string
  imageProfile: string
}


type ResGetAllBreweries = Brewery[]

interface Brewery {
  id: string
  name: string
  brewery_type: string
  address_1?: string
  address_2?: string
  address_3: unknown
  city: string
  state_province: string
  postal_code: string
  country: string
  longitude?: string
  latitude?: string
  phone?: string
  website_url?: string
  state: string
  street?: string
}
