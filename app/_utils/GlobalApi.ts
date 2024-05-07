import request, { gql } from "graphql-request"

const MASTER_URL = `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/${process.env.NEXT_PUBLIC_HYGRAPH_API_KEY}/master`

export const getAllCourseList = async () => {
    const query = gql`
    query Assets {
        courseLists {
          author
          id
          free
          name
          demoUrl
          description
          baner {
            url
          }
          chapter {
            ... on Chapter {
              id
              name
              video {
                url
              }
            }
          }
          totalChapters
          sourceCode
        }
      }    
    `

    const result = await request(MASTER_URL, query)
    return result
    console.log(result)
}
