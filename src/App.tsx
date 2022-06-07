import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css'


export function App() {
  
  return (
    <div>
      <Header />

        <div className={styles.wrapper}>
            <Sidebar />

            <main>
              <Post 
                author="Leandro Viana"
                content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam autem natus quam beatae officia sed voluptate laborum quaerat expedita labore consequuntur exercitationem mollitia officiis, veritatis dolore at nesciunt neque tempora!
                "
              />
              <Post 
                author="Matheus Souza"
                content="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                "
              />
            </main>

        </div>


    </div>
  )
}

