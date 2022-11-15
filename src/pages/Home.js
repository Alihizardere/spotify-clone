import React from 'react'
import Section from '../components/Section'
import HeroSection from '../components/HeroSection'


function Home() {
  const items= [
    {
      id: 1,
      title: "NKVT",
      description: "Türkiye'nin en sıkı çalma listesi. Kapak: Allame x Aspova",
      image: "https://i.scdn.co/image/ab67706f000000021cee3575b6025ab5321302bc",
      type:"album"

    },
    {
      id: 2,
      title: "Hot Hits Türkiye",
      description: "Dinlemekten vazgeçemediklerin ve en yeni hitler. Kapak: Melike Şahin x Gazapizm",
      image: "https://i.scdn.co/image/ab67706f00000002d7eeb058986bb8372a3dbe5d",
      type:"album"
    },
    {
      id: 3,
      title: "Ezhel",
      description: "Sanatçı",
      image: "https://i.scdn.co/image/ab6761610000f178107a201f2039a163564972cf",
      type:"artist"

    },
    {
      id: 4,
      title: "TED Talks Daily",
      description: "TED",
      image: "https://i.scdn.co/image/e048b26a93dc026381ab0107e6c01e4e3417b14a",
      type:"podcast"

    },
    {
      id: 5,
      title: "Podcastlendiniz",
      description: "Podcastlendiniz",
      image: "https://i.scdn.co/image/ab67656300005f1fa4fa285abbd2ddde4b19b5b9",
      type:"podcast"

    },
    {
      id: 6,
      title: "Mahmut Orhan",
      description: "Sanatçı",
      image: "https://i.scdn.co/image/ab6761610000f1786e6aced95a28ba90ad335b1d",
      type:"artist"

    },
    {
      id: 7,
      title: "Yabancı Pop",
      description: "Hit pop trendleri. Kapak: Rihanna",
      image: "https://i.scdn.co/image/ab67706f0000000279e1853418390fc65fc272e1",
      type:"album"

    },
    {
      id: 8,
      title: "Madrigal",
      description: "Sanatçı",
      image: "https://i.scdn.co/image/ab6761610000f178ce1038a47c24185063716b1e",
      type:"artist"

    }
    
  ]

  
  return (
    <div className="grid gap-y-6 ">  
       <HeroSection/>   
       <Section title="Bugünün en çok dinlenenleri" more="/blabla" items={items} />
       <Section title="Bugünün en çok dinlenenleri" more="/blabla" items={items} />
       <Section title="Bugünün en çok dinlenenleri" more="/blabla" items={items} />
       <Section title="Bugünün en çok dinlenenleri" more="/blabla" items={items} />       
    </div>
  )
}

export default Home