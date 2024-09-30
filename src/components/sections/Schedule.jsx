import { useEffect, useState } from 'react';
import day1Data from "@data/sections/day1.json";
import day2Data from "@data/sections/day2.json";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import Image from "next/image";

const Schedule = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div style={{ backgroundColor: "rgba(38, 50, 56, 1)", padding: "0px 8%" }}>
      <div className="mil-mb-0"></div>

      <div className="row">
        <h3 className="mil-mb-30 mil-appearance" style={{ color: "white", marginTop: "40px" }}>Itinerary</h3>
      </div>

      <div className="row">
        <div className="col-md-12 col-lg-6">
          <h1 className='mil-h4' style={{
            padding: "5px 0px", backgroundColor: "rgba(38, 167, 255, 1)", color: "white",
            display: "flex", justifyContent: "space-between", borderRadius: "30px", padding: "5px 5%"
          }}>
            <span>5th October 2024</span>
            <Link href="#"><FontAwesomeIcon icon={faCalendarAlt} /></Link>
          </h1>

          <table className="mil-mb-30">
            {day1Data.map((item, index) => (
              <tr key={index}>
                <td style={{ width: "20%", padding: "10px 10px" }}>
                  {isMounted && <Image src={item.logo} alt="logo" width={50} height={50} />}
                </td>
                <td className='a-80' style={{ padding: "10px 0px" }}>{item.timings}</td>
                <td className='a-80' style={{ padding: "10px 10px", color: "white" }}>{item.events}</td>
              </tr>
            ))}
          </table>
        </div>

        <div className="col-md-12 col-lg-6">
          <h1 className='mil-h4' style={{
            padding: "5px 0px", backgroundColor: "rgba(38, 167, 255, 1)", color: "white",
            display: "flex", justifyContent: "space-between", borderRadius: "30px", padding: "5px 5%"
          }}>
            <span>6th October 2024</span>
            <Link href="cesaioit.com"><FontAwesomeIcon icon={faCalendarAlt} /></Link>
          </h1>

          <table className='mil-mb-30'>
            {day2Data.map((item, index) => (
              <tr key={index}>
                <td style={{ width: "20%", padding: "10px 10px"  }}>
                  {isMounted && <Image src={item.logo} alt="logo" width={50} height={50} />}
                </td>
                <td className='a-80' style={{ padding: "10px 0px"}}>{item.timings}</td>
                <td className='a-80' style={{ padding: "10px 10px", color: "white"}}>{item.events}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
