'use client'
import Image from 'next/image'
import react, {useState} from 'react'
import styles from './home.module.css'
import {IconAlbum, IconPhoto, IconPost, IconProject, IconMore} from '@/assets/icons'

const mainGridItem = [
  {
    icon: <IconPost />,
    name: 'Post',
    image:
      'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    icon: <IconPhoto />,
    name: 'Photo',
    image:
      'https://images.unsplash.com/photo-1585242903678-253dbd2ac7fa?q=80&w=3213&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    icon: <IconAlbum />,
    name: 'Album',
    image:
      'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    icon: <IconProject />,
    name: 'Project',
    image:
      'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    icon: <IconMore />,
    name: 'More',
    image:
      'https://images.unsplash.com/photo-1574854985835-75e85a422aeb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fG1vcmV8ZW58MHx8MHx8fDA%3D'
  }
]

export default function Home() {
  const [openItem, setOpenItem] = useState('null')
  return (
    <main className="container mx-auto flex flex-col w-full">
      <div className="flex flex-col md:flex-row w-full items-center justify-between px-8 pb-12 pt-[96px] md:pt-[166px] gap-8">
        <div className="flex items-center gap-4">
          <Image src="/icon.png" alt="logo" width={80} height={80} />
          <div className="font-bold text-4xl">FlexType</div>
        </div>
        <div className="font-bold text-xl md:text-3xl text-center md:text-left">
          The Next Way
          <br />
          To Show OURSELFS
        </div>
      </div>
      <MainGrid openItem={openItem} setOpenItem={setOpenItem} />
      <MainContent openItem={openItem} />
    </main>
  )
}

const MainGrid = ({openItem, setOpenItem}: any) => {
  return (
    <div className={`${styles.mainGrid}`}>
      {mainGridItem.map((item) => (
        <div key={item.name} className={`${styles.mainGridItem} group relative p-2`} onClick={() => setOpenItem(item.name)}>
          <Image
            src={item.image}
            alt={item.name}
            width={600}
            height={600}
            className="object-cover object-center w-full h-full absolute rounded-3xl m-2 p-2 -translate-x-4 -translate-y-4 md:opacity-0 group-hover:opacity-100 transition-all"
          />
          <div className="w-full h-full flex flex-col items-end justify-between p-4">
            <div className="text-xl md:text-4xl transition-all group-hover:md:text-6xl z-10">{item.icon}</div>
            <div className="text-lg md:text-6xl md:font-bold transition-all group-hover:md:text-4xl z-10">{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

const MainContent = ({openItem}: any) => {
  return <>{openItem}</>
}
