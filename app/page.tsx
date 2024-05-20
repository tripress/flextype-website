import Image from 'next/image'
import styles from './home.module.css'

const mainGridItem = [
  {
    icon: 'Icon',
    name: 'Post'
  },
  {
    icon: 'Icon',
    name: 'Photo'
  },
  {
    icon: 'Icon',
    name: 'Album'
  },
  {
    icon: 'Icon',
    name: 'Project'
  },
  {
    icon: 'Icon',
    name: 'More'
  }
]

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col w-full">
      <div className="flex w-full items-center justify-between px-8 pb-4 pt-[233px] ">
      <div className='font-bold text-4xl'>FlexType</div>
        <div className="font-bold text-3xl">
          The Next Way
          <br />
          To Show Yourself
        </div>
      </div>
      <div className={`${styles.mainGrid}`}>
        {mainGridItem.map((item) => (
          <div key={item.name} className={`${styles.mainGridItem} group`}>
            <div>{item.icon}</div>
            <div className='text-2xl transition-all group-hover:font-bold'>{item.name}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
