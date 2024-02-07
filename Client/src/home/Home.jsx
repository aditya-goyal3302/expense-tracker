import React, { useState } from 'react'
import styles from'./Home.module.css'
import NAV from '../nav/Nav'
import axios from 'axios'

function Home() {

  const [isauth,setisauth] = useState(true)

  return (
    <>
      <NAV />
      {isauth && (<div className={styles.home}>
          <p className={styles.summ}> Summary </p>
          <div className={styles.main1}>
              <span className={styles.t1}> Net Total </span>
              <span className={styles.t2}> ₹ 21,345.21 </span>
          </div>
          <div className={styles.main2}>
              <div>
                <span className={styles.d1} style={{color:"green"}}>Income</span>
                <span className={styles.d2}>₹ 137,849</span>
              </div>
              <div>
              <span className={styles.d1} style={{color:"red"}}>Expense</span>
                <span className={styles.d2}>₹ 137,849</span>
              </div>
              <div>
              <span className={styles.d1} style={{color:"#f6b30d"}}>Savings</span>
                <span className={styles.d2}>₹ 137,849</span>
              </div>
          </div>
          <div className={styles.main3}>
              <div></div>
              <div>
                <div>
                  
                </div>
              </div>
          </div>
      </div>)}
    </>
  )
}

export default Home