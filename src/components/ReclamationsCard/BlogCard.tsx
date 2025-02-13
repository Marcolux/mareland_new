import './blogCard.scss'
import { RESOURCE_FOLDER } from "../../config"
import { Link } from 'react-router-dom'

interface BlogCardProps {
    title: string
    author: string
    info: string
    abstract: string
    link: string
    img: string
}
const BlogCard = (props: BlogCardProps) => {
    return (
        <div className='blogCardMain flex col-12 mt-35'>
            <div className='p-0 cardImg'>
                <img src={props.img}></img>
            </div>
            <div className='p-20 flex flex-column flex-justifyContent-center cardContent'>
                <div className='flex flex-column flex-alignItems-start'>
                    <p className='fontSize22 text-bold my-0'>{props.title}</p>
                    <div className='flex flex-alignItems-center fontSize15' id='infoText'>
                        <p className='my-10 mr-5'>- {props.author}</p>
                        <p className='fontSize14 my-0 text-italic'>{props.info}</p>
                    </div>
                </div>
                <div className='cardAbstract'>
                    <p className='fontSize14'>{props.abstract}</p>
                </div>
                <div className='col-12 flex flex-justifyContent-end'>
                    <button className='btn-2 mt-10 flex'>
                        <Link to={props.link} target='_blank'>Read More</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BlogCard