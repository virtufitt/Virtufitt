import React, { useState, useEffect } from "react";
import Image from "next/image";
import lpImg from "../../public/assets/lp_img.png";
import comingSoonImg from "../../public/assets/coming_soon.png";

export default function Home() {
  const endDate = new Date("2024-04-30T10:45:00");

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const currentDate = new Date();
    const difference = endDate - currentDate;

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    const days = String(
      Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0)
    ).padStart(2, "0");
    const hours = String(
      Math.max(
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        0
      )
    ).padStart(2, "0");
    const minutes = String(
      Math.max(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)), 0)
    ).padStart(2, "0");
    const seconds = String(
      Math.max(Math.floor((difference % (1000 * 60)) / 1000), 0)
    ).padStart(2, "0");

    return { days, hours, minutes, seconds };
  }

  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <Image
        src={lpImg}
        fill
        style={{ width: "100%", height: "100%" }}
        alt="lp image"
      />
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          //   justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            height: "280px",
            width: "50%",
            marginTop: "200px",
          }}
        >
          <Image
            src={comingSoonImg}
            fill
            style={{ width: "100%", height: "100%" }}
            alt="coming_soon image"
          />
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: "#ffffff",
                fontSize: "80px",
                fontWeight: "bold",
                fontFamily: "fantasy",
                WebkitTextStroke: "2px #404040",
                letterSpacing: "5px",
                margin: "20px 0",
              }}
            >
              {timeLeft.days}
            </h1>
            <p
              style={{
                color: "#fff",
                fontSize: "14px",
                background: "#A020F0",
                padding: "10px 0",
                width: "120px",
                textAlign: "center",
                fontFamily: "sans-serif",
              }}
            >
              DAYS
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: "#ffffff",
                fontSize: "80px",
                fontWeight: "bold",
                fontFamily: "fantasy",
                WebkitTextStroke: "2px #404040",
                letterSpacing: "5px",
                margin: "20px 0",
              }}
            >
              {timeLeft.hours}
            </h1>
            <p
              style={{
                color: "#fff",
                fontSize: "14px",
                background: "#A020F0",
                padding: "10px 0",
                width: "120px",
                textAlign: "center",
                fontFamily: "sans-serif",
              }}
            >
              HOURS
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: "#ffffff",
                fontSize: "80px",
                fontWeight: "bold",
                fontFamily: "fantasy",
                WebkitTextStroke: "2px #404040",
                letterSpacing: "5px",
                margin: "20px 0",
              }}
            >
              {timeLeft.minutes}
            </h1>
            <p
              style={{
                color: "#fff",
                fontSize: "14px",
                background: "#A020F0",
                padding: "10px 0",
                fontFamily: "sans-serif",
                width: "120px",
                textAlign: "center",
              }}
            >
              MINUTES
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: "#ffffff",
                fontSize: "80px",
                fontWeight: "bold",
                fontFamily: "fantasy",
                WebkitTextStroke: "2px #404040",
                letterSpacing: "5px",
                margin: "20px 0",
              }}
            >
              {timeLeft.seconds}
            </h1>
            <p
              style={{
                color: "#fff",
                fontSize: "14px",
                background: "#A020F0",
                padding: "10px 0",
                width: "120px",
                textAlign: "center",
                fontFamily: "sans-serif",
              }}
            >
              SECONDS
            </p>
          </div>
        </div>
        <div style={{paddingTop:"30px"}}>
          <p
            style={{
              color: "#fff",
              fontSize: "24px",
              fontFamily: "sans-serif",
            }}
          >
            Future of all occasions outfits.
          </p>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 20,
          height: "fit-content",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            color: "#ffffff",
            fontSize: "50px",
            fontWeight: "bold",
            fontFamily: "monospace",
            // letterSpacing: "5px",
          }}
        >
          Virtufitt
        </h1>
      </div>
    </div>
  );
}
