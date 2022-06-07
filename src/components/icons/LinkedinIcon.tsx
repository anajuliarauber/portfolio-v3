import * as React from "react"
import { SVGProps, memo } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30px"
    height="30px"
    fill="none"
    stroke="black"
    strokeWidth="2px"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-linkedin"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx={4} cy={4} r={2} />
  </svg>
)

const Memo = memo(SvgComponent)
export default Memo
