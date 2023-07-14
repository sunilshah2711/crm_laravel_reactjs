import React, { useRef } from "react";
import "./Video.scss";
import logowitharrow from "../../assets/images/laracast/logo-white-arrow.svg";
import andreslarabits from "../../assets/images/laracast/andres-larabits.png";
import stack from "../../assets/images/laracast/stack.jpg";
import monster from "../../assets/images/laracast/larabit-monster-icon.svg";
import download1 from "../../assets/images/laracast/download1.svg";
import download2 from "../../assets/images/laracast/download2.svg";
import download3 from "../../assets/images/laracast/download3.svg";
import teachimg from "../../assets/images/laracast/teachimg.jpeg";
import ReactPlayer from "react-player";
import laracastscta from "../../assets/images/laracast/laracasts-cta-placeholder.png";
const VIDEO_PATH = "https://youtu.be/0BIaDVnYp2A";

const Video = () => {
  const playerRef = useRef(null);

  return (
    <>
      <div className="video-episode-page">
        <div className="video-sidebar">
          <div className="sidebar-head">
            <a href="/" className="more-bit">
              <svg viewBox="0.75 0.75 32.5 32.5" width="30">
                <g fill="none" fill-rule="evenodd">
                  <path
                    stroke="#000"
                    stroke-opacity=".012"
                    stroke-width=".5"
                    d="M0 0L32 0 32 32 0 32z"
                    transform="translate(-969.000000, -1039.000000) translate(965.000000, 1038.000000) translate(5.000000, 2.000000) translate(16.000000, 16.000000) rotate(-270.000000) translate(-16.000000, -16.000000)"
                  ></path>
                  <path
                    fill="#000"
                    d="M9.88 11.342L16 17.449 22.12 11.342 24 13.222 16 21.222 8 13.222z"
                    transform="translate(-969.000000, -1039.000000) translate(965.000000, 1038.000000) translate(5.000000, 2.000000) translate(16.000000, 16.000000) rotate(-270.000000) translate(-16.000000, -16.000000)"
                  ></path>
                </g>
              </svg>
              <span>View More Larabits</span>
            </a>
            <a href="/" className="side-logo">
              <img src={logowitharrow} width="21" alt="arrow" />
            </a>
          </div>
          <div className="teacher-block">
            <div className="teacher-wrap">
              <div className="teacher-round">
                <div className="teacher-img">
                  <img src={andreslarabits} width="53" alt="teacher-img" />
                </div>
                <svg
                  className="radial-progress-bar"
                  width="68"
                  height="68"
                  version="1.1"
                >
                  <defs>
                    <radialGradient
                      id="radial-gradient59260.7299383613"
                      fx="1"
                      fy="0.5"
                      cx="0.5"
                      cy="0.5"
                      r="0.65"
                    >
                      <stop offset="30%" stop-color="#328af1"></stop>
                      <stop offset="100%" stop-color="#328af1"></stop>
                    </radialGradient>
                  </defs>
                  <circle
                    r="30"
                    cx="34"
                    cy="34"
                    fill="transparent"
                    stroke="rgba(0, 0, 0, 0.2)"
                    stroke-dasharray="188.49555921538757"
                    stroke-dashoffset="0"
                    stroke-linecap="round"
                    style={{
                      height: "68px",
                      width: "68px",
                      strokeWidth: "4px",
                    }}
                  ></circle>
                  <circle
                    transform="rotate(270, 34,34)"
                    r="30"
                    cx="34"
                    cy="34"
                    fill="transparent"
                    stroke="url(#radial-gradient59260.7299383613)"
                    stroke-dasharray="188.49555921538757"
                    stroke-dashoffset="188.49555921538757"
                    stroke-linecap="round"
                    style={{
                      height: "68px",
                      width: "68px",
                      strokeWidth: "4px",
                      strokeDashoffset: "188.496",
                      transition: "strokeDashoffset 1000ms linear 0s",
                    }}
                  ></circle>
                </svg>
              </div>
              <div className="teacher-content">
                <p className="teacher-name">Andre's Larabits</p>
                <div className="teacher-timing">
                  <div className="teacher-lesson">
                    <svg width="9" viewBox="0 0 9 12" className="mr-1">
                      <g fill-rule="evenodd">
                        <g className="fill-current">
                          <path
                            d="M2.858 5.15v4.415c0 .197-.11.371-.273.436-.231.092-.51.14-.808.14-.855 0-1.775-.396-1.775-1.266v-5.65c-.02-.389.1-1.074.676-1.445C.945 1.607 2.348.589 3.052.074c.125-.092.286-.098.417-.018.132.081.214.237.214.406v.669c0 .255-.183.462-.41.462-.175 0-.325-.125-.383-.302-.636.462-1.574 1.14-1.806 1.29-.21.136-.255.385-.264.52 0 .151.029.27.081.335.145.18.63.068 1.157-.29C2.566 2.802 5.067.92 5.092.902c.126-.095.287-.104.42-.023.133.08.216.237.216.408v.052c0 .155-.068.299-.182.385 0 0-1.736 1.31-1.89 1.42-.589.428-.798.953-.798 2.005zM9 2.92v5.998c0 .158-.072.306-.191.39 0 0-2.385 2.092-2.869 2.425-.254.175-.578.267-.936.267-.85 0-1.73-.52-1.73-1.389V4.878l.001-.006c.008-.338.078-.82.635-1.285.334-.278 2.321-1.809 2.406-1.873.125-.097.288-.107.421-.027.134.08.218.237.218.408v.67c0 .254-.183.461-.409.461-.169 0-.314-.115-.376-.28-.635.49-1.566 1.212-1.775 1.385-.263.22-.298.365-.303.551.001.138.034.243.101.313.209.216.77.125 1.324-.25.41-.278 2.176-1.819 2.822-2.389.124-.108.29-.128.431-.05.14.077.23.237.23.414zm-.818 2.059L6.137 6.77v.924l2.045-1.792v-.924z"
                            transform="translate(-890.000000, -316.000000) translate(774.000000, 311.000000) translate(116.000000, 4.000000) translate(0.000000, 1.000000)"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <p>32 Lessons</p>
                  </div>
                  <div className="teacher-time">
                    <svg width="10" viewBox="0 0 10 10" className="mr-1">
                      <g fill-rule="evenodd">
                        <path
                          className="fill-current"
                          d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                          transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                        ></path>
                      </g>
                    </svg>
                    <p className="teacher-hour">6h 58m</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="episode-block">
            <div className="episode-wrapper">
              <div className="episode-step">
                <span className="text-2xl">
                  01
                </span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" className="text-grey-600/75">
                      <g fill-rule="evenodd">
                        <path
                          className="fill-current"
                          d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                          transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                        ></path>
                      </g>
                    </svg>
                    <p>13m 18s</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="episode-wrapper">
              <div className="episode-step">
                <span className="text-2xl">
                  <svg width="30" viewBox="0 0 15 15" >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.787 4.305a2.314 2.314 0 0 0-4.622 0H4.063a3.415 3.415 0 0 1 6.827 0H9.787zM4.283 4.966A1.983 1.983 0 0 0 2.3 6.95v5.068C2.3 13.112 3.188 14 4.283 14h6.39a1.983 1.983 0 0 0 1.983-1.983V6.95a1.983 1.983 0 0 0-1.983-1.983h-6.39zm3.195 6.34a1.822 1.822 0 1 0 0-3.645 1.822 1.822 0 0 0 0 3.644z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" className="text-grey-600/75">
                      <g fill-rule="evenodd">
                        <path
                          className="fill-current"
                          d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                          transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                        ></path>
                      </g>
                    </svg>
                    <p>13m 18s</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="episode-wrapper">
              <div className="episode-step">
                <span className="text-2xl">
                    <svg width="30" viewBox="0 0 15 15" >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.787 4.305a2.314 2.314 0 0 0-4.622 0H4.063a3.415 3.415 0 0 1 6.827 0H9.787zM4.283 4.966A1.983 1.983 0 0 0 2.3 6.95v5.068C2.3 13.112 3.188 14 4.283 14h6.39a1.983 1.983 0 0 0 1.983-1.983V6.95a1.983 1.983 0 0 0-1.983-1.983h-6.39zm3.195 6.34a1.822 1.822 0 1 0 0-3.645 1.822 1.822 0 0 0 0 3.644z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" className="text-grey-600/75">
                      <g fill-rule="evenodd">
                        <path
                          className="fill-current"
                          d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                          transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                        ></path>
                      </g>
                    </svg>
                    <p>13m 18s</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="episode-wrapper">
              <div className="episode-step">
                <span className="text-2xl">
                    <svg width="30" viewBox="0 0 15 15" >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.787 4.305a2.314 2.314 0 0 0-4.622 0H4.063a3.415 3.415 0 0 1 6.827 0H9.787zM4.283 4.966A1.983 1.983 0 0 0 2.3 6.95v5.068C2.3 13.112 3.188 14 4.283 14h6.39a1.983 1.983 0 0 0 1.983-1.983V6.95a1.983 1.983 0 0 0-1.983-1.983h-6.39zm3.195 6.34a1.822 1.822 0 1 0 0-3.645 1.822 1.822 0 0 0 0 3.644z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" className="text-grey-600/75">
                      <g fill-rule="evenodd">
                        <path
                          className="fill-current"
                          d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                          transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                        ></path>
                      </g>
                    </svg>
                    <p>13m 18s</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="episode-wrapper">
              <div className="episode-step">
                <span className="text-2xl">
                    <svg width="30" viewBox="0 0 15 15" >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.787 4.305a2.314 2.314 0 0 0-4.622 0H4.063a3.415 3.415 0 0 1 6.827 0H9.787zM4.283 4.966A1.983 1.983 0 0 0 2.3 6.95v5.068C2.3 13.112 3.188 14 4.283 14h6.39a1.983 1.983 0 0 0 1.983-1.983V6.95a1.983 1.983 0 0 0-1.983-1.983h-6.39zm3.195 6.34a1.822 1.822 0 1 0 0-3.645 1.822 1.822 0 0 0 0 3.644z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" className="text-grey-600/75">
                      <g fill-rule="evenodd">
                        <path
                          className="fill-current"
                          d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                          transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                        ></path>
                      </g>
                    </svg>
                    <p>13m 18s</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="episode-wrapper">
              <div className="episode-step">
                <span className="text-2xl">
                    <svg width="30" viewBox="0 0 15 15" >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.787 4.305a2.314 2.314 0 0 0-4.622 0H4.063a3.415 3.415 0 0 1 6.827 0H9.787zM4.283 4.966A1.983 1.983 0 0 0 2.3 6.95v5.068C2.3 13.112 3.188 14 4.283 14h6.39a1.983 1.983 0 0 0 1.983-1.983V6.95a1.983 1.983 0 0 0-1.983-1.983h-6.39zm3.195 6.34a1.822 1.822 0 1 0 0-3.645 1.822 1.822 0 0 0 0 3.644z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" className="text-grey-600/75">
                      <g fill-rule="evenodd">
                        <path
                          className="fill-current"
                          d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                          transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                        ></path>
                      </g>
                    </svg>
                    <p>13m 18s</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="episode-wrapper">
              <div className="episode-step">
                <span className="text-2xl">
                    <svg width="30" viewBox="0 0 15 15" >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.787 4.305a2.314 2.314 0 0 0-4.622 0H4.063a3.415 3.415 0 0 1 6.827 0H9.787zM4.283 4.966A1.983 1.983 0 0 0 2.3 6.95v5.068C2.3 13.112 3.188 14 4.283 14h6.39a1.983 1.983 0 0 0 1.983-1.983V6.95a1.983 1.983 0 0 0-1.983-1.983h-6.39zm3.195 6.34a1.822 1.822 0 1 0 0-3.645 1.822 1.822 0 0 0 0 3.644z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" className="text-grey-600/75">
                      <g fill-rule="evenodd">
                        <path
                          className="fill-current"
                          d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                          transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                        ></path>
                      </g>
                    </svg>
                    <p>13m 18s</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="episode-wrapper">
              <div className="episode-step">
                <span className="text-2xl">
                    <svg width="30" viewBox="0 0 15 15" >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.787 4.305a2.314 2.314 0 0 0-4.622 0H4.063a3.415 3.415 0 0 1 6.827 0H9.787zM4.283 4.966A1.983 1.983 0 0 0 2.3 6.95v5.068C2.3 13.112 3.188 14 4.283 14h6.39a1.983 1.983 0 0 0 1.983-1.983V6.95a1.983 1.983 0 0 0-1.983-1.983h-6.39zm3.195 6.34a1.822 1.822 0 1 0 0-3.645 1.822 1.822 0 0 0 0 3.644z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" className="text-grey-600/75">
                      <g fill-rule="evenodd">
                        <path
                          className="fill-current"
                          d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                          transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                        ></path>
                      </g>
                    </svg>
                    <p>13m 18s</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="episode-wrapper">
              <div className="episode-step">
                <span className="text-2xl">
                    <svg width="30" viewBox="0 0 15 15" >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.787 4.305a2.314 2.314 0 0 0-4.622 0H4.063a3.415 3.415 0 0 1 6.827 0H9.787zM4.283 4.966A1.983 1.983 0 0 0 2.3 6.95v5.068C2.3 13.112 3.188 14 4.283 14h6.39a1.983 1.983 0 0 0 1.983-1.983V6.95a1.983 1.983 0 0 0-1.983-1.983h-6.39zm3.195 6.34a1.822 1.822 0 1 0 0-3.645 1.822 1.822 0 0 0 0 3.644z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" className="text-grey-600/75">
                      <g fill-rule="evenodd">
                        <path
                          className="fill-current"
                          d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                          transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                        ></path>
                      </g>
                    </svg>
                    <p>13m 18s</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="episode-wrapper">
              <div className="episode-step">
                <span className="text-2xl">
                    <svg width="30" viewBox="0 0 15 15" >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.787 4.305a2.314 2.314 0 0 0-4.622 0H4.063a3.415 3.415 0 0 1 6.827 0H9.787zM4.283 4.966A1.983 1.983 0 0 0 2.3 6.95v5.068C2.3 13.112 3.188 14 4.283 14h6.39a1.983 1.983 0 0 0 1.983-1.983V6.95a1.983 1.983 0 0 0-1.983-1.983h-6.39zm3.195 6.34a1.822 1.822 0 1 0 0-3.645 1.822 1.822 0 0 0 0 3.644z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" className="text-grey-600/75">
                      <g fill-rule="evenodd">
                        <path
                          className="fill-current"
                          d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                          transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                        ></path>
                      </g>
                    </svg>
                    <p>13m 18s</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="episode-wrapper">
              <div className="episode-step">
                <span className="text-2xl">
                    <svg width="30" viewBox="0 0 15 15" >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.787 4.305a2.314 2.314 0 0 0-4.622 0H4.063a3.415 3.415 0 0 1 6.827 0H9.787zM4.283 4.966A1.983 1.983 0 0 0 2.3 6.95v5.068C2.3 13.112 3.188 14 4.283 14h6.39a1.983 1.983 0 0 0 1.983-1.983V6.95a1.983 1.983 0 0 0-1.983-1.983h-6.39zm3.195 6.34a1.822 1.822 0 1 0 0-3.645 1.822 1.822 0 0 0 0 3.644z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" className="text-grey-600/75">
                      <g fill-rule="evenodd">
                        <path
                          className="fill-current"
                          d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                          transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                        ></path>
                      </g>
                    </svg>
                    <p>13m 18s</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="episode-wrapper">
              <div className="episode-step">
                <span className="text-2xl">
                    <svg width="30" viewBox="0 0 15 15" >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.787 4.305a2.314 2.314 0 0 0-4.622 0H4.063a3.415 3.415 0 0 1 6.827 0H9.787zM4.283 4.966A1.983 1.983 0 0 0 2.3 6.95v5.068C2.3 13.112 3.188 14 4.283 14h6.39a1.983 1.983 0 0 0 1.983-1.983V6.95a1.983 1.983 0 0 0-1.983-1.983h-6.39zm3.195 6.34a1.822 1.822 0 1 0 0-3.645 1.822 1.822 0 0 0 0 3.644z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" className="text-grey-600/75">
                      <g fill-rule="evenodd">
                        <path
                          className="fill-current"
                          d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                          transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                        ></path>
                      </g>
                    </svg>
                    <p>13m 18s</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="episode-wrapper">
              <div className="episode-step">
                <span className="text-2xl">
                    <svg width="30" viewBox="0 0 15 15" >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.787 4.305a2.314 2.314 0 0 0-4.622 0H4.063a3.415 3.415 0 0 1 6.827 0H9.787zM4.283 4.966A1.983 1.983 0 0 0 2.3 6.95v5.068C2.3 13.112 3.188 14 4.283 14h6.39a1.983 1.983 0 0 0 1.983-1.983V6.95a1.983 1.983 0 0 0-1.983-1.983h-6.39zm3.195 6.34a1.822 1.822 0 1 0 0-3.645 1.822 1.822 0 0 0 0 3.644z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" className="text-grey-600/75">
                      <g fill-rule="evenodd">
                        <path
                          className="fill-current"
                          d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                          transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                        ></path>
                      </g>
                    </svg>
                    <p>13m 18s</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="episode-wrapper">
              <div className="episode-step">
                <span className="text-2xl">
                    <svg width="30" viewBox="0 0 15 15" >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.787 4.305a2.314 2.314 0 0 0-4.622 0H4.063a3.415 3.415 0 0 1 6.827 0H9.787zM4.283 4.966A1.983 1.983 0 0 0 2.3 6.95v5.068C2.3 13.112 3.188 14 4.283 14h6.39a1.983 1.983 0 0 0 1.983-1.983V6.95a1.983 1.983 0 0 0-1.983-1.983h-6.39zm3.195 6.34a1.822 1.822 0 1 0 0-3.645 1.822 1.822 0 0 0 0 3.644z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" className="text-grey-600/75">
                      <g fill-rule="evenodd">
                        <path
                          className="fill-current"
                          d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                          transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                        ></path>
                      </g>
                    </svg>
                    <p>13m 18s</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="episode-wrapper">
              <div className="episode-step">
                <span className="text-2xl">
                    <svg width="30" viewBox="0 0 15 15" >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.787 4.305a2.314 2.314 0 0 0-4.622 0H4.063a3.415 3.415 0 0 1 6.827 0H9.787zM4.283 4.966A1.983 1.983 0 0 0 2.3 6.95v5.068C2.3 13.112 3.188 14 4.283 14h6.39a1.983 1.983 0 0 0 1.983-1.983V6.95a1.983 1.983 0 0 0-1.983-1.983h-6.39zm3.195 6.34a1.822 1.822 0 1 0 0-3.645 1.822 1.822 0 0 0 0 3.644z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" className="text-grey-600/75">
                      <g fill-rule="evenodd">
                        <path
                          className="fill-current"
                          d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                          transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                        ></path>
                      </g>
                    </svg>
                    <p>13m 18s</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="episode-wrapper">
              <div className="episode-step">
                <span className="text-2xl">
                    <svg width="30" viewBox="0 0 15 15" >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.787 4.305a2.314 2.314 0 0 0-4.622 0H4.063a3.415 3.415 0 0 1 6.827 0H9.787zM4.283 4.966A1.983 1.983 0 0 0 2.3 6.95v5.068C2.3 13.112 3.188 14 4.283 14h6.39a1.983 1.983 0 0 0 1.983-1.983V6.95a1.983 1.983 0 0 0-1.983-1.983h-6.39zm3.195 6.34a1.822 1.822 0 1 0 0-3.645 1.822 1.822 0 0 0 0 3.644z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" className="text-grey-600/75">
                      <g fill-rule="evenodd">
                        <path
                          className="fill-current"
                          d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                          transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                        ></path>
                      </g>
                    </svg>
                    <p>13m 18s</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="episode-wrapper">
              <div className="episode-step">
                <span className="text-2xl">
                    <svg width="30" viewBox="0 0 15 15" >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.787 4.305a2.314 2.314 0 0 0-4.622 0H4.063a3.415 3.415 0 0 1 6.827 0H9.787zM4.283 4.966A1.983 1.983 0 0 0 2.3 6.95v5.068C2.3 13.112 3.188 14 4.283 14h6.39a1.983 1.983 0 0 0 1.983-1.983V6.95a1.983 1.983 0 0 0-1.983-1.983h-6.39zm3.195 6.34a1.822 1.822 0 1 0 0-3.645 1.822 1.822 0 0 0 0 3.644z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" className="text-grey-600/75">
                      <g fill-rule="evenodd">
                        <path
                          className="fill-current"
                          d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                          transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                        ></path>
                      </g>
                    </svg>
                    <p>13m 18s</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="episode-wrapper">
              <div className="episode-step">
                <span className="text-2xl">
                    <svg width="30" viewBox="0 0 15 15" >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.787 4.305a2.314 2.314 0 0 0-4.622 0H4.063a3.415 3.415 0 0 1 6.827 0H9.787zM4.283 4.966A1.983 1.983 0 0 0 2.3 6.95v5.068C2.3 13.112 3.188 14 4.283 14h6.39a1.983 1.983 0 0 0 1.983-1.983V6.95a1.983 1.983 0 0 0-1.983-1.983h-6.39zm3.195 6.34a1.822 1.822 0 1 0 0-3.645 1.822 1.822 0 0 0 0 3.644z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" className="text-grey-600/75">
                      <g fill-rule="evenodd">
                        <path
                          className="fill-current"
                          d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                          transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                        ></path>
                      </g>
                    </svg>
                    <p>13m 18s</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="episode-wrapper">
              <div className="episode-step">
                <span className="text-2xl">
                    <svg width="30" viewBox="0 0 15 15" >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.787 4.305a2.314 2.314 0 0 0-4.622 0H4.063a3.415 3.415 0 0 1 6.827 0H9.787zM4.283 4.966A1.983 1.983 0 0 0 2.3 6.95v5.068C2.3 13.112 3.188 14 4.283 14h6.39a1.983 1.983 0 0 0 1.983-1.983V6.95a1.983 1.983 0 0 0-1.983-1.983h-6.39zm3.195 6.34a1.822 1.822 0 1 0 0-3.645 1.822 1.822 0 0 0 0 3.644z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" className="text-grey-600/75">
                      <g fill-rule="evenodd">
                        <path
                          className="fill-current"
                          d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                          transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                        ></path>
                      </g>
                    </svg>
                    <p>13m 18s</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="episode-wrapper">
              <div className="episode-step">
                <span className="text-2xl">
                    <svg width="30" viewBox="0 0 15 15" >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.787 4.305a2.314 2.314 0 0 0-4.622 0H4.063a3.415 3.415 0 0 1 6.827 0H9.787zM4.283 4.966A1.983 1.983 0 0 0 2.3 6.95v5.068C2.3 13.112 3.188 14 4.283 14h6.39a1.983 1.983 0 0 0 1.983-1.983V6.95a1.983 1.983 0 0 0-1.983-1.983h-6.39zm3.195 6.34a1.822 1.822 0 1 0 0-3.645 1.822 1.822 0 0 0 0 3.644z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" className="text-grey-600/75">
                      <g fill-rule="evenodd">
                        <path
                          className="fill-current"
                          d="M5 2C2.25 2 0 4.25 0 7s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm2.282 6.923L4.615 7.318v-3.01h.77v2.608l2.307 1.355-.41.652z"
                          transform="translate(-978.000000, -378.000000) translate(330.000000, 364.000000) translate(444.000000, 8.000000) translate(204.000000, 4.000000)"
                        ></path>
                      </g>
                    </svg>
                    <p>13m 18s</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="video-play">
            <ReactPlayer
              ref={playerRef}
              url={VIDEO_PATH}
              controls={true}
              width="880px"
              height="100%"
              style={{ margin: "0 auto" }}
            />
          </div>
          <div className="container">
            <div className="stack-block">
              <div className="stack-content">
                <img src={stack} width="50px" alt="stack" />
                <p className="stack-desc">
                  Get 10 free Adobe Stock photos. Start downloading amazing
                  royalty-free stock photos today.
                </p>
              </div>
              <div className="stack-button">
                <a href="">ads via Carbon</a>
              </div>
            </div>
            <div className="single-topic">
              <img src={monster} alt="monster" />
              <p>
                Hey! You’re watching Larabits. These are short and isolated
                lessons that focus on a single topic. If you don't have time to
                work through a full multi-part series, this is the section for
                you! One lesson, one technique. Want to see more?
              </p>
            </div>
            <div className="laravel-vite">
              <div className="arrow-vite">
                <div className="arrow-vite-left">
                  <svg
                    viewBox="0.75 0.75 32.5 32.5"
                    width="40"
                    classNamess="text-white"
                  >
                    <g fill-rule="evenodd">
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-opacity=".012"
                        stroke-width=".5"
                        d="M0 0L32 0 32 32 0 32z"
                        transform="translate(-969.000000, -1039.000000) translate(965.000000, 1038.000000) translate(5.000000, 2.000000) translate(16.000000, 16.000000) rotate(-270.000000) translate(-16.000000, -16.000000)"
                      ></path>
                      <path
                        classNames="fill-current"
                        d="M9.88 11.342L16 17.449 22.12 11.342 24 13.222 16 21.222 8 13.222z"
                        transform="translate(-969.000000, -1039.000000) translate(965.000000, 1038.000000) translate(5.000000, 2.000000) translate(16.000000, 16.000000) rotate(-270.000000) translate(-16.000000, -16.000000)"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="laravel-vite-content">
                <div className="laravel-vite-inner">
                  <div className="bundling-block">
                    <span>
                      <svg
                        height="45px"
                        width="45px"
                        version="1.1"
                        id="Capa_1"
                        viewBox="0 0 471.701 471.701"
                      >
                        <path
                          d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
		c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
		l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
		C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
		s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
		c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
		C444.801,187.101,434.001,213.101,414.401,232.701z"
                        />
                      </svg>
                    </span>
                    <p>Bundling Assets with Laravel Vite</p>
                  </div>
                  <div className="bundling-episode">
                    <div className="bundling-content">
                      <p className="bundling-content-text">Episode</p>
                      <p className="bundling-content-desc">31</p>
                    </div>
                    <div className="bundling-content">
                      <p className="bundling-content-text">Run Time</p>
                      <p className="bundling-content-desc">18m 49s</p>
                    </div>
                    <div className="bundling-content">
                      <p className="bundling-content-text">Published</p>
                      <p className="bundling-content-desc">Jul 11th, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="laracast-button">
                  <button className="laracast-complete">
                    <svg
                      width="15"
                      viewBox="0 0 6 5"
                      height="15"
                      className="mr-2 inline-block"
                    >
                      <g fill-rule="evenodd">
                        <g classNamess="fill-current">
                          <path
                            d="M6.888 3.2c-.154.005-.301.072-.409.187L4.24 5.738l-.773-.647c-.123-.103-.28-.151-.437-.133-.157.019-.3.101-.399.23-.205.27-.163.662.093.878l1.189.998c.237.198.577.178.791-.047L7.32 4.272c.176-.178.23-.453.134-.69-.095-.238-.32-.39-.565-.382z"
                            transform="translate(-776.000000, -320.000000) translate(774.000000, 311.000000) translate(0.000000, 4.000000) translate(0.000000, 2.000000)"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    Complete
                  </button>
                  <button className="laracast-watchlist">
                    <svg
                      width="12"
                      viewBox="0 0 8 10"
                      classNameass="fill-current mr-2 inline-block scale-75"
                    >
                      <path
                        fill-rule="nonzero"
                        d="M7.092 0H.941C.44 0 0 .389 0 .849v8.583c0 .154.045.282.119.381a.469.469 0 0 0 .38.187c.143 0 .295-.06.435-.173l2.753-2.204a.54.54 0 0 1 .334-.108.54.54 0 0 1 .334.108l2.743 2.203a.683.683 0 0 0 .425.174C7.765 10 8 9.824 8 9.432V.849C8 .389 7.593 0 7.092 0z"
                      ></path>
                    </svg>
                    Add to Watchlist
                  </button>
                </div>
              </div>
              <div className="arrow-vite arrow-vite-right">
                <div className="arrow-vite-left">
                  <svg
                    viewBox="0.75 0.75 32.5 32.5"
                    width="40"
                    classNamess="text-white"
                  >
                    <g fill-rule="evenodd">
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-opacity=".012"
                        stroke-width=".5"
                        d="M0 0L32 0 32 32 0 32z"
                        transform="translate(-969.000000, -1039.000000) translate(965.000000, 1038.000000) translate(5.000000, 2.000000) translate(16.000000, 16.000000) rotate(-270.000000) translate(-16.000000, -16.000000)"
                      ></path>
                      <path
                        classNames="fill-current"
                        d="M9.88 11.342L16 17.449 22.12 11.342 24 13.222 16 21.222 8 13.222z"
                        transform="translate(-969.000000, -1039.000000) translate(965.000000, 1038.000000) translate(5.000000, 2.000000) translate(16.000000, 16.000000) rotate(-270.000000) translate(-16.000000, -16.000000)"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="teacher-about-block">
              <div className="teacher-about-inner">
                <div className="teacher-about-img">
                  <img src={teachimg} alt="teachimg" />
                </div>
                <div className="teacher-about-content">
                  <div className="teacher-about-wrapper">
                    <div className="teacher-about-info">
                      <p className="teacher-about-title">Andre Madarang</p>
                      <p className="teacher-about-desc">
                        Your Instructor Today
                      </p>
                    </div>
                    <div className="socail-about">
                      <a href="/" className="twitter-svg">
                        <svg
                          width="20"
                          height="32"
                          viewBox="0 0 36 36"
                          className="text-grey-600"
                        >
                          <path
                            className="fill-current"
                            fill-rule="evenodd"
                            d="M18 0C8.075 0 0 8.075 0 18c0 9.924 8.075 18 18 18 9.924 0 18-8.076 18-18 0-9.925-8.074-18-18-18zm8.03 13.88c.008.179.012.358.012.538 0 5.475-4.166 11.786-11.788 11.786-2.34 0-4.518-.684-6.351-1.86.324.039.654.058.988.058 1.942 0 3.728-.663 5.146-1.773-1.813-.034-3.343-1.231-3.87-2.878.252.048.512.075.778.075.378 0 .745-.05 1.092-.145-1.895-.38-3.323-2.054-3.323-4.062l.001-.052c.558.31 1.197.496 1.876.517-1.111-.741-1.843-2.01-1.843-3.447 0-.76.204-1.472.56-2.084 2.043 2.507 5.097 4.156 8.54 4.33-.071-.304-.107-.62-.107-.945 0-2.287 1.855-4.143 4.142-4.143 1.192 0 2.268.504 3.025 1.308.944-.185 1.829-.529 2.631-1.005-.311.968-.966 1.779-1.824 2.292.84-.1 1.64-.322 2.38-.652-.553.83-1.255 1.56-2.065 2.142z"
                          ></path>
                        </svg>
                      </a>
                      <a href="/" className="github-svg">
                        <svg
                          width="20"
                          height="29"
                          viewBox="0 0 30 29"
                          className="text-grey-600"
                        >
                          <path
                            className="fill-current"
                            fill-rule="nonzero"
                            d="M27.959 7.434a14.866 14.866 0 0 0-5.453-5.414C20.21.69 17.703.025 14.984.025c-2.718 0-5.226.665-7.521 1.995A14.864 14.864 0 0 0 2.01 7.434C.67 9.714 0 12.202 0 14.901c0 3.242.953 6.156 2.858 8.746 1.906 2.589 4.367 4.38 7.385 5.375.351.064.611.019.78-.136a.755.755 0 0 0 .254-.58l-.01-1.047c-.007-.658-.01-1.233-.01-1.723l-.448.077a5.765 5.765 0 0 1-1.083.068 8.308 8.308 0 0 1-1.356-.136 3.04 3.04 0 0 1-1.308-.58c-.403-.304-.689-.701-.858-1.192l-.195-.445a4.834 4.834 0 0 0-.614-.988c-.28-.362-.563-.607-.85-.736l-.136-.097a1.428 1.428 0 0 1-.253-.233 1.062 1.062 0 0 1-.176-.271c-.039-.09-.007-.165.098-.223.104-.059.292-.087.566-.087l.39.058c.26.052.582.206.965.465.384.258.7.594.947 1.007.299.53.66.933 1.082 1.21.423.278.85.417 1.278.417.43 0 .8-.032 1.112-.097a3.9 3.9 0 0 0 .878-.29c.117-.866.436-1.53.956-1.996a13.447 13.447 0 0 1-2-.348 7.995 7.995 0 0 1-1.833-.756 5.244 5.244 0 0 1-1.571-1.298c-.416-.516-.758-1.195-1.024-2.034-.267-.84-.4-1.808-.4-2.905 0-1.563.514-2.893 1.541-3.99-.481-1.176-.436-2.493.137-3.952.377-.116.936-.03 1.678.261.741.291 1.284.54 1.629.746.345.207.621.381.83.523a13.948 13.948 0 0 1 3.745-.503c1.288 0 2.537.168 3.747.503l.741-.464c.507-.31 1.106-.595 1.795-.853.69-.258 1.216-.33 1.58-.213.586 1.46.638 2.777.156 3.951 1.028 1.098 1.542 2.428 1.542 3.99 0 1.099-.134 2.07-.4 2.916-.267.846-.611 1.524-1.034 2.034-.423.51-.95.94-1.58 1.288a8.01 8.01 0 0 1-1.834.756c-.592.155-1.259.271-2 .349.676.58 1.014 1.498 1.014 2.75v4.087c0 .232.081.426.244.58.163.155.42.2.77.136 3.019-.994 5.48-2.786 7.386-5.375 1.905-2.59 2.858-5.504 2.858-8.746 0-2.698-.671-5.187-2.01-7.466z"
                          ></path>
                        </svg>
                      </a>
                      <a href="/" className="visit-website">
                        Visit Website
                      </a>
                    </div>
                  </div>
                  <p className="greetings-text">
                    Greetings! I'm Andre, a full-stack web developer. My other
                    hobbies include playing guitar, videography and gaming.
                  </p>
                </div>
              </div>
              <div className="learnpanel-block">
                <div className="learn-wrapper">
                  <p>Things You'll Learn</p>
                  <ul>
                    <li>
                      <div className="learn-check">
                        <svg
                          width="10"
                          viewBox="0 0 6 5"
                          height="10"
                          className="text-white"
                        >
                          <g fill-rule="evenodd">
                            <g className="fill-current">
                              <path
                                d="M6.888 3.2c-.154.005-.301.072-.409.187L4.24 5.738l-.773-.647c-.123-.103-.28-.151-.437-.133-.157.019-.3.101-.399.23-.205.27-.163.662.093.878l1.189.998c.237.198.577.178.791-.047L7.32 4.272c.176-.178.23-.453.134-.69-.095-.238-.32-.39-.565-.382z"
                                transform="translate(-776.000000, -320.000000) translate(774.000000, 311.000000) translate(0.000000, 4.000000) translate(0.000000, 2.000000)"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="learn-setp">
                        Comparison with Laravel Mix
                      </div>
                    </li>
                    <li>
                      <div className="learn-check">
                        <svg
                          width="10"
                          viewBox="0 0 6 5"
                          height="10"
                          className="text-white"
                        >
                          <g fill-rule="evenodd">
                            <g className="fill-current">
                              <path
                                d="M6.888 3.2c-.154.005-.301.072-.409.187L4.24 5.738l-.773-.647c-.123-.103-.28-.151-.437-.133-.157.019-.3.101-.399.23-.205.27-.163.662.093.878l1.189.998c.237.198.577.178.791-.047L7.32 4.272c.176-.178.23-.453.134-.69-.095-.238-.32-.39-.565-.382z"
                                transform="translate(-776.000000, -320.000000) translate(774.000000, 311.000000) translate(0.000000, 4.000000) translate(0.000000, 2.000000)"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="learn-setp">Bundling CSS Assets</div>
                    </li>
                    <li>
                      <div className="learn-check">
                        <svg
                          width="10"
                          viewBox="0 0 6 5"
                          height="10"
                          className="text-white"
                        >
                          <g fill-rule="evenodd">
                            <g className="fill-current">
                              <path
                                d="M6.888 3.2c-.154.005-.301.072-.409.187L4.24 5.738l-.773-.647c-.123-.103-.28-.151-.437-.133-.157.019-.3.101-.399.23-.205.27-.163.662.093.878l1.189.998c.237.198.577.178.791-.047L7.32 4.272c.176-.178.23-.453.134-.69-.095-.238-.32-.39-.565-.382z"
                                transform="translate(-776.000000, -320.000000) translate(774.000000, 311.000000) translate(0.000000, 4.000000) translate(0.000000, 2.000000)"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="learn-setp">Bundling JS Assets</div>
                    </li>
                  </ul>
                </div>
                <div className="learnpanel-content">
                  <div className="learnpanel-detail">
                    <p className="learnpanel-title">About This Larabit</p>
                    <p className="learnpanel-date">
                      Published on Jul 11th, 2022
                    </p>
                  </div>
                  <p className="learnpanel-desc">
                    Vite is now the default module bundler for new Laravel
                    projects. Its best feature is an incredibly fast development
                    server with Hot Module replacement. In this Larabit, we take
                    a look at common scenarios where you want to make use of
                    Vite to process your CSS and JavaScript assets.
                  </p>
                </div>
              </div>
              <div className="download-block">
                <div className="download-info">
                  <img src={download1} alt="download1" />
                  <p>View this lesson's source code.</p>
                </div>
                <div className="download-info">
                  <img src={download2} alt="download1" />
                  <p>Download this video.</p>
                </div>
                <div className="download-info">
                  <img src={download3} alt="download1" />
                  <p>Download series wallpaper.</p>
                </div>
              </div>
              <div className="laracastscta">
                <img src={laracastscta} alt="laracastscta" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
