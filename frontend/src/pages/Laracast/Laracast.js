import React from "react";
import popular1 from "../../assets/images/laracast/popular1.png";
import popular2 from "../../assets/images/laracast/popular2.png";
import Navbar from "../../components/Navbar/Navbar";
import "./Laracast.scss";

const Laracast = () => {
  return (
    <>
      <Navbar />
      <div className="laracast-page">
        <div className="container">
          <div className="laracst-hometitle">
            <p className="laracst-maintitle">Popular Bits</p>
            <p className="laracst-desc">
              Here's what your peers have watched the most.
            </p>
          </div>
          <div className="popularbit-block">
            <div className="popularbit-innerblock">
              <div className="popularbit-play">
                <div className="popularbit-content">
                  <div className="popularbit-title">
                    <a href="#">Bundling Assets with Laravel Vite</a>
                  </div>
                  <div className="popularbit-desc">
                    Vite is now the default module bundler for new Laravel
                    projects. Its best feature is an incredibly...
                  </div>
                  <div className="popularbit-feature">
                    <div className="popularbit-feature-content">
                      <div className="popularbit-teacher popularbit-item">
                        <p className="popularbit-item-title">Your Teacher</p>
                        <p className="popularbit-item-desc">Andre Madarang</p>
                      </div>
                      <div className="popularbit-progress popularbit-item">
                        <p className="popularbit-item-title">Progress</p>
                        <p className="popularbit-item-desc">0%</p>
                      </div>
                      <div className="popularbit-timeing popularbit-item">
                        <p className="popularbit-item-title">Duration</p>
                        <p className="popularbit-item-desc">18m 49s</p>
                      </div>
                      <div className="popularbit-social popularbit-item">
                        <p className="popularbit-item-title">Say Hi</p>
                        <p className="popularbit-item-desc">Twitter</p>
                      </div>
                    </div>
                  </div>
                  <div className="popularbit-button">
                    <div className="play-button">
                      <a href="/video">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"fill="#000000" stroke="none">
                                <path d="M71 206 c-87 -48 -50 -186 49 -186 51 0 100 49 100 99 0 75 -83 124
                                -149 87z m104 -31 c33 -32 33 -78 0 -110 -49 -50 -135 -15 -135 55 0 41 39 80
                                80 80 19 0 40 -9 55 -25z"/>
                                <path d="M100 120 c0 -33 6 -36 34 -15 20 15 20 15 0 30 -28 21 -34 18 -34
                                -15z"/>
                            </g>
                        </svg>
                        Play
                      </a>
                    </div>
                    <div className="watchlist-button">
                      <a href="#">
                        <svg
                          width="12"
                          viewBox="0 0 8 10"
                          className="fill-current mr-2 inline-block scale-75"
                        >
                          <path
                            fill-rule="nonzero"
                            d="M7.092 0H.941C.44 0 0 .389 0 .849v8.583c0 .154.045.282.119.381a.469.469 0 0 0 .38.187c.143 0 .295-.06.435-.173l2.753-2.204a.54.54 0 0 1 .334-.108.54.54 0 0 1 .334.108l2.743 2.203a.683.683 0 0 0 .425.174C7.765 10 8 9.824 8 9.432V.849C8 .389 7.593 0 7.092 0z"
                          ></path>
                        </svg>
                        Add to Watchlist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <img className="popoularimg" src={popular1}/>
            </div>
            <div className="popularbit-innerblock popularbit-inner2">
              <div className="popularbit-play">
                <div className="popularbit-content">
                  <div className="popularbit-title">
                    <a href="#">The Gambler's Ruin, Illustrated With PHP</a>
                  </div>
                  <div className="popularbit-desc">
                    Let's do something a little different in this Larabit! We won't focus on the web, or the...
                  </div>
                  <div className="popularbit-feature">
                    <div className="popularbit-feature-content">
                      <div className="popularbit-teacher popularbit-item">
                        <p className="popularbit-item-title">Your Teacher</p>
                        <p className="popularbit-item-desc">Jeffrey Way</p>
                      </div>
                      <div className="popularbit-progress popularbit-item">
                        <p className="popularbit-item-title">Progress</p>
                        <p className="popularbit-item-desc">0%</p>
                      </div>
                      <div className="popularbit-timeing popularbit-item">
                        <p className="popularbit-item-title">Duration</p>
                        <p className="popularbit-item-desc">16m 49s</p>
                      </div>
                      <div className="popularbit-social popularbit-item">
                        <p className="popularbit-item-title">Say Hi</p>
                        <p className="popularbit-item-desc">Twitter</p>
                      </div>
                    </div>
                  </div>
                  <div className="popularbit-button">
                    <div className="play-button">
                      <a href="#">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"fill="#000000" stroke="none">
                                <path d="M71 206 c-87 -48 -50 -186 49 -186 51 0 100 49 100 99 0 75 -83 124
                                -149 87z m104 -31 c33 -32 33 -78 0 -110 -49 -50 -135 -15 -135 55 0 41 39 80
                                80 80 19 0 40 -9 55 -25z"/>
                                <path d="M100 120 c0 -33 6 -36 34 -15 20 15 20 15 0 30 -28 21 -34 18 -34
                                -15z"/>
                            </g>
                        </svg>
                        Play
                      </a>
                    </div>
                    <div className="watchlist-button">
                      <a href="#">
                        <svg
                          width="12"
                          viewBox="0 0 8 10"
                          className="fill-current mr-2 inline-block scale-75"
                        >
                          <path
                            fill-rule="nonzero"
                            d="M7.092 0H.941C.44 0 0 .389 0 .849v8.583c0 .154.045.282.119.381a.469.469 0 0 0 .38.187c.143 0 .295-.06.435-.173l2.753-2.204a.54.54 0 0 1 .334-.108.54.54 0 0 1 .334.108l2.743 2.203a.683.683 0 0 0 .425.174C7.765 10 8 9.824 8 9.432V.849C8 .389 7.593 0 7.092 0z"
                          ></path>
                        </svg>
                        Add to Watchlist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <img className="popoularimg" src={popular2}/>
            </div>
            <div className="popularbit-innerblock popularbit-inner3">
              <div className="popularbit-play">
                <div className="popularbit-content">
                  <div className="popularbit-title">
                    <a href="#">Enable Automatic Tailwind Class Sorting in 4 Minutes</a>
                  </div>
                  <div className="popularbit-desc">
                  One little TailwindCSS snag that I often run into relates to class sorting. I'd love to say...
                  </div>
                  <div className="popularbit-feature">
                    <div className="popularbit-feature-content">
                      <div className="popularbit-teacher popularbit-item">
                        <p className="popularbit-item-title">Your Teacher</p>
                        <p className="popularbit-item-desc">Jeffrey Way</p>
                      </div>
                      <div className="popularbit-progress popularbit-item">
                        <p className="popularbit-item-title">Progress</p>
                        <p className="popularbit-item-desc">0%</p>
                      </div>
                      <div className="popularbit-timeing popularbit-item">
                        <p className="popularbit-item-title">Duration</p>
                        <p className="popularbit-item-desc">4m 46s</p>
                      </div>
                      <div className="popularbit-social popularbit-item">
                        <p className="popularbit-item-title">Say Hi</p>
                        <p className="popularbit-item-desc">Twitter</p>
                      </div>
                    </div>
                  </div>
                  <div className="popularbit-button">
                    <div className="play-button">
                      <a href="#">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"fill="#000000" stroke="none">
                                <path d="M71 206 c-87 -48 -50 -186 49 -186 51 0 100 49 100 99 0 75 -83 124
                                -149 87z m104 -31 c33 -32 33 -78 0 -110 -49 -50 -135 -15 -135 55 0 41 39 80
                                80 80 19 0 40 -9 55 -25z"/>
                                <path d="M100 120 c0 -33 6 -36 34 -15 20 15 20 15 0 30 -28 21 -34 18 -34
                                -15z"/>
                            </g>
                        </svg>
                        Play
                      </a>
                    </div>
                    <div className="watchlist-button">
                      <a href="#">
                        <svg
                          width="12"
                          viewBox="0 0 8 10"
                          className="fill-current mr-2 inline-block scale-75"
                        >
                          <path
                            fill-rule="nonzero"
                            d="M7.092 0H.941C.44 0 0 .389 0 .849v8.583c0 .154.045.282.119.381a.469.469 0 0 0 .38.187c.143 0 .295-.06.435-.173l2.753-2.204a.54.54 0 0 1 .334-.108.54.54 0 0 1 .334.108l2.743 2.203a.683.683 0 0 0 .425.174C7.765 10 8 9.824 8 9.432V.849C8 .389 7.593 0 7.092 0z"
                          ></path>
                        </svg>
                        Add to Watchlist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <img className="popoularimg" src={popular2}/>
            </div>
            <div className="popularbit-innerblock popularbit-inner4">
              <div className="popularbit-play">
                <div className="popularbit-content">
                  <div className="popularbit-title">
                    <a href="#">Cypress and Laravel Crash-Course</a>
                  </div>
                  <div className="popularbit-desc">
                  If you're unfamiliar, Cypress is a wonderful end-to-end test framework that runs in the browser. I've recently...
                  </div>
                  <div className="popularbit-feature">
                    <div className="popularbit-feature-content">
                      <div className="popularbit-teacher popularbit-item">
                        <p className="popularbit-item-title">Your Teacher</p>
                        <p className="popularbit-item-desc">Jeffrey Way</p>
                      </div>
                      <div className="popularbit-progress popularbit-item">
                        <p className="popularbit-item-title">Progress</p>
                        <p className="popularbit-item-desc">0%</p>
                      </div>
                      <div className="popularbit-timeing popularbit-item">
                        <p className="popularbit-item-title">Duration</p>
                        <p className="popularbit-item-desc">18m 23s</p>
                      </div>
                      <div className="popularbit-social popularbit-item">
                        <p className="popularbit-item-title">Say Hi</p>
                        <p className="popularbit-item-desc">Twitter</p>
                      </div>
                    </div>
                  </div>
                  <div className="popularbit-button">
                    <div className="play-button">
                      <a href="#">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"fill="#000000" stroke="none">
                                <path d="M71 206 c-87 -48 -50 -186 49 -186 51 0 100 49 100 99 0 75 -83 124
                                -149 87z m104 -31 c33 -32 33 -78 0 -110 -49 -50 -135 -15 -135 55 0 41 39 80
                                80 80 19 0 40 -9 55 -25z"/>
                                <path d="M100 120 c0 -33 6 -36 34 -15 20 15 20 15 0 30 -28 21 -34 18 -34
                                -15z"/>
                            </g>
                        </svg>
                        Play
                      </a>
                    </div>
                    <div className="watchlist-button">
                      <a href="#">
                        <svg
                          width="12"
                          viewBox="0 0 8 10"
                          className="fill-current mr-2 inline-block scale-75"
                        >
                          <path
                            fill-rule="nonzero"
                            d="M7.092 0H.941C.44 0 0 .389 0 .849v8.583c0 .154.045.282.119.381a.469.469 0 0 0 .38.187c.143 0 .295-.06.435-.173l2.753-2.204a.54.54 0 0 1 .334-.108.54.54 0 0 1 .334.108l2.743 2.203a.683.683 0 0 0 .425.174C7.765 10 8 9.824 8 9.432V.849C8 .389 7.593 0 7.092 0z"
                          ></path>
                        </svg>
                        Add to Watchlist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <img className="popoularimg" src={popular2}/>
            </div>
            <div className="popularbit-innerblock popularbit-inner5">
              <div className="popularbit-play">
                <div className="popularbit-content">
                  <div className="popularbit-title">
                    <a href="#">Simpler Modals With the Dialog Element</a>
                  </div>
                  <div className="popularbit-desc">
                  The HTML dialog element can be used to create custom alerts, prompts, or general modals. Even better,...
                  </div>
                  <div className="popularbit-feature">
                    <div className="popularbit-feature-content">
                      <div className="popularbit-teacher popularbit-item">
                        <p className="popularbit-item-title">Your Teacher</p>
                        <p className="popularbit-item-desc">Jeffrey Way</p>
                      </div>
                      <div className="popularbit-progress popularbit-item">
                        <p className="popularbit-item-title">Progress</p>
                        <p className="popularbit-item-desc">0%</p>
                      </div>
                      <div className="popularbit-timeing popularbit-item">
                        <p className="popularbit-item-title">Duration</p>
                        <p className="popularbit-item-desc">14m 48s</p>
                      </div>
                      <div className="popularbit-social popularbit-item">
                        <p className="popularbit-item-title">Say Hi</p>
                        <p className="popularbit-item-desc">Twitter</p>
                      </div>
                    </div>
                  </div>
                  <div className="popularbit-button">
                    <div className="play-button">
                      <a href="#">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"fill="#000000" stroke="none">
                                <path d="M71 206 c-87 -48 -50 -186 49 -186 51 0 100 49 100 99 0 75 -83 124
                                -149 87z m104 -31 c33 -32 33 -78 0 -110 -49 -50 -135 -15 -135 55 0 41 39 80
                                80 80 19 0 40 -9 55 -25z"/>
                                <path d="M100 120 c0 -33 6 -36 34 -15 20 15 20 15 0 30 -28 21 -34 18 -34
                                -15z"/>
                            </g>
                        </svg>
                        Play
                      </a>
                    </div>
                    <div className="watchlist-button">
                      <a href="#">
                        <svg
                          width="12"
                          viewBox="0 0 8 10"
                          className="fill-current mr-2 inline-block scale-75"
                        >
                          <path
                            fill-rule="nonzero"
                            d="M7.092 0H.941C.44 0 0 .389 0 .849v8.583c0 .154.045.282.119.381a.469.469 0 0 0 .38.187c.143 0 .295-.06.435-.173l2.753-2.204a.54.54 0 0 1 .334-.108.54.54 0 0 1 .334.108l2.743 2.203a.683.683 0 0 0 .425.174C7.765 10 8 9.824 8 9.432V.849C8 .389 7.593 0 7.092 0z"
                          ></path>
                        </svg>
                        Add to Watchlist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <img className="popoularimg" src={popular2}/>
            </div>
            <div className="popularbit-innerblock popularbit-inner6">
              <div className="popularbit-play">
                <div className="popularbit-content">
                  <div className="popularbit-title">
                    <a href="#">6 New'ish HTML Tags You Can Use Right Now</a>
                  </div>
                  <div className="popularbit-desc">
                  Today, we'll talk about plain old HTML. I get it: you learned HTML years ago. But since...
                  </div>
                  <div className="popularbit-feature">
                    <div className="popularbit-feature-content">
                      <div className="popularbit-teacher popularbit-item">
                        <p className="popularbit-item-title">Your Teacher</p>
                        <p className="popularbit-item-desc">Jeffrey Way</p>
                      </div>
                      <div className="popularbit-progress popularbit-item">
                        <p className="popularbit-item-title">Progress</p>
                        <p className="popularbit-item-desc">0%</p>
                      </div>
                      <div className="popularbit-timeing popularbit-item">
                        <p className="popularbit-item-title">Duration</p>
                        <p className="popularbit-item-desc">17m 51s</p>
                      </div>
                      <div className="popularbit-social popularbit-item">
                        <p className="popularbit-item-title">Say Hi</p>
                        <p className="popularbit-item-desc">Twitter</p>
                      </div>
                    </div>
                  </div>
                  <div className="popularbit-button">
                    <div className="play-button">
                      <a href="#">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"fill="#000000" stroke="none">
                                <path d="M71 206 c-87 -48 -50 -186 49 -186 51 0 100 49 100 99 0 75 -83 124
                                -149 87z m104 -31 c33 -32 33 -78 0 -110 -49 -50 -135 -15 -135 55 0 41 39 80
                                80 80 19 0 40 -9 55 -25z"/>
                                <path d="M100 120 c0 -33 6 -36 34 -15 20 15 20 15 0 30 -28 21 -34 18 -34
                                -15z"/>
                            </g>
                        </svg>
                        Play
                      </a>
                    </div>
                    <div className="watchlist-button">
                      <a href="#">
                        <svg
                          width="12"
                          viewBox="0 0 8 10"
                          className="fill-current mr-2 inline-block scale-75"
                        >
                          <path
                            fill-rule="nonzero"
                            d="M7.092 0H.941C.44 0 0 .389 0 .849v8.583c0 .154.045.282.119.381a.469.469 0 0 0 .38.187c.143 0 .295-.06.435-.173l2.753-2.204a.54.54 0 0 1 .334-.108.54.54 0 0 1 .334.108l2.743 2.203a.683.683 0 0 0 .425.174C7.765 10 8 9.824 8 9.432V.849C8 .389 7.593 0 7.092 0z"
                          ></path>
                        </svg>
                        Add to Watchlist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <img className="popoularimg" src={popular2}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Laracast;
