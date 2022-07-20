import Button from 'components/button'
import { ethers } from 'ethers'

export default function Waves() {
  return (
    <div className="p-hor sm:p-hor flex h-full w-full flex-col content-center items-center self-center">
      <div>
        <h1 className="text-center text-xl font-bold text-white">
          👋 Hey there!
        </h1>
        <Button isExpanded={true} onClick={() => null} value="Wave at me" />
      </div>
    </div>
  )
}
