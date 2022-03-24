import { AchsData } from "./data/100";
import ItemCard2 from "./itemcard2";
import Link from "next/dist/client/link";
import { DwData } from "./data/101";
import { KmcData } from "./data/102";
import { KccsData } from "./data/103";
import { DavData } from "./data/104";
import { KbcData } from "./data/105";
import { KdbcData } from "./data/108";
import { KvcData } from "./data/110";
import { HwicData } from "./data/114";
import { AicData } from "./data/115";
import { SannData } from "./data/111";
import { KccData } from "./data/112";
import { UcData } from "./data/116";
import { CcData } from "./data/117";
import { AbcData } from "./data/118";
import { ApicData } from "./data/119";
import { QicData } from "./data/120";
import { SaimData } from "./data/109";
import { LacmData } from "./data/106";
import { NcmData } from "./data/107";

function Allcol() {
  return (
    <div className="bg-rose-700 p-7 grid grid-cols-5 h-auto space-y-4 w-full">
      <Link href="./collegeinfo/1">
        <a>
          {AchsData.map((data, key) => {
            return (
              <div key={key}>
                <ItemCard2
                  key={key}
                  college={data.Name}
                  image={data.logo}
                  university={data.University}
                  starval={data.starval}
                />
              </div>
            );
          })}
        </a>
      </Link>
      <Link href="./collegeinfo/2">
        <a>
          {DwData.map((data, key) => {
            return (
              <div key={key}>
                <ItemCard2
                  key={key}
                  college={data.Name}
                  image={data.logo}
                  university={data.University}
                  starval={data.starval}
                />
              </div>
            );
          })}
        </a>
      </Link>
      <Link href="./collegeinfo/3">
        <a>
          {KmcData.map((data, key) => {
            return (
              <div key={key}>
                <ItemCard2
                  key={key}
                  college={data.Name}
                  image={data.logo}
                  university={data.University}
                  starval={data.starval}
                />
              </div>
            );
          })}
        </a>
      </Link>
      <Link href="./collegeinfo/4">
        <a>
          {KccsData.map((data, key) => {
            return (
              <div key={key}>
                <ItemCard2
                  key={key}
                  college={data.Name}
                  image={data.logo}
                  university={data.University}
                  starval={data.starval}
                />
              </div>
            );
          })}
        </a>
      </Link>
      <Link href="./collegeinfo/5">
        <a>
          {DavData.map((data, key) => {
            return (
              <div key={key}>
                <ItemCard2
                  key={key}
                  college={data.Name}
                  image={data.logo}
                  university={data.University}
                  starval={data.starval}
                />
              </div>
            );
          })}
        </a>
      </Link>
      <Link href="./collegeinfo/6">
        <a>
          {KbcData.map((data, key) => {
            return (
              <div key={key}>
                <ItemCard2
                  key={key}
                  college={data.Name}
                  image={data.logo}
                  university={data.University}
                  starval={data.starval}
                />
              </div>
            );
          })}
        </a>
      </Link>
      <Link href="./collegeinfo/7">
        <a>
          {LacmData.map((data, key) => {
            return (
              <div key={key}>
                <ItemCard2
                  key={key}
                  college={data.Name}
                  image={data.logo}
                  university={data.University}
                  starval={data.starval}
                />
              </div>
            );
          })}
        </a>
      </Link>
      <Link href="./collegeinfo/8">
        <a>
          {NcmData.map((data, key) => {
            return (
              <div key={key}>
                <ItemCard2
                  key={key}
                  college={data.Name}
                  image={data.logo}
                  university={data.University}
                  starval={data.starval}
                />
              </div>
            );
          })}
        </a>
      </Link>
      <Link href="./collegeinfo/9">
        <a>
          {KdbcData.map((data, key) => {
            return (
              <div key={key}>
                <ItemCard2
                  key={key}
                  college={data.Name}
                  image={data.logo}
                  university={data.University}
                  starval={data.starval}
                />
              </div>
            );
          })}
        </a>
      </Link>
      <Link href="./collegeinfo/10">
        <a>
          {KvcData.map((data, key) => {
            return (
              <div key={key}>
                <ItemCard2
                  key={key}
                  college={data.Name}
                  image={data.logo}
                  university={data.University}
                  starval={data.starval}
                />
              </div>
            );
          })}
        </a>
      </Link>
      <Link href="./collegeinfo/11">
        <a>
          {SannData.map((data, key) => {
            return (
              <div key={key}>
                <ItemCard2
                  key={key}
                  college={data.Name}
                  image={data.logo}
                  university={data.University}
                  starval={data.starval}
                />
              </div>
            );
          })}
        </a>
      </Link>
      <Link href="./collegeinfo/12">
        <a>
          {KccData.map((data, key) => {
            return (
              <div key={key}>
                <ItemCard2
                  key={key}
                  college={data.Name}
                  image={data.logo}
                  university={data.University}
                  starval={data.starval}
                />
              </div>
            );
          })}
        </a>
      </Link>
      <Link href="./collegeinfo/13">
        <a>
          {HwicData.map((data, key) => {
            return (
              <div key={key}>
                <ItemCard2
                  key={key}
                  college={data.Name}
                  image={data.logo}
                  university={data.University}
                  starval={data.starval}
                />
              </div>
            );
          })}
        </a>
      </Link>
      <Link href="./collegeinfo/14">
        <a>
          {AicData.map((data, key) => {
            return (
              <div key={key}>
                <ItemCard2
                  key={key}
                  college={data.Name}
                  image={data.logo}
                  university={data.University}
                  starval={data.starval}
                />
              </div>
            );
          })}
        </a>
      </Link>
      <Link href="./collegeinfo/15">
        <a>
          {UcData.map((data, key) => {
            return (
              <div key={key}>
                <ItemCard2
                  key={key}
                  college={data.Name}
                  image={data.logo}
                  university={data.University}
                  starval={data.starval}
                />
              </div>
            );
          })}
        </a>
      </Link>
      <Link href="./collegeinfo/16">
        <a>
          {CcData.map((data, key) => {
            return (
              <div key={key}>
                <ItemCard2
                  key={key}
                  college={data.Name}
                  image={data.logo}
                  university={data.University}
                  starval={data.starval}
                />
              </div>
            );
          })}
        </a>
      </Link>
      <Link href="./collegeinfo/17">
        <a>
          {AbcData.map((data, key) => {
            return (
              <div key={key}>
                <ItemCard2
                  key={key}
                  college={data.Name}
                  image={data.logo}
                  university={data.University}
                  starval={data.starval}
                />
              </div>
            );
          })}
        </a>
      </Link>
      <Link href="./collegeinfo/18">
        <a>
          {ApicData.map((data, key) => {
            return (
              <div key={key}>
                <ItemCard2
                  key={key}
                  college={data.Name}
                  image={data.logo}
                  university={data.University}
                  starval={data.starval}
                />
              </div>
            );
          })}
        </a>
      </Link>
      <Link href="./collegeinfo/19">
        <a>
          {QicData.map((data, key) => {
            return (
              <div key={key}>
                <ItemCard2
                  key={key}
                  college={data.Name}
                  image={data.logo}
                  university={data.University}
                  starval={data.starval}
                />
              </div>
            );
          })}
        </a>
      </Link>
      <Link href="./collegeinfo/20">
        <a>
          {SaimData.map((data, key) => {
            return (
              <div key={key}>
                <ItemCard2
                  key={key}
                  college={data.Name}
                  image={data.logo}
                  university={data.University}
                  starval={data.starval}
                />
              </div>
            );
          })}
        </a>
      </Link>
    </div>
  );
}
export default Allcol;
