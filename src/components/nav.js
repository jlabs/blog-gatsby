import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

export default function Nav() {
return (
    <nav>
        <Link to={`/`}>
            <h3 css={css`
                margin-bottom: ${rhythm(2)};
                display: inline-block;
                font-style: normal;
            `}>
          {data.site.siteMetadata.title}
        </h3>
        </Link>
        <Link to={`/til/`} css={css`
            float: right;
            `}>
            TIL
        </Link>
        <Link to={`/about/`} css={css`
            float: right;
        `}>
        Hey! You!
        </Link>
    </nav>
  )
}