import { useState } from 'react'
import Head from 'next/head'
import { marked } from 'marked'
 
import { Button } from '@/components/Button'
import { Icons } from '@/components/Icons'

import styles from '@/styles/Home.module.css'

export default function Home() {
  const [markdown, setMarkdown] = useState('')
  const [html, setHtml] = useState('')

  const handleMarkdownChange = (event: any) => {
    setMarkdown(event.target.value)
    setHtml(marked.parse(event.target.value))
  }

  const handleHeading1 = () => {
    setMarkdown((prevMarkdown) => `${prevMarkdown}# `)
  }

  const handleHeading2 = () => {
    setMarkdown((prevMarkdown) => `${prevMarkdown}## `)
  }

  const handleHeading3 = () => {
    setMarkdown((prevMarkdown) => `${prevMarkdown}### `)
  }

  const handleBold = () => {
    setMarkdown((prevMarkdown) => `${prevMarkdown}**bold text** `)
  }

  const handleItalic = () => {
    setMarkdown((prevMarkdown) => `${prevMarkdown}*italic text* `)
  }

  const handleBlockquote = () => {
    setMarkdown((prevMarkdown) => `${prevMarkdown}> blockquote `)
  }

  const handleCodeBlock = () => {
    setMarkdown((prevMarkdown) => `${prevMarkdown}\`\`\`\n\n\`\`\`\n`)
  }

  const handleLink = () => {
    setMarkdown((prevMarkdown) => `${prevMarkdown}[link text](url) `);
  }

  const handleOrderedList = () => {
    setMarkdown((prevMarkdown) => `${prevMarkdown}1. item `);
  }

  const handleUnorderedList = () => {
    setMarkdown((prevMarkdown) => `${prevMarkdown}- item `);
  }

  const handleImage = () => {
    setMarkdown((prevMarkdown) => `${prevMarkdown}![image description](url) `)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>MarkLine</title>
        <meta name="description" content="Markdown online editor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <header className="p-3">
        <h1 className="text-3xl">Markline</h1>
      </header>
      <main className="flex flex-1 flex-row w-full">
        <div className="flex flex-col w-1/2">
          <div className="bg-zinc-100 grid grid-flow-col p-2">
            <Button onClick={handleBold}><Icons.bold /></Button>
            <Button onClick={handleItalic}><Icons.italic /></Button>
            <Button onClick={handleHeading1}><Icons.headingOne /></Button>
            <Button onClick={handleHeading2}><Icons.headingTwo /></Button>
            <Button onClick={handleHeading3}><Icons.headingThree /></Button>
            <Button onClick={handleBlockquote}><Icons.blockquote /></Button>
            <Button onClick={handleCodeBlock}><Icons.code /></Button>
            <Button onClick={handleLink}><Icons.link /></Button>
            <Button onClick={handleUnorderedList}><Icons.ul /></Button>
            <Button onClick={handleOrderedList}><Icons.ol /></Button>
            <Button onClick={handleImage}><Icons.img /></Button>
          </div>
          <textarea
            className="bg-slate-200 h-full outline-0 px-4 resize-none w-full"
            name="postContent"
            value={markdown}
            onChange={handleMarkdownChange}
          />
        </div>
        <div className={styles.visor} key={html} dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </div>
  )
}
