import instance from "./instance"

export const getAll = () =>{
    return instance.get("/pokemons")
}
export const get = (id) =>{
    return instance.get(`/pokemons/${id}`)
}