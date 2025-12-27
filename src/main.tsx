// 10 exam questions
// 27/12
// EXAMS SP1-1W

import { createRoot } from "react-dom/client"

const VideoHeader = (props: { videoName: string }) => {
    return <div>😀 {props.videoName}</div>
}
const VideoContent = (props: { videoContent: string }) => {
    return (
        <div>
            📼 <a href={props.videoContent}>{props.videoContent}</a>
        </div>
    )
}
const VideoDescription = (props: { videoDescription: string }) => {
    return <div>📑 {props.videoDescription}</div>
}

export const YoutubeVideo = (props: any) => {
    return (
        <div>
            <VideoHeader title={videoName} />
            <VideoContent title={videoContent} />
            <VideoDescription title={VideoDescription} />
        </div>
    )
}

export const App = () => {
    const video = {
        title: "Samurai way",
        link: "https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8",
        description: "Best free react-course",
    }
    return <YoutubeVideo video={video} />
}
createRoot(document.getElementById("root")!).render(<App />)
// Что нужно написать вместо xxx yyy zzz, чтобы увидеть ожидаемый результат?
// Ответ дайте через пробел, пример: a={12} b={video.id} c={'hello'}


// old code
// import { createRoot } from "react-dom/client"

// #1
// type UserProps = {
//   name: string
//   description: string
// }
// const User = (props: UserProps) => {
//   return <div>
//     <p>Имя: {props.name}</p>
//     {/* //  <p>Описание: {'❗X'}</p>  */}
//     <p>Описание: {props.description}</p>
//   </div>
// }
// createRoot(document.getElementById("root")!).render(<User name={'John'} description={'lorem ipsum'} />)


// #2
// type UserWallet = {
//   title: string
//   amount: number
// }
// type UserWalletProps = {
//   wallet: UserWallet
// }
// export const UserWallet = ({ wallet }: UserWalletProps) => {
//   return (
//     <p>
//       title: {wallet.title}, amount: {wallet.amount}
//     </p>
//   )
// }
// export const UserMoney = () => {
//   const wallets = [
//     { title: "bitcoin", amount: 1 },
//     { title: "$", amount: 100 },
//   ]
//   return (
//     <div>
//       <UserWallet wallet={wallets[0]} />
//       <UserWallet wallet={wallets[1]} />
//     </div>
//   )
// }
// createRoot(document.getElementById("root")!).render(<UserMoney />)

// What should be written instead of xxx and yyy so that the UserMoney component displays information about two wallets (bitcoin and $)?
// Answer with a space, for example: props.x wallets

// #3
// const VideoHeader = (props: { videoName: string }) => {
//   return <div>😀 {props.videoName}</div>
// }

// const VideoContent = (props: { videoContent: string }) => {
//   return (
//     <div>
//       📼 <a href={props.videoContent}>{props.videoContent}</a>
//     </div>
//   )
// }

// const VideoDescription = (props: { videoDescription: string }) => {
//   return <div>📑 {props.videoDescription}</div>
// }

// export const YoutubeVideo = (props: any) => {
//   return (
//     <div>
//       <VideoHeader videoName={props.videoName} />
//       <VideoContent videoContent={props.videoContent} />
//       <VideoDescription videoDescription={props.videoDescription} />
//     </div>
//   )
// }

// export const App = () => {
//   const video = {
//     title: "Samurai way",
//     link: "https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8",
//     description: "Best free react-course",
//   }
//   return <YoutubeVideo video={video} />
// }

// createRoot(document.getElementById("root")!).render(<App />)

// What should be written instead of xxx yyy zzz to see the expected result?
// Answer with a space, for example: a={12} b={video.id} c={‘hello’}

// #4
// skipped question 4 here

//#5
// type News = {
//   title: string
//   author: string
// }
// type Article = {
//   title: string
//   date: string
//   text: string
// }
// type PageProps = {
//   news: News[]
//   mainArticle: Article
// }

// const Page = (props: PageProps) => {
//   return (
//     <div>

//       <article>
//         <h1>Название: {props.[1].title}</h1>
//         <div>{props.[0].date}</div>
//         <div>{props.[0].text}</div>
//       </article>

//       <aside>
//         <h2>Articles:</h2>
//         <ul>
//           {props.news.map((n) => (
//             <li>
//               {n.title}, {n.author}
//             </li>
//           ))}
//         </ul>
//       </aside>

//     </div>
//   )
// }

// createRoot(document.getElementById("root")!).render(
//   <Page
//     news={[
//       { author: "Ivanov", title: "news title 1" },
//       { author: "Petrov", title: "news title 2" },
//     ]}
//     mainArticle={{ title: "article title 1", text: "text 1", date: "21.01.2001" }}
//   />,
// )
// What should be written instead of XXX and YYY to display the data?
// Answer with a space, for example: component props


//#6
// App.tsx
// export const YoutubeVideo = () => {
//   return (
//     <div>
//       <VideoHeader />
//       <VideoContent />
//       <VideoStatistics />
//     </div>
//   )
// }

// // Folder components
// const VideoHeader = () => {
//   return <div>😀 Заголовок видео</div>
// }

// const VideoContent = () => {
//   return <div>📼 Контент видео</div>
// }

// const VideoStatistics = () => {
//   return <div>📊 Статистика лайков</div>
// }

// // createRoot(document.getElementById("root")!).render(<div>!!x</div>)

// createRoot(document.getElementById("root")!).render(<YoutubeVideo />)
// Что нужно написать вместо ❗X, чтобы на экране увидеть:
// 😀 Video title
// 📼 Video content
// 📊 Like statistics
// ❗ Respond with the minimum amount of code possible

// #7
// const CrazyButton = (props: any) => {
//   const style = {

//     // color: props.xxx,
//     color: props.fontColor,
//     // backgroundColor: props.yyy,
//     backgroundColor: props.bgColor,
//   }

//   // return <button style={style}>{props.zzz}</button>
//   return <button style={style}>{props.title}</button>
// }

// export const App = () => {
//   return (
//     <div>
//       <CrazyButton title={"delete"} fontColor={"white"} bgColor={"red"} />
//       <CrazyButton title={"add"} fontColor={"white"} bgColor={"green"} />
//     </div>
//   )
// }

// createRoot(document.getElementById("root")!).render(<App />)

// What should be written instead of XXX YYY ZZZ? Answer with a space.

//#8
// const Son = (props: any) => {
//   return <div>I am son. My name is {props.name}</div>
// }

// const Father = (props: any) => {
//   return (
//     <div>
//       I am father. My name is {props.name}
//       <Son name={props.sonName} />
//     </div>
//   )
// }

// const Granny = (props: any) => {
//   return (
//     <div>
//       I am granny. My name is {props.name}
//       <Father name={props.fatherName} sonName={props.sonName} />
//     </div>
//   )
// }

// export const App = () => {
//   return (
//     <div>
//       <Granny xxx={"Бабуля"} yyy={"Батя"} zzz={"Сын"} />
//       <Granny name={"Бабуля"} fatherName={"Батя"} sonName={"Сын"} />
//     </div>
//   )
// }

// createRoot(document.getElementById("root")!).render(<App />)

// What should be written instead of XXX YYY ZZZ? Answer with a space.

//#9
// import React from "react";

// type PagePropsType = {
//   age: number
//   name: string
//   avatarUrl: string
// }

// type UserPropsType = {
//   a: number
//   n: string
// }

// const Page: React.FC<PagePropsType> = (props) => {
//   return <User a={props.age} n={props.name} />
// }

// export const User: React.FC<UserPropsType> = (props) => {
//   return <div>name: {props.n}, age: {props.a}</div>
// }

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//   <Page age={40} name="Brendan" avatarUrl={"test"} />
// );

// What should be written instead of xxx and yyy?
// Answer with a space, for example: blabla onClick(props)

//#10
// type Props = {
//   city: string // 'Minsk'
//   country: string // 'Belarus'
//   coords?: string // '53.917501,27.604851'
// }

// App.tsx
// const App = () => {
//   // return <Component city="Minsk" />
//   return <Component city="Minsk" country="Belarus" coords='53.917501,27.604851' />
// }

// // Component.tsx (folder)
// const Component = ({ city, country, coords }: Props) => {
//   return (
//     <div>
//       <p>{city}</p>
//       <p>{country}</p>
//       <p>{coords}</p>
//     </div>
//   )
// }
// createRoot(document.getElementById("root")!).render(<App />)
// What is the MINIMUM REQUIRED to add to line 10 (the line with the error) to eliminate the error?

