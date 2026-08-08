import { useEffect, useState } from 'react';
import day1Data from "@data/sections/day1.json";
import day2Data from "@data/sections/day2.json";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import Image from "next/image";

const dateBoxStyle = {
  padding: "5px 5%",
  backgroundColor: "rgba(212, 164, 58, 0.8)",
  color: "#050B14",
  display: "flex",
  justifyContent: "space-between",
  borderRadius: "30px",
  boxShadow: "0 0 40px rgba(212, 164, 58, 0.4), 0 8px 30px rgba(0, 0, 0, 0.35)",
};

const Schedule = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div style={{ backgroundColor: "rgba(5, 11, 20, 1)", padding: "0px 8%" }}>
      <div className="mil-mb-0"></div>

      <div className="row">
        <h3 className="mil-mb-30 mil-appearance" style={{ color: "#F5F1E8", marginTop: "40px" }}>Itinerary</h3>
      </div>

      <div className="row">
        <div className="col-md-12 col-lg-6">
          <h1 className='mil-h4' style={dateBoxStyle}>
            <span>24th October 2026</span>
            <Link href="#"><FontAwesomeIcon icon={faCalendarAlt} /></Link>
          </h1>

          <table className="mil-mb-30">
            {day1Data.map((item, index) => (
              <tr key={index}>
                <td style={{ width: "20%", padding: "10px 10px" }}>
                  {isMounted && <Image src={item.logo} alt="logo" width={50} height={50} style={{ filter: "hue-rotate(210deg) saturate(50%) brightness(90%) opacity(0.7)" }} />}
                </td>
                <td className='a-80' style={{ padding: "10px 0px" }}>{item.timings}</td>
                <td className='a-80' style={{ padding: "10px 10px", color: "#F5F1E8" }}>{item.events}</td>
              </tr>
            ))}
          </table>
        </div>

        <div className="col-md-12 col-lg-6">
          <h1 className='mil-h4' style={dateBoxStyle}>
            <span>25th October 2026</span>
            <Link href="cesaioit.com"><FontAwesomeIcon icon={faCalendarAlt} /></Link>
          </h1>

          <table className='mil-mb-30'>
            {day2Data.map((item, index) => (
              <tr key={index}>
                <td style={{ width: "20%", padding: "10px 10px"  }}>
                  {isMounted && <Image src={item.logo} alt="logo" width={50} height={50} style={{ filter: "hue-rotate(210deg) saturate(50%) brightness(90%) opacity(0.7)" }} />}
                </td>
                <td className='a-80' style={{ padding: "10px 0px"}}>{item.timings}</td>
                <td className='a-80' style={{ padding: "10px 10px", color: "#F5F1E8"}}>{item.events}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
