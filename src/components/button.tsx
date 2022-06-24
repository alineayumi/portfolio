interface ButtonProps {
  onClick: () => void
  value: string
  isDark?: boolean
  isHighlight?: boolean
}

const buttonDarkStyle =
  'inline-block text-white border border-white hover:bg-white hover:text-green font-medium rounded-3xl text-sm px-5 py-2.5 w-min my-10 mr-10'
const buttonLightStyle =
  'inline-block text-green border border-green hover:bg-green hover:text-white font-medium rounded-3xl text-sm px-5 py-2.5 w-min my-10 mr-10'
const buttonDarkHighlightStyle =
  'inline-block border border-white bg-white text-green font-medium rounded-3xl text-sm px-5 py-2.5 w-min my-10 mr-10'
const buttonLightHighLightStyle =
  'inline-block border border-green bg-green text-white font-medium rounded-3xl text-sm px-5 py-2.5 w-min my-10 mr-10'

export default function Button({
  value,
  onClick,
  isDark = true,
  isHighlight = false
}: ButtonProps) {
  return (
    <button
      type="button"
      className={
        isDark
          ? isHighlight
            ? buttonDarkHighlightStyle
            : buttonDarkStyle
          : isHighlight
          ? buttonLightHighLightStyle
          : buttonLightStyle
      }
      onClick={onClick}
    >
      <p className="whitespace-nowrap">{value}</p>
    </button>
  )
}
