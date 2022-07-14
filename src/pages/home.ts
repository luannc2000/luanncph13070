import Pokemon from "../models/pokemon";
import { getAll } from "../api/pokemon"

const Home = {
    render: async function(){
        const data= await getAll();
        console.log(data);
        
        const pokemons :Pokemon[] =data.data
        return `
            <div class="container mx-auto grid grid-cols-5 gap-3">
                    ${pokemons.map(item => `
                        <a href="/pokemons/${item.id}">
                        <div>
                            <img src="${item.image}" alt="">
                            <h1>${item.name}</h1>
                            <div class="flex">
                                ${item.type?.map(loai => `
                                <div class="${loai.type.name} ">
                                    ${loai.type.name}
                                </div>
                                `).join('|')}
                            </div>
                        </div>
                        </a>
                    `).join('')}
                
            </div>
           
        `
    }
}
export default Home