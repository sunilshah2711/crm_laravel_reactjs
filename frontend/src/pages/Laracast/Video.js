import React from "react";
import "./Video.scss";
import logowitharrow from "../../assets/images/laracast/logo-white-arrow.svg";
import andreslarabits from "../../assets/images/laracast/andres-larabits.png";
import stack from "../../assets/images/laracast/stack.jpg";
import monster from "../../assets/images/laracast/larabit-monster-icon.svg";

const Video = () => {
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
                    <svg width="9" viewBox="0 0 9 12" class="mr-1">
                      <g fill-rule="evenodd">
                        <g class="fill-current">
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
                    <svg width="10" viewBox="0 0 10 10" class="mr-1">
                      <g fill-rule="evenodd">
                        <path
                          class="fill-current"
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
                <span class="text-2xl">01</span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" class="text-grey-600/75">
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
                <span class="text-2xl">01</span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" class="text-grey-600/75">
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
                <span class="text-2xl">01</span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" class="text-grey-600/75">
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
                <span class="text-2xl">01</span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" class="text-grey-600/75">
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
                <span class="text-2xl">01</span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" class="text-grey-600/75">
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
                <span class="text-2xl">01</span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" class="text-grey-600/75">
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
                <span class="text-2xl">01</span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" class="text-grey-600/75">
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
                <span class="text-2xl">01</span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" class="text-grey-600/75">
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
                <span class="text-2xl">01</span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" class="text-grey-600/75">
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
                <span class="text-2xl">01</span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" class="text-grey-600/75">
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
                <span class="text-2xl">01</span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" class="text-grey-600/75">
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
                <span class="text-2xl">01</span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" class="text-grey-600/75">
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
                <span class="text-2xl">01</span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" class="text-grey-600/75">
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
                <span class="text-2xl">01</span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" class="text-grey-600/75">
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
                <span class="text-2xl">01</span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" class="text-grey-600/75">
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
                <span class="text-2xl">01</span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" class="text-grey-600/75">
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
                <span class="text-2xl">01</span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" class="text-grey-600/75">
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
                <span class="text-2xl">01</span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" class="text-grey-600/75">
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
                <span class="text-2xl">01</span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" class="text-grey-600/75">
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
                <span class="text-2xl">01</span>
              </div>
              <div className="episode-content">
                <p className="episode-title">Hello, Petite Vue</p>
                <div className="episode-timestep">
                  <p className="episode-number">Episode 1</p>
                  <div className="episode-minit">
                    <svg width="8" viewBox="0 0 10 10" class="text-grey-600/75">
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
          <div className="video-play"></div>
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
                <div>
                  <button>
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
                  <button>
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
              <div className="arrow-vite">
                <div className="arrow-vite-left">
                  <svg
                    viewBox="0.75 0.75 32.5 32.5"
                    width="40"
                    classNamess="text-white"
                  >
                    <g  fill-rule="evenodd">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
