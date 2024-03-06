import React from "react";
import { Header } from "./components/Header";
import './globals.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
export function App() {


  const posts = [
    {
      id: 1,
      author: {
        name: "Rafael Citario",
        role: "Desenvolvedor Web",
        avatarUrl: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=60&w=200&h=200auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      content: [
        { type: 'paragraph', content: 'Neste sentido, o início da atividade geral de formação de atitudes auxilia', },
        { type: 'paragraph', content: 'a preparação e a composição do fluxo de informações.', },
        { type: 'link', content: '#asdaosda', },
      ],
      publishedAt: new Date("03-06-2024 20:04:30"),
    },
    {
      id: 2,
      author: {
        name: "Rafael Citario",
        role: "Desenvolvedor Web",
        avatarUrl: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=60&w=200&h=200auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      content: [
        { type: 'paragraph', content: 'Ainda assim, existem dúvidas a respeito de como o desenvolvimento contínuo de', },
        { type: 'paragraph', content: 'distintas formas de atuação é uma', },
        { type: 'paragraph', content: 'das consequências das regras de conduta normativas.', },
        { type: 'link', content: '#asdaosda', },
      ],
      publishedAt: new Date("03-03-2024 14:40:30"),
    },

  ];

  return (
    <React.Fragment>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          })}
        </main>
      </div>
    </React.Fragment>
  )
}


