import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Headers from '../component/header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>메인 - Caffe : 온라인 커피 주문</title>
      </Head>      
      <Headers
      />
      {/* <header className='flex flex-row p-2 justify-between'>
        <div>
        <Link href="#none" className='btn btn-link'>Logo</Link>
        </div>
        <div>
          <Link href="/introduce" className='btn btn-link'>Introduce</Link>
          <a href="#none" className='btn btn-link'>Order</a>
          <a href="#none" className='btn btn-link'>Help</a>
        </div>
      </header> */}

      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Caffe</h1>
          <p className="col-md-8 fs-4">온라인으로 주문하고 편하게 커피를 받아보세요!</p>

          <Link href="/introduce" passHref>
            <button className="btn btn-primary btn-lg" type="button">Caffe 소개</button>
          </Link>
          <Link href="/order" passHref>
            <button className="btn btn-outline-primary btn-lg ml-2" type="button">주문하기</button>
          </Link>
        </div>        
      </div>

   
    </div>
  )
}
