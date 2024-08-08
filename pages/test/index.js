import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getFromSession, getTest } from '../api/authApi'

// Axios 기본 설정

axios.defaults.withCredentials = true
function Test() {
  const [sessionData, setSessionData] = useState(null)

  // 기본 설정
  const instance = axios.create({
    baseURL: 'http://3.35.131.46', // 스프링 서버의 URL로 변경
    withCredentials: true, // 쿠키를 포함하기 위해 설정
  })
  // 세션에 값 저장
  const saveToSession = async value => {
    try {
      const response = await instance.get(`/saveToSession?value=test`)
      console.log(response.data)
    } catch (error) {
      console.error('Failed to save to session', error)
    }
  }
  // 세션에서 값 가져오기
  const getFromSession = async () => {
    try {
      const response = await instance.get(`/getFromSession`)
      console.log(response.data)
    } catch (error) {
      console.error('Failed to get from session', error)
    }
  }
  // Redis 연결 테스트
  const testRedisConnection = async () => {
    try {
      const response = await instance.get(`/testRedisConnection.do`)
      console.log(response.data)
    } catch (error) {
      console.error('Redis connection test failed', error)
    }
  }
  useEffect(() => {
    // 세션 테스트 요청
    axios
      .get('http://3.35.131.46/getFromSession')
      .then(response => {
        setSessionData(response.data)
      })
      .catch(error => {
        console.error('Error fetching session data:', error)
      })
  }, [])
  return (
    <div className="App">
      <h1 style={{ color: '#000' }}>Session Test</h1>
      <button
        onClick={() => {
          testRedisConnection()
        }}
      >
        testRedisConnection
      </button>
      <button
        onClick={() => {
          saveToSession()
        }}
      >
        Save to session
      </button>
      <button
        onClick={() => {
          getFromSession()
        }}
      >
        Get From session
      </button>
      {sessionData ? (
        <div>
          <p>Session ID: {sessionData}</p>
        </div>
      ) : (
        <p style={{ color: '#000', fontSize: 40 }}>Loading session data...</p>
      )}
    </div>
  )
}
export default Test
