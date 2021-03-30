import React from 'react';
import { Navbar } from '../../components/navbar';
import Head from 'next/head';
import { useRouter } from 'next/router';


export const Feed = ({ pageNumber, articles }) => {
  console.log(articles);

  const router = useRouter();

  const nextButton = (e) => {
    e.preventDefault();
    if(pageNumber > 1 || pageNumber < 5) {
      router.push(`/feed/${pageNumber + 1}`)
      .then(() => window.scrollTo(0,0)
      );
    }
  }

  const prevButton = (e) => {
    e.preventDefault();
    if(pageNumber > 1 || pageNumber > 5) {
      router.push(`/feed/${pageNumber - 1}`)
      .then(() => window.scrollTo(0,0)
      );
    }
  }

  return (
    <div className="w-full h-screen">
      {/* Head Html */}
      <Head>
        <title>Feed</title>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"></link>
      </Head>

      {/* Navbar */}
      <Navbar />

      {/* Articles */}
      {articles.map((article, key) => {
        return (
          <div className="flex flex-col justify-center items-center mb-10" key={key}>
            <div className="card-articles rounded shadow-lg bg-gray-50 p-12 max-w-xl">
              {/* Check the Images Exist And If it Does loading the image tag */}
              {!!article.urlToImage && <img src={article.urlToImage} className="rounded mb-5" />}
              <h1 className="mb-2 cursor-default font-bold">{article.title}</h1>
              <p className="mb-2 cursor-default text-sm">{article.description}</p>
              <a className="cursor-pointer border-b-2 border-gray-800" onClick={() => window.open(`${article.url}`)} target="_blank">See more..</a>
            </div>
          </div>
        );
      })}

      {/* Button Previous and Next */}
      <div className="flex justify-center items-center mt-10 mb-10">
        <div className={pageNumber === 1 ? "rounded cursor-pointer shadow-md p-2 mr-2 flex flex-col justify-center items-center hidden" : "rounded cursor-pointer shadow-md p-2 mr-2 flex flex-col justify-center items-center"} onClick={prevButton}>
          <i className="fas fa-arrow-circle-left text-2xl"></i>
            <p>Prev Page</p>
        </div>
        <p className="mr-5 ml-5 ">
          #{pageNumber}
        </p>
        <div className={pageNumber === 5 ? "rounded cursor-pointer shadow-md p-2 flex flex-col justify-center items-center hidden" : "rounded cursor-pointer shadow-md p-2 flex flex-col justify-center items-center"} onClick={nextButton}>
          <i className="fas fa-arrow-circle-right text-2xl"></i>
          <p>Next Page</p>
        </div>
      </div>

    </div>
  );
};


// Get Data With ServerSideProps
export const getServerSideProps = async pageContext => {
  const pageNumber = pageContext.query.page;

  // Condition PageNumbers
  if (!pageNumber || pageNumber < 1 || pageNumber > 5){
    return {
      props: {
        articles: [],
        pageNumber: 1,
      }
    }
  }

  // Get Data API
  const apiResponse = await fetch(
    // NewsAPI Url
    `https://newsapi.org/v2/top-headlines?country=gb&category=sports&pageSize=5&page=${pageNumber}`,
    {
      // NewsAPI Key
      headers: {
        Authorization: `Bearer ${process.env.NEXT_NEWS_KEY}`,
      },
    },
  );

  const apiJson = await apiResponse.json();
  const { articles } = apiJson;
  
  return {
    props: {
      articles,
      // parseInt string to integer
      pageNumber: Number.parseInt(pageNumber)
    }
  }

};

export default Feed;
