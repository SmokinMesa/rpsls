import Link from 'next/link'
import styles from "../styles/Home.module.css";


export default function Home() {
    return (
        <div className={styles.wrapper}>
            <main className={styles.main}>
                <h1>Dare you take on the ultimate Rock Paper Scissors (+) challenge?</h1>

                <button>
                    <Link
                        href="/game"
                        to="/game"
                    >
                        Let me at it!
                    </Link>
                </button>
            </main>
        </div>
    )
}
