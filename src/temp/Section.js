import SectionHeader from "../components/SectionHeader"

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
// import { toast } from "react-toastify"
import FeatherIcon from "feather-icons-react"

import { useContext, useState } from "react"
import { useLocation } from "react-router-dom"
import ThemeContext from "../context/ThemeContext"

import Article from "../components/Article"
import "react-swipeable-list/dist/styles.css"
import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list"
import PopUp from "../components/PopUp"

const Section = ({ title, data }) => {
  const colors = useContext(ThemeContext)

  const [popUp, setPopUp] = useState("")
  const [popUpOpen, setPopUpOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const filterData = (articles) => {
    return articles.filter((article) => article.section === title)
  }

  const [numberOfArticles, setNumberOfArticles] = useState(
    filterData(data).length
  )
  const articleHeight = 6

  const styles = {
    section: css`
      border-bottom: 2px solid ${colors.secondaryColor_2};
    `,
    list: css`
      height: 0;
      overflow-y: hidden;
      transition: calc(0.05s * ${numberOfArticles} + 0.25s);
      ${open &&
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
      background: ${colors.primaryColor_1};
      color: ${colors.text_1};
    `,
    delete: css`
      background: ${colors.primaryColor_2};
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${colors.text_1};
      width: 6rem;
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

        let updatedArchive = []
        if (archive) {
          updatedArchive = [...archive, newArchive]
        } else {
          updatedArchive = [newArchive]
        }
        localStorage.setItem("archive", JSON.stringify(updatedArchive))
        setPopUpOpen(true)
        setPopUp("The Article is Saved in Archive.")
        setTimeout(() => {
          setPopUpOpen(false)
        }, 5000)
      } else {
        setPopUpOpen(true)
        setPopUp(`The Article is already Saved in Archive`)
        setTimeout(() => {
          setPopUpOpen(false)
        }, 5000)
      }
    }
  }

  return (
    <section css={styles.section}>
      <SectionHeader
        title={title}
        open={open}
        setOpen={setOpen}
        numberOfArticles={numberOfArticles}
      />
      <SwipeableList css={styles.list}>
        {data &&
          filterData(data).map((article, index) => (
            <SwipeableListItem
              key={index}
              trailingActions={
                <TrailingActions>
                  <SwipeAction onClick={() => swipeHandler(article)}>
                    {location.pathname === "/home" ? (
                      <div css={styles.swipe}>
                        <FeatherIcon icon="inbox" />
                      </div>
                    ) : (
                      <div css={styles.delete}>
                        <FeatherIcon icon="trash" />
                      </div>
                    )}
                  </SwipeAction>
                </TrailingActions>
              }
            >
              <Article data={article} />
            </SwipeableListItem>
          ))}
      </SwipeableList>
      <PopUp popUp={popUp} popUpOpen={popUpOpen} />
    </section>
  )
}

export default Section
