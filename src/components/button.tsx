interface ButtonProps {
    onClick: () => void;
    value: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      type="button"
      className="inline-block text-white border border-white hover:bg-white hover:text-green font-medium rounded-3xl text-sm px-5 py-2.5 w-min my-10 mr-10"
      onClick={props.onClick}
    >
      <p className="whitespace-nowrap">{props.value}</p>
    </button>
  )
}
