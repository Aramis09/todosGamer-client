import axios, { AxiosResponse } from 'axios'

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    'x-access-token': "",
    'auth-secret-key': process.env.NEXT_PUBLIC_CLIENT_SECRET,
  }
})


export const userService = {
  checkEmailUsed: ({ email }: { email: string }): Promise<AxiosResponse<ResCheckEmailUsed>> => api.post(`/user/validate-repeate-user`, {
    email
  }),
  createUser: ({ body }: { body: Omit<UserData, "id"> }) => api.post(`/user`, body),
  uploadPhoto: ({ body }: { body: FormData }): Promise<AxiosResponse<ResponseUploadImage>> => api.post(`/images`, body),
  login: ({ body }: { body: Pick<UserData, "email" | "password"> }): Promise<AxiosResponse<ResLogin>> => api.post(`/user/login`, body),
  delete: ({ token }: { token: string | null }) => api.delete(`/user/delete`, {
    headers: {
      "auth-token": token
    }
  })

}

export const jwtService = {
  checkToken: ({ token }: { token: string | null }): Promise<AxiosResponse<ResponseCheckToken>> => api.post(`/jwt/verificationToken`, null, {
    headers: {
      "auth-token": token
    }
  })
}


export const breweryService = {
  getAll: ({ statePlaceSelected }: {
    statePlaceSelected?: string
  }): Promise<AxiosResponse<ResGetAllBreweries>> => {
    if (statePlaceSelected) {
      return axios.get(`https://api.openbrewerydb.org/v1/breweries?by_state=${statePlaceSelected}`)
    }
    return axios.get(`https://api.openbrewerydb.org/v1/breweries`)
  },
  getById: ({ id }: {
    id: string
  }): Promise<AxiosResponse<Brewery>> => {

    return axios.get(`https://api.openbrewerydb.org/v1/breweries/${id}`)
  },
}

