import React, { useEffect } from "react"
import NProgress from 'nprogress'

export const FallbackLoading = () => {
    useEffect(() => {
      NProgress.start()
      return () => {
        NProgress.done()
      }
    }, [])
    return <></>
}