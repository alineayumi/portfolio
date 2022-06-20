import { blackTextStyle } from "utils/constants";
import Timeline from "./timeline";

export default function Background() {
  return <div className="flex flex-col md:grid md:grid-cols-2 bg-white p-hor sm:p-hor-sm">
      <h1 className={blackTextStyle}>BACKGROUND</h1>
      <Timeline/>
  </div>
}
