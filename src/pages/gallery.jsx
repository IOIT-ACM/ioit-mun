import Layouts from "@layouts/Layouts";
import { Gallery, Item } from "react-photoswipe-gallery";

import "photoswipe/dist/photoswipe.css";

const projects = [
  {
    image: "/img/gallery/1.webp",
    alt: "Mock MUN 2023 Opening Ceremony",
  },
  {
    image: "/img/gallery/2.webp",
    alt: "Delegates in committee session",
  },
  {
    image: "/img/gallery/3.webp",
    alt: "Speakers addressing the house",
  },
  {
    image: "/img/gallery/4.webp",
    alt: "Team discussion in progress",
  },
  {
    image: "/img/gallery/5.webp",
    alt: "Closing remarks of Mock MUN 2023",
  },
  {
    image: "/img/gallery/6.webp",
    alt: "Delegates networking after event",
  },
  {
    image: "/img/gallery/7.webp",
    alt: "Organizers on stage",
  },
  {
    image: "/img/gallery/8.webp",
    alt: "Panel discussion snapshot",
  },
  {
    image: "/img/gallery/9.webp",
    alt: "Delegates raising placards",
  },
  {
    image: "/img/gallery/10.webp",
    alt: "Final group photograph",
  },
  {
    image: "/img/gallery/11.webp",
    alt: "Final group photograph",
  },
  {
    image: "/img/gallery/12.webp",
    alt: "Final group photograph",
  },
  {
    image: "/img/gallery/13.webp",
    alt: "Final group photograph",
  },
  {
    image: "/img/gallery/14.webp",
    alt: "Final group photograph",
  },
  {
    image: "/img/gallery/15.webp",
    alt: "Final group photograph",
  },
  {
    image: "/img/gallery/16.webp",
    alt: "Final group photograph",
  },
  {
    image: "/img/gallery/17.webp",
    alt: "Final group photograph",
  },
  {
    image: "/img/gallery/18.webp",
    alt: "Final group photograph",
  },
  {
    image: "/img/gallery/19.webp",
    alt: "Final group photograph",
  },
  {
    image: "/img/gallery/20.webp",
    alt: "Final group photograph",
  }
];

const Portfolio = () => {
  const rows = [];
  const projectsGrid = [];

  for (let i = 0; i < projects.length; i += 5) {
    rows.push(projects.slice(i, 5 + i));
  }

  rows.forEach((row) => {
    let row_rows = [];
    row_rows.push(row.slice(0, 1));
    row_rows.push(row.slice(1, 5));
    projectsGrid.push(row_rows);
  });

  return (
    <Layouts>
      <div className="mil-spacer-100 mil-spacer-dark" />

      <div className="mil-portfolio-fw mil-appearance">
        <Gallery>
          {projectsGrid.map((row, row_i) => (
            <div
              className={
                row_i % 2 === 0 ? "row m-0" : "row m-0 flex-row-reverse"
              }
              key={`portfolio-row-${row_i}`}
            >
              {row.map((col, col_i) => (
                <div
                  className="col-lg-6 p-0"
                  key={`portfolio-row-${row_i}-col-${col_i}`}
                >
                  <div className="row m-0">
                    {col.map((item, key) => (
                      <div
                        className={
                          col_i === 0 ? "col-lg-12 p-0" : "col-lg-6 p-0"
                        }
                        key={`portfolio-row-${row_i}-col-${col_i}-item-${key}`}
                      >
                        <div className="mil-portfolio-item">
                          <div className="mil-cover mil-square mil-scale-down-trigger mil-accent-trigger">
                            <div className="mil-image-frame">
                              <img src={item.image} alt={item.alt} />
                            </div>
                          </div>

                          <Item
                            original={item.image}
                            thumbnail={item.image}
                            width={item.imageWidth}
                            height={item.imageHeight}
                          >
                            {({ ref, open }) => (
                              <a
                                ref={ref}
                                onClick={open}
                                className="mil-zoom-icon mil-hidden-trigger"
                                style={{ cursor: "pointer" }}
                              >
                                <img src="/img/icons/zoom.svg" alt="zoom" />
                              </a>
                            )}
                          </Item>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Gallery>
      </div>
    </Layouts>
  );
};

export default Portfolio;
