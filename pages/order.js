import Headers from '../component/header'
import {Fragment, useState, useMemo, useEffect} from 'react';
import axios from 'axios';
import Head from 'next/head';
import useSWR from 'swr';

const formatter = Intl.NumberFormat( 'ko-KR' );

// const data = [
//     { name: '오늘의 커피', price: 2500 },
//     { name: '에스프레소', price: 2800 },
//     { name: '아메리카노', price: 3000 },
//     { name: '카페라떼', price: 3500 },
//     { name: '카페모카', price: 3800 },
//     { name: '마끼야또', price: 4000 },
//   ];

  const getMenuData = function(url) {
      return axios.get(url)
      .then(
          res => res.data
      )
      .catch(
          err => console.log(err)
      )
  }

const OrderComp = () => {
    const [ selected, setSelected ] = useState( [] );    
    const sum = useMemo(
        () => selected.reduce( ( previousValue, item ) => previousValue + item.price, 0 ),
        [ selected ]
      );    

    // 총 판매금액
    const [totalPrice,setTotalPrice] = useState('0');

    const useConfirm = (message = null,onOrder,onCancel) => {
        if(!onOrder || typeof onOrder != "function"){            
            return;
        }

        if(!onCancel || typeof onCancel != "function"){
            return;
        }

        const confirmAction = () =>{
            if(window.confirm(message)){
                onOrder();
            }else{
                onCancel();
            }
        };

        return confirmAction;
    }
    

    // 주문처리 액션
    const orderConfirm = () => {
        console.log('주문처리');
        setTotalPrice(parseInt(totalPrice) + parseInt(sum));
        console.log(parseInt(totalPrice) + parseInt(sum));
        // 주문정보 초기화
        setSelected([]);        
    }

    // 취소처리 액션
    const cancelConfirm = () => {
        console.log('취소처리');
        // 주문정보 초기화
        setSelected([]);
    }

    const confirmOrder = useConfirm(
        `주문 합계는 ${formatter.format( sum )}원입니다. 주문하시겠습니까?`,
        orderConfirm,
        cancelConfirm
    )
 
    const {data,err} = useSWR('./api/menu',getMenuData);

    if(err){
        return <> 에러가 발생했습니다.</>
    }

    if(!data){
        return <>로딩중입니다.!!!!</>
    }
 
    return (
        <div className='container'>
            <Head>
                <title>주문하기 - Caffe : 온라인 커피 주문</title>
            </Head>      
            <Headers/>
            <h1 className="font-bold">Order</h1>

            <h2 className="text-xl font-bold">메뉴판</h2>
            <dl>
                {
                    data.map(element => (
                        <Fragment key={element.name}>
                            <dt>{element.name}</dt>
                            <dd>
                                {formatter.format( element.price ) }원
                                <small>
                                    <button onClick={() =>{
                                        if(selected.includes(element)){
                                            setSelected(selected.filter(item => item !== element)); // 선택된 항목 제외
                                        }else{
                                            setSelected(
                                                [...selected,element]   // 선택 항목 추가
                                            );
                                        }
                                    }}>
                                        [ { selected.includes( element ) ? '선택 해제' : '선택' } ]
                                    </button>
                                </small>
                            </dd>
                        </Fragment>
                    ))
                }
            </dl>
            <hr/>

            <h2 className="text-xl font-bold">주문서</h2>
            <ul className="list-unstyled">
                { 
                    selected.map( item => <li key={ item.name }>{ item.name } : {formatter.format(item.price)}</li> ) 
                }
            </ul>
            합계 : { formatter.format( sum ) }원
            <div className="mt-4">
                <button className="btn btn-primary btn-lg" onClick={confirmOrder}>
                    주문하기
                </button>
            </div>
            <hr/>
            <h2 className="text-xl font-bold">금일 판매금액 : {formatter.format(totalPrice)}</h2>

        </div>
    )
}


export default OrderComp