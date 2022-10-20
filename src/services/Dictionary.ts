import axios, { AxiosInstance } from 'axios'
import DictionaryModel from '../models/DictionaryModel'

export default class DictionaryService {
  private _http: AxiosInstance
  private _endpoint: string
  private _dictionary: DictionaryModel[]
  private _word : string
  constructor() {
    const urlApi = import.meta.env.VITE_API_URL
    this._http = axios.create({
      baseURL: urlApi,
    })

    this._endpoint = import.meta.env.VITE_DICTIONARY_ENDPOINT
    this._dictionary = []
    this._word = import.meta.env.VITE_WORD
  }

  async loadDictionary() {
    const response = await this._http(this._endpoint, {
      params: {
        VITE_WORD: this._word
      },
    })

    if (response.status == 200) {
      const { data } = response
      this._dictionary = data.map((obj: any) => new DictionaryModel(obj))
    }

    return this._dictionary
  }

 filterDictionary(filter: string) {
   const sanitizedFilter = filter.trim().toLowerCase(
   if (!sanitizedFilter) {
     return this._dictionary
   
   return this._dictionary.filter((c) => {
     return (
       c.word.toLowerCase().includes(sanitizedFilter) ||
       c.meanings.toLowerCase().includes(sanitizedFilter)
     )
   })
 }
}