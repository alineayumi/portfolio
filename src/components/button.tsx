interface ButtonProps {
  onClick: () => void
  value: string
  isDark?: boolean
  isHighlight?: boolean
}

const buttonDarkStyle =
  'inline-block text-primaryDark border border-primaryDark hover:bg-primaryDark hover:text-surfaceDark font-medium rounded-3xl text-sm px-5 py-2.5 w-min my-10 mr-10'
const buttonLightStyle =
  'inline-block text-primary border border-primary hover:bg-primary hover:text-surface font-medium rounded-3xl text-sm px-5 py-2.5 w-min my-10 mr-10'
const buttonDarkHighlightStyle =
  'inline-block border border-primaryDark bg-primaryDark text-surfaceDark font-medium rounded-3xl text-sm px-5 py-2.5 w-min my-10 mr-10'
const buttonLightHighLightStyle =
  'inline-block border border-primary bg-primary text-surface font-medium rounded-3xl text-sm px-5 py-2.5 w-min my-10 mr-10'

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
