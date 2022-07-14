import Navigo from 'navigo'
import Header from './components/header'
import Detail from './pages/detail'
import Home from './pages/home'

const router = new Navigo('/')

const app = document.querySelector<HTMLDivElement>('#app')!

interface componentBase {
  render: () => any
}
const print = async (component:componentBase,id) =>{
  app.innerHTML = await component.render(id)
}

router.on({
  '/':() => print(Home),
  '/pokemons/:id':(data) =>{
    const id=data.data.id
    print(Detail,id)
  }
})

router.resolve()


