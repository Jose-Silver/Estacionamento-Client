import { Modelo } from "@/models/modelo";
import axios, { AxiosInstance } from "axios";

class ModeloClient {

    private axiosModelo: AxiosInstance;

    constructor() {
        this.axiosModelo = axios.create({
            baseURL: "http://localhost:8080/modelo",
            headers: { "Content-Type": "application/JSON" }
        })
    }

    public async findById(id: number): Promise<Modelo> {
        try {
            return (await this.axiosModelo.get<Modelo>(`/${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async listaAll(): Promise<Modelo[]> {
        try {
            return (await this.axiosModelo.get<Modelo[]>(`/all`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(modelo: Modelo): Promise<string> {

        var personalizedData = {
            nome: modelo.nome,
            marca: modelo.marca.id,
        };

        var jsonData = JSON.stringify(personalizedData);

        try {
            return (await this.axiosModelo.post<string>(``, jsonData)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async editar(id: number, modelo: Modelo): Promise<string> {
        try {
            return (await this.axiosModelo.put<string>(`/update/${id}`, modelo)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async excluir(id: number): Promise<string> {
        try {
            return (await this.axiosModelo.delete<string>(`/delete/${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }
}
export default new ModeloClient;