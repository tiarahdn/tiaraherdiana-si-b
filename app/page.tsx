import { ExecFileSyncOptionsWithBufferEncoding } from "child_process";
import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import "./tiara-style.css";
import FavColor from "./components/favColor";
export default function MyApp () {
  return (
  <section>
    <Hero />
    <RiwayatPendidikan />
    <RiwayatPekerjaan />
    {/* <FavColor /> */}
  </section>
  );
}