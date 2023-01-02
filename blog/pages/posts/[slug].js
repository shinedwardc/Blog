import { useRouter } from 'next/router'

export default function PostPage({ page }) {
    const router = useRouter()
    const { slug } = router.query

  return (
    <div>
        <div className = "text">
            <p>{slug}</p>
        </div>
        <br />      
    </div>
  )
}

export async function getStaticProps() {
  
}
