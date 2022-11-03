import { useQuery } from 'react-query';

import MainCarrousel from '../../components/Main Carrousel/MainCarrousel';
import ContentCarrousel from '../../components/Content Carrousel/ContentCarrousel';
import Container from '../../components/Container/Container';
import CarrouselSkeleton from '../../components/Carrousel Skeleton/carroulselSkeleton';
import MainCarrouselSkelet from '../../components/Carrousel Skeleton/mainCarrouselSkeleton';
import { AiTwotoneFire } from "react-icons/ai"
import { MdOutlineRecommend } from "react-icons/md"
import { GiPistolGun, GiTightrope } from "react-icons/gi"
import { RiKnifeBloodFill } from "react-icons/ri"
import { BiLaugh } from "react-icons/bi"
import { FiBookOpen } from "react-icons/fi"


function Home() {

    const SkeletonData = [
        {
            slug: "Em Alta",
            content: ["", "", "", "", "", "", "", "", ""]
        },
        {
            slug: "Recomendados",
            type: "tv",
            content: ["", "", "", "", "", "", "", "", ""]
        },
        {
            slug: "Ação",
            type: "movie",
            content: ["", "", "", "", "", "", "", "", ""]
        },
        {
            slug: "Aventura",
            type: "tv",
            content: ["", "", "", "", "", "", "", "", ""]
        },
        {
            slug: "Terror",
            type: "movie",
            content: ["", "", "", "", "", "", "", "", ""]
        },
        {
            slug: "Comédia",
            type: "tv",
            content: ["", "", "", "", "", "", "", "", ""]
        },
        {
            slug: "Documentários",
            type: "movie",
            content: ["", "", "", "", "", "", "", "", ""]
        },
    ]
    const SkeletonMainData = ["", "", "", "", ""]


    async function getHomeMidia() {
        let response = [
            {
                slug: "Em Alta",
                icon: <AiTwotoneFire />,
                content: await ((await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=4db00bcf6b586a0afd9fb29afa56fa26`)).json())
            },
            {
                slug: "Recomendados",
                icon: <MdOutlineRecommend />,
                type: "tv",
                content: await (await fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=4db00bcf6b586a0afd9fb29afa56fa26`)).json()
            },
            {
                slug: "Ação",
                icon: <GiPistolGun />,
                type: "movie",
                content: await (await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=28`)).json()
            },
            {
                slug: "Aventura",
                icon: <GiTightrope />,
                type: "tv",
                content: await (await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=10759`)).json()
            },
            {
                slug: "Terror",
                icon: <RiKnifeBloodFill />,
                type: "movie",
                content: await (await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=27`)).json()
            },
            {
                slug: "Comédia",
                type: "tv",
                icon: <BiLaugh />,
                content: await (await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=35`)).json()
            },
            {
                slug: "Documentários",
                icon: <FiBookOpen />,
                type: "movie",
                content: await (await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4db00bcf6b586a0afd9fb29afa56fa26&page=1&with_genres=99`)).json()
            },
        ]

        return response
        // setHomeMidia(response)
    }

    async function getMainCarrouselMidia() {
        let randomPage = 0

        do {
            randomPage = Math.floor(Math.random() * 2)
        } while (randomPage === 0)

        const response = fetch(`https://api.themoviedb.org/4/list/8212499?page=1&api_key=4db00bcf6b586a0afd9fb29afa56fa26&language=pt-BR`)

        return (await response).json()
    }

    const homeMidia = useQuery({ queryKey: ["homeMidia"], queryFn: getHomeMidia, refetchOnWindowFocus: false })
    const carrouselMidia = useQuery({ queryKey: ["mainCarrousel"], queryFn: getMainCarrouselMidia, refetchOnWindowFocus: false })

    if (homeMidia.isLoading || carrouselMidia.isLoading) return (
        <Container>
            <MainCarrouselSkelet midia={SkeletonMainData} />
            <CarrouselSkeleton content={SkeletonData} />
        </Container>
    )

    return (
        <Container>
            {carrouselMidia.data && <MainCarrousel midia={carrouselMidia.data.results} />}
            {homeMidia.data && <ContentCarrousel content={homeMidia.data} />}
        </Container>
    );
}

export default Home;
