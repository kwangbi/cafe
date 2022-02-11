import Headers from '../component/header'
import Head from 'next/head';
import { useState } from 'react';

const ContactUsComp = () => {
    const [subject,setSubject] = useState('');
    const [email,setEmail] = useState('');
    const [content,setContent] = useState('');

    const handleSubmitClick = (e) =>{
        // form submit 기능 취소
        e.preventDefault();
        console.log('input data : ',subject);
    }


    return (
        <div className='container'>
            <Head>
                <title>문의하기</title>
            </Head>               
            <Headers/>
            <h1 className='font-bold'>Contact Us</h1>

            <form onSubmit={handleSubmitClick}>
            <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">제목</label>
                    <input type="subject" className="form-control" id="exampleFormControlInput1" 
                        placeholder="제목을 입력하세요" value={subject}
                        onChange={e => setSubject(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" 
                        placeholder="name@example.com" value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">내용</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" 
                        value={content} onChange={e=> setContent(e.target.value)}></textarea>
                </div>
                <button className='btn btn-primary btn-lg' onClick={handleSubmitClick}>문의하기</button>
            </form>

        </div>
    )
}


export default ContactUsComp