import React from 'react'
import { useState } from 'react'

const App = () => {
  const [longUrl, setLongUrl] = React.useState("");
  const [shortUrl, setShortUrl] = React.useState("")

  const handleShorten = async () => {
    const response = await fetch("/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ longUrl })
    })

    const data = await response.json();
    setShortUrl(data.link.shortUrl)
  }

  // Custom Shortening - Coming Soon
  // const handleCustomShorten = async () => {
  //   await fetch("/customshorten", {
  //     method: "POST",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify({longUrl})
  //   })
  // }

  return (
    <>
      <input type="url" name="longUrl" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} placeholder="Input your long URL" />
      <button onClick={handleShorten}>Shorten</button>
      <p>{shortUrl}</p>
    </>
  )
}

export default App