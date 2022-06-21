import SectionHeader from "../components/SectionHeader"
import { useState } from "react"
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { vars } from "../vars/vars"

import SectionArticle from "../components/SectionArticle"
import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list"
import "react-swipeable-list/dist/styles.css"
import FeatherIcon from "feather-icons-react"
import { useLocation } from "react-router-dom"

const Section = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const filterData = (articles) => {
    return articles.filter((article) => article.section === title)
  }

  // const numberOfArticles = filterData(data).length;
  const [numberOfArticles, setNumberOfArticles] = useState(
    filterData(data).length
  )
  const articleHeight = 6

  const { light } = vars
  const styles = {
    section: css`
      border-bottom: 2px solid ${light.secondaryColor_1};
    `,
    list: css`
      height: 0;
      overflow-y: hidden;
      transition: calc(0.05s * ${numberOfArticles} + 0.25s);
      ${isOpen &&
      `
				height: calc(${
          numberOfArticles * articleHeight
        }rem + (${numberOfArticles} * 1px));
			`}
    `,
    swipe: css`
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${light.primaryColor_1};
      color: ${light.text_1};
    `,
  }

  const swipeHandler = (article) => {
    const ls = localStorage.getItem("archive")
    const archive = JSON.parse(ls)

    if (location.pathname === "/archive") {
      const newArchive = archive.filter(
        (item) =>
          item.title !== article.title && item.section !== article.section
      )
      localStorage.setItem("archive", JSON.stringify(newArchive))
      setNumberOfArticles(numberOfArticles - 1)
    } else {
      let isDuplicate
      if (archive) {
        isDuplicate = archive.some(
          (item) =>
            item.title === article.title && item.section === article.section
        )
      } else {
        isDuplicate = false
      }

      if (!isDuplicate) {
        const newArchive = {
          title: article.title,
          media: article.media,
          abstract: article.abstract,
          section: article.section,
          url: article.url,
        }
        console.log(newArchive)
        let updatedArchive = []
        if (archive) {
          updatedArchive = [...archive, newArchive]
        } else {
          updatedArchive = [newArchive]
        }
        localStorage.setItem("archive", JSON.stringify(updatedArchive))
      } else {
        console.log("duplicate")
      }
    }
  }

  return (
    <section css={styles.section}>
      <SectionHeader
        title={title}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        numberOfArticles={numberOfArticles}
      />
      <SwipeableList css={styles.list}>
        {data &&
          filterData(data).map((article, index) => (
            <SwipeableListItem
              key={index}
              trailingActions={
                <TrailingActions>
                  <SwipeAction
                    onClick={() => swipeHandler(article)}
                    destructive={location.pathname === "/archive"}
                  >
                    <div css={styles.swipe}>
                      <FeatherIcon icon="inbox" />
                    </div>
                  </SwipeAction>
                </TrailingActions>
              }
            >
              <SectionArticle data={article} />
            </SwipeableListItem>
          ))}
      </SwipeableList>
    </section>
  )
}

export default Section
