import Pokemon from "../models/pokemon";
import { get } from "../api/pokemon"

const Detail = {
    render: async function (id) {
        const poke = await get(id)
        console.log(poke)
        const pokemons: Pokemon[] = poke.data

        return `
            <div class="mx-auto">
                <img src="${pokemons.image}" alt="" >
                <h4 >${pokemons.name}</h4>
                <div>
                    ${pokemons.type.map(loai => `
                        ${loai.type.name}
                    `).join('|')}
                </div>
                <div >
                    Weight:${pokemons.weight} -
                    Height:${pokemons.height}
                </div>
            </div>
           
        `
    }
}
export default Detail