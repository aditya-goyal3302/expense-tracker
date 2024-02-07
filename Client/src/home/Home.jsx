import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import styles from'./Home.module.css'
import NAV from '../nav/Nav'
import Login from '../Auth/login'
import Signup from '../Auth/signup'
import Button from '@mui/joy/Button';

// import axios from 'axios'

function Home() {

  // const dispatch = usedispatch()
  const isauth = useSelector(state => state.user.isAuth) 
  const data = useSelector(state => state.user.user)  
  const [total,setTotal] = useState(0)
  const [page, setPage] = useState(1)

  useEffect(() => {
    if(data){
      // setPage(0)
      console.log(isauth, data)
      // setTotal(data.currentbalance.income - data.currentbalance.expenses)
    }
  },[data])

  return (
    <>
      <NAV />
      {isauth && (<div className={styles.home}>
          <p className={styles.summ}> Summary </p>
          <div className={styles.main1}>
              <span className={styles.t1}> Net Total </span>
              <span className={styles.t2}> ₹ {total} </span>
          </div>
          <div className={styles.main2}>
              <div>
                <span className={styles.d1} style={{color:"green"}}>Income</span>
                <span className={styles.d2}>₹ {data.currentbalance.income}</span>
              </div>
              <div>
              <span className={styles.d1} style={{color:"red"}}>Expense</span>
                <span className={styles.d2}>₹ {data.currentbalance.expenses}</span>
              </div>
              <div>
              <span className={styles.d1} style={{color:"#f6b30d"}}>Savings</span>
                <span className={styles.d2}>₹ {data.currentbalance.savings}</span>
              </div>
          </div>
          <div className={styles.main3}>
              <div></div>
              <div>
                <div className={styles.btns}>
                  <Button color="neutral" onClick={function(){}} className={styles.btnstyl} >ADD +</Button>
                </div>
              </div>
          </div>
      </div>)}

        {!isauth && page === 1 && (<div className={styles.login}>
          <Login 
            setPage ={setPage}
           />
        </div>)}
        {!isauth && page === 2 && (<div className={styles.login}>
          <Signup 
            setPage={setPage}
           />
        </div>)}

    </>
  )
}

export default Home